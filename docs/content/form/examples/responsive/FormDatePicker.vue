<template>
  <FieldWrapper :style="wrapperStyle">
    <Label class="k-form-label" :editor-id="id" :editor-valid="valid">
      {{ label }}
    </Label>
    <div class="k-form-field-wrap">
      <DatePicker
        :valid="valid"
        :id="id"
        :value="value"
        :format="format"
        :placeholder="placeholder"
        @change="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <Hint v-if="showHint">{{ hint }}</Hint>
      <Error v-if="showError">{{ validationMessage }}</Error>
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
  format: String,
  placeholder: String,
  value: { type: Date, default: null },
  wrapperStyle: { type: Object, default: null },
  colSpan: [Number, Array]
});

const emit = defineEmits(['change', 'blur', 'focus']);

const showError = computed(() => props.touched && props.validationMessage);
const showHint = computed(() => !showError.value && props.hint);

function handleChange(e) { emit('change', e); }
function handleBlur(e) { emit('blur', e); }
function handleFocus(e) { emit('focus', e); }
</script>
