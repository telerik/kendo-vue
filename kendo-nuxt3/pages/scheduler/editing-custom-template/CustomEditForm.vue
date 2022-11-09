<template>
    <SchedulerFormEditor 
        :titleEditor="'myTemplate'"
            >
          <template v-slot:myTemplate="{ props }">
          <div>
            2222
            <forminput
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
            </div>
          </template>
    <SchedulerActionButtons
      :editSaveMessage="'Save'"
      :editCancelMessage="'Cancel'"
      @cancel="handleCancel"
    />
  </SchedulerFormEditor>
</template>
<script>
import {
  SchedulerActionButtons,
  SchedulerFormEditor,
} from '@progress/kendo-vue-scheduler';
import {
  FormElement,
  Field,
} from '@progress/kendo-vue-form';
import FormInput from './FormInput.vue';

export default {
  emits: {
    cancel: null,
  },
   inject: {
     ks: {
        default: null
    },
    kendoForm: { default: {} },
  },
  components: {
    SchedulerFormEditor,
    SchedulerActionButtons,
    kfield: Field,
    FormElement,
    forminput: FormInput
  },
  methods: {
      handleCancel(e){
          this.$emit('cancel', e);
      }
  }
};
</script>
