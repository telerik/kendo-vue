<template>
  <FormElement class="k-scheduler-edit-form">
    <div class="k-form-field">
      <kfield :name="'title'" :component="'myTemplate'" :label="'Event Title'">
        <template v-slot:myTemplate="{ props }">
          <forminput
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </kfield>

      <kfield
        :name="'start'"
        :component="'myTemplate'"
        :label="'Event description:'"
      >
        <template v-slot:myTemplate="{ props }">
          <formdatetimepicker
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </kfield>
      <kfield
        :name="'end'"
        :component="'myTemplate'"
        :label="'Event description:'"
      >
        <template v-slot:myTemplate="{ props }">
          <formdatetimepicker
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </kfield>
      <kfield
        :name="'isAllDay'"
        :component="'myTemplate'"
        :label="'All Day Event'"
      >
        <template v-slot:myTemplate="{ props }">
          <formswitch
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </kfield>
      <kfield
        :name="'description'"
        :component="'myTemplate'"
        :label="'Event description:'"
      >
        <template v-slot:myTemplate="{ props }">
          <formtextarea
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </kfield>
    </div>
    <SchedulerActionButtons
      :editSaveMessage="'Save'"
      :editCancelMessage="'Cancel'"
      @cancel="handleCancel"
    />
  </FormElement>
</template>
<script>
import {
  SchedulerActionButtons,
  SchedulerFormEditor,
} from '@progress/kendo-vue-scheduler';
import { FormElement, Field } from '@progress/kendo-vue-form';
import FormInput from './FormInput.vue';
import FormSwitch from './FormSwitch.vue';
import FormTextArea from './FormTextArea.vue';
import FormDateTimePicker from './FormDateTimePicker.vue';

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
    formtextarea: FormTextArea,
    formdatetimepicker: FormDateTimePicker,
  },
  methods: {
    handleCancel(e) {
      this.$emit('cancel', e);
    },
  },
};
</script>
