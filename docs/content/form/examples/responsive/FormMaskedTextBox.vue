<template>
  <FieldWrapper :col-span="colSpan">
    <Label class="k-form-label" :editor-id="id" :editor-valid="valid">
      {{ label }}
    </Label>
    <div class="k-form-field-wrap">
      <MaskedTextBox
        :valid="valid"
        :id="id"
        :value="value"
        :mask="mask"
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
import { MaskedTextBox } from '@progress/kendo-vue-inputs';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  touched: Boolean,
  label: String,
  validationMessage: String,
  hint: String,
  id: String,
  valid: Boolean,
  mask: String,
  placeholder: String,
  value: { type: String, default: '' },
  colSpan: { type: [Number, Array], default: undefined }
});

const emit = defineEmits(['change', 'blur', 'focus']);

const showError = computed(() => props.touched && props.validationMessage);
const showHint = computed(() => !showError.value && props.hint);

function handleChange(e) { emit('change', e); }
function handleBlur(e) { emit('blur', e); }
function handleFocus(e) { emit('focus', e); }
</script>
