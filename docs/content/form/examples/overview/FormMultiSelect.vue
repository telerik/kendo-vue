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
      <MultiSelect
        :valid="valid"
        :id="id"
        :disabled="disabled"
        :data-items="data"
        :default-value="defaultValue"
        :text-field="textField"
        :data-item-key="dataItemKey"
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
import { MultiSelect } from '@progress/kendo-vue-dropdowns';

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
  data: Array,
  defaultValue: Array,
  textField: String,
  dataItemKey: String,
  value: { default: null }
});

const emit = defineEmits(['change', 'blur', 'focus']);

const showError = computed(() => props.touched && props.validationMessage);
const showHint = computed(() => !showError.value && props.hint);

function handleChange(e) { emit('change', e); }
function handleBlur(e) { emit('blur', e); }
function handleFocus(e) { emit('focus', e); }
</script>
