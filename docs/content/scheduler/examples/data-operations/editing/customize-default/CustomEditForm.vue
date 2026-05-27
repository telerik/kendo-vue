<template>
  <SchedulerFormEditor
    :titleEditor="'customTitleEditor'"
    :allDayEditor="'customAllDayEditor'"
  >
    <template #customTitleEditor="{ props }">
      <FormInput
        v-bind="props"
        :placeholder="'Custom title input'"
        @change="props.onChange"
        @blur="props.onBlur"
        @focus="props.onFocus"
      />
    </template>
    <template #customAllDayEditor="{ props }">
      <FormSwitch
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
<script setup>
import {
    SchedulerActionButtons,
    SchedulerFormEditor,
} from '@progress/kendo-vue-scheduler';
import FormInput from './FormInput.vue';
import FormSwitch from './FormSwitch.vue';

const emit = defineEmits(['cancel']);

function handleCancel(e) {
    emit('cancel', e);
}
</script>
