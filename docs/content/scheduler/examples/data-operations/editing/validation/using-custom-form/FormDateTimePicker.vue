<template>
  <FieldWrapper>
    <KLabel :class="'k-form-label'" :editor-id="id" :editor-valid="valid">
      {{ label }}
    </KLabel>
    <div class="k-form-field-wrap">
      <DateTimePicker
        :style="{ width: '230px' }"
        :valid="valid"
        :value="value"
        :id="id"
        @change="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <Error v-if="showValidationMessage">
        {{ validationMessage }}
      </Error>
      <Hint v-else>{{ hint }}</Hint>
    </div>
  </FieldWrapper>
</template>
<script setup>
import { computed } from 'vue';
import { FieldWrapper } from '@progress/kendo-vue-form';
import { Error, Hint, Label as KLabel } from '@progress/kendo-vue-labels';
import { DateTimePicker } from '@progress/kendo-vue-dateinputs';

const props = defineProps({
    touched: Boolean,
    label: String,
    validationMessage: String,
    hint: String,
    id: String,
    valid: Boolean,
    value: {
        type: Date,
        default: null,
    },
});

const emit = defineEmits(['change', 'blur', 'focus']);

const showValidationMessage = computed(
    () => props.touched && props.validationMessage
);

function handleChange(e) {
    emit('change', e);
}

function handleBlur(e) {
    emit('blur', e);
}

function handleFocus(e) {
    emit('focus', e);
}
</script>
