<template>
  <SchedulerFormEditor
    :titleEditor="'customTitleEditor'"
    :allDayEditor="'customAllDayEditor'"
  >
    <template v-slot:customTitleEditor="{ props }">
      <forminput
        v-bind="props"
        :placeholder="'Custom title input'"
        @change="props.onChange"
        @blur="props.onBlur"
        @focus="props.onFocus"
      />
    </template>
    <template v-slot:customAllDayEditor="{ props }">
      <formswitch
        v-bind="props"
        @change="props.onChange"
        @blur="props.onBlur"
        @focus="props.onFocus"
      />
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
import { FormElement, Field } from '@progress/kendo-vue-form';
import FormInput from './FormInput.vue';
import FormSwitch from './FormSwitch.vue';

export default {
  emits: {
    cancel: null,
  },
  inject: {
    ks: {
      default: null,
    },
    kendoForm: { default: {} },
  },
  components: {
    SchedulerFormEditor,
    SchedulerActionButtons,
    kfield: Field,
    FormElement,
    forminput: FormInput,
    formswitch: FormSwitch,
  },
  methods: {
    handleCancel(e) {
      this.$emit('cancel', e);
    },
  },
};
</script>
