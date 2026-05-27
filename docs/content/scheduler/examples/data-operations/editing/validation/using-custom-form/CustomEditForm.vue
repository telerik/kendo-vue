<template>
  <FormElement class="k-scheduler-edit-form">
    <div class="k-form-field">
      <Field :name="'title'" :component="'myTemplate'" :label="'Event Title'">
        <template #myTemplate="{ props }">
          <FormInput
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>

      <Field
        :name="'start'"
        :component="'myTemplate'"
        :label="'Event description:'"
      >
        <template #myTemplate="{ props }">
          <FormDateTimePicker
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <Field
        :name="'end'"
        :component="'myTemplate'"
        :label="'Event description:'"
      >
        <template #myTemplate="{ props }">
          <FormDateTimePicker
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <Field
        :name="'isAllDay'"
        :component="'myTemplate'"
        :label="'All Day Event'"
      >
        <template #myTemplate="{ props }">
          <FormSwitch
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <Field
        :name="'description'"
        :component="'myTemplate'"
        :label="'Event description:'"
      >
        <template #myTemplate="{ props }">
          <FormTextArea
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
    </div>
    <SchedulerActionButtons
      :editSaveMessage="'Save'"
      :editCancelMessage="'Cancel'"
      @cancel="handleCancel"
    />
  </FormElement>
</template>
<script setup>
import { FormElement, Field } from '@progress/kendo-vue-form';
import {
    SchedulerActionButtons,
} from '@progress/kendo-vue-scheduler';
import FormInput from './FormInput.vue';
import FormSwitch from './FormSwitch.vue';
import FormTextArea from './FormTextArea.vue';
import FormDateTimePicker from './FormDateTimePicker.vue';

const emit = defineEmits(['cancel']);

function handleCancel(e) {
    emit('cancel', e);
}
</script>
