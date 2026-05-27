<template>
  <FieldWrapper>
    <Label :class="'k-form-label'" :editor-id="id" :editor-valid="valid">
      {{ label }}
    </Label>
    <div class="k-form-field-wrap">
      <KInput
        :value="value"
        :id="id"
        :valid="valid"
        :type="type || 'text'"
        :disabled="disabled"
        :placeholder="placeholder"
        @input="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <Error v-if="visited && validationMessage">{{ validationMessage }}</Error>
    </div>
  </FieldWrapper>
</template>

<script setup>
import { FieldWrapper } from '@progress/kendo-vue-form';
import { Input as KInput } from '@progress/kendo-vue-inputs';
import { Error, Label } from '@progress/kendo-vue-labels';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  validationMessage: String,
  visited: Boolean,
  touched: Boolean,
  valid: Boolean,
  value: { default: '' },
  id: String,
  type: String,
  disabled: Boolean,
  label: String,
  placeholder: String,
});

const emit = defineEmits(['change', 'blur', 'focus']);

function handleChange(e) { emit('change', e); }
function handleBlur(e) { emit('blur', e); }
function handleFocus(e) { emit('focus', e); }
</script>
