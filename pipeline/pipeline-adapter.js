import { createStore as createProtectedStore } from '../protected-core/js/core/store.js';
import { createEventBus as createProtectedEventBus } from '../protected-core/js/core/events.js';
import { runEngine01 } from '../protected-core/js/engines/engine01-intake.js';
import {
  runEngine02, finalizeMapping,
  updateSheetMapping as protectedUpdateSheetMapping,
  confirmSheetMapping as protectedConfirmSheetMapping,
  updateFieldMapping as protectedUpdateFieldMapping,
  confirmFieldMapping as protectedConfirmFieldMapping,
  confirmAllSuggested as protectedConfirmAllSuggested
} from '../protected-core/js/engines/engine02-mapping.js';
import { runEngine03 } from '../protected-core/js/engines/engine03-canonicalization.js';
import { runEngine04 } from '../protected-core/js/engines/engine04-validation.js';
import { runEngine05 } from '../protected-core/js/engines/engine05-routing.js';
import { runEngine06 } from '../protected-core/js/engines/engine06-calculation.js';
import { runEngine07 } from '../protected-core/js/engines/engine07-assurance.js';
import { runEngine08 } from '../protected-core/js/engines/engine08-aggregation.js';
import { runEngine09 } from '../protected-core/js/engines/engine09-audit.js';

const PROTECTED_STAGE_FUNCTIONS=Object.freeze({E03:runEngine03,E04:runEngine04,E05:runEngine05,E06:runEngine06,E07:runEngine07,E08:runEngine08,E09:runEngine09});
function isFreezable(value){return Array.isArray(value)||Boolean(value&&typeof value==='object'&&Object.getPrototypeOf(value)===Object.prototype);}
function freezeDeep(value){if(!isFreezable(value)||Object.isFrozen(value))return value;for(const child of Object.values(value))freezeDeep(child);return Object.freeze(value);}

export function createProtectedPipelineAdapter(config){
  const store=createProtectedStore();
  const bus=createProtectedEventBus();
  const requireMapping=()=>{const state=store.getState();if(!state.mapping)throw new Error('Engine 2 mapping review has not been created.');return state;};
  const commitMappingReview=next=>{const frozen=freezeDeep(next);store.patchFrom('mapping',{lifecycle:'mapping_review',mapping:frozen,error:null});return frozen;};
  const adapter={
    async runIntake(file){return runEngine01({file,config},{store,bus});},
    getMappingMetadata(){return freezeDeep(config.inputSchema.fields.map(field=>({fieldId:field.field_id,expectedSheet:field.sheet,controlledField:field.column_label,dataType:field.data_type,unitFormat:field.unit_format||'',requirementClass:field.requirement_class,applicableWhen:field.applicable_when||'',missingValuePolicy:field.missing_value_policy||''})));},
    async buildMapping(){return freezeDeep(await runEngine02({config},{store,bus}));},
    async updateSheetMapping(expectedSheet,sourceSheetName){const state=requireMapping();return commitMappingReview(protectedUpdateSheetMapping(state.mapping,state.raw,config.inputSchema,config.mappingAliases,expectedSheet,sourceSheetName));},
    async confirmSheetMapping(expectedSheet,confirmed=true){const state=requireMapping();return commitMappingReview(protectedConfirmSheetMapping(state.mapping,expectedSheet,confirmed));},
    async updateFieldMapping(fieldId,sourceSheet,sourceColumnIndex){const state=requireMapping();return commitMappingReview(protectedUpdateFieldMapping(state.mapping,state.raw,fieldId,sourceSheet,sourceColumnIndex));},
    async confirmFieldMapping(fieldId,confirmed=true){const state=requireMapping();return commitMappingReview(protectedConfirmFieldMapping(state.mapping,fieldId,confirmed));},
    async confirmAllSuggested(){const state=requireMapping();return commitMappingReview(protectedConfirmAllSuggested(state.mapping));},
    async confirmMapping(){const state=requireMapping();const frozen=freezeDeep(await finalizeMapping(state.mapping));store.patchFrom('mapping',{lifecycle:'mapping_confirmed',mapping:frozen,error:null});return frozen;},
    async runStage(stage){const fn=PROTECTED_STAGE_FUNCTIONS[stage];if(!fn)throw new Error(`Stage ${stage} requires a governed adapter method or is unknown.`);return fn({config},{store,bus});},
    getPublicProtectedState(){return store.getPublicState();},
    reset(){store.clear();}
  };
  return Object.freeze(adapter);
}
