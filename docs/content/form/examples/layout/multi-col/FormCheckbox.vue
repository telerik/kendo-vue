<template>
  <FieldWrapper :col-span="colSpan">
    <div class="k-form-field-wrap">
      <Checkbox
        :label="label"
        :valid="valid"
        :id="id"
        :value="value"
        @change="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <Error v-if="showValidationMessage">{{ validationMessage }}</Error>
    </div>
  </FieldWrapper>
</template>

<script setup>
import { computed } from 'vue';
import { FieldWrapper } from '@progress/kendo-vue-form';
import { Error } from '@progress/kendo-vue-labels';
import { Checkbox } from '@progress/kendo-vue-inputs';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  touched: Boolean,
  label: String,
  validationMessage: String,
  hint: String,
  id: String,
  valid: Boolean,
  disabled: Boolean,
  optional: Boolean,
  colSpan: [Number, Array],
  value: { type: [Boolean, String], default: false }
});

const emit = defineEmits(['change', 'blur', 'focus']);

const showValidationMessage = computed(() => props.touched && props.validationMessage);

function handleChange(e) { emit('change', e); }
function handleBlur(e) { emit('blur', e); }
function handleFocus(e) { emit('focus', e); }
</script>
