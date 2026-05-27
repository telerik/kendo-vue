<template>
  <FieldWrapper :col-span="colSpan">
    <Label class="k-form-label" :editor-id="id" :editor-valid="valid">
      {{ label }}
    </Label>
    <div class="k-form-field-wrap">
      <DropDownList
        :valid="valid"
        :id="id"
        :value="value"
        :data-items="data"
        :default-value="defaultValue"
        @change="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <Error v-if="showError">{{ validationMessage }}</Error>
    </div>
  </FieldWrapper>
</template>

<script setup>
import { computed } from 'vue';
import { FieldWrapper } from '@progress/kendo-vue-form';
import { Error, Label } from '@progress/kendo-vue-labels';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  touched: Boolean,
  label: String,
  validationMessage: String,
  id: String,
  valid: Boolean,
  data: Array,
  defaultValue: [String, Object],
  value: { default: null },
  colSpan: { type: [Number, Array], default: undefined }
});

const emit = defineEmits(['change', 'blur', 'focus']);

const showError = computed(() => props.touched && props.validationMessage);

function handleChange(e) { emit('change', e); }
function handleBlur(e) { emit('blur', e); }
function handleFocus(e) { emit('focus', e); }
</script>
