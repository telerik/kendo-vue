<template>
  <FieldWrapper>
    <Label
      class="k-form-label"
      :editor-id="id"
      :editor-valid="valid"
      :editor-disabled="disabled"
      :optional="optional"
    >
      {{ label }}
    </Label>
    <div class="k-form-field-wrap">
      <TextBox
        :valid="valid"
        :type="type || 'text'"
        :id="id"
        :disabled="disabled"
        :auto-complete="autoComplete"
        :placeholder="placeholder"
        :value="value"
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
import { TextBox } from '@progress/kendo-vue-inputs';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  touched: Boolean,
  label: String,
  validationMessage: String,
  hint: String,
  id: String,
  valid: Boolean,
  disabled: Boolean,
  optional: [Boolean, String],
  type: String,
  autoComplete: String,
  placeholder: String,
  value: { type: String, default: '' }
});

const emit = defineEmits(['change', 'blur', 'focus']);

const showError = computed(() => props.touched && props.validationMessage);
const showHint = computed(() => !showError.value && props.hint);

function handleChange(e) { emit('change', e); }
function handleBlur(e) { emit('blur', e); }
function handleFocus(e) { emit('focus', e); }
</script>
