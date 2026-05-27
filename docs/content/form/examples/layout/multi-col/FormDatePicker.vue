<template>
  <FieldWrapper :col-span="colSpan">
    <Label
      class="k-form-label"
      :editor-id="id"
      :editor-valid="valid"
    >
      {{ label }}
    </Label>
    <div class="k-form-field-wrap">
      <DatePicker
        :valid="valid"
        :id="id"
        :value="value"
        @change="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <Error v-if="showValidationMessage">{{ validationMessage }}</Error>
      <Hint v-if="!showValidationMessage && hint">{{ hint }}</Hint>
    </div>
  </FieldWrapper>
</template>

<script setup>
import { computed } from 'vue';
import { FieldWrapper } from '@progress/kendo-vue-form';
import { Error, Hint, Label } from '@progress/kendo-vue-labels';
import { DatePicker } from '@progress/kendo-vue-dateinputs';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  touched: Boolean,
  label: String,
  validationMessage: String,
  hint: String,
  id: String,
  valid: Boolean,
  colSpan: [Number, Array],
  value: { type: Date, default: null }
});

const emit = defineEmits(['change', 'blur', 'focus']);

const showValidationMessage = computed(() => props.touched && props.validationMessage);

function handleChange(e) { emit('change', e); }
function handleBlur(e) { emit('blur', e); }
function handleFocus(e) { emit('focus', e); }
</script>
