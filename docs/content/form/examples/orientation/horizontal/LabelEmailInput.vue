<template>
  <FieldWrapper>
    <Label :editor-id="id" :editor-valid="valid">
      {{ label }}
    </Label>
    <div class="k-form-field-wrap">
      <KInput
        :valid="valid"
        type="email"
        :id="id"
        :value="value"
        @input="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <Hint v-if="!showValidationMessage">Enter your personal email address.</Hint>
      <Error v-if="showValidationMessage">{{ validationMessage }}</Error>
    </div>
  </FieldWrapper>
</template>

<script setup>
import { computed } from 'vue';
import { FieldWrapper } from '@progress/kendo-vue-form';
import { Error, Hint, Label } from '@progress/kendo-vue-labels';
import { Input as KInput } from '@progress/kendo-vue-inputs';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  visited: Boolean,
  label: String,
  validationMessage: String,
  id: String,
  valid: Boolean,
  value: { type: String, default: '' }
});

const emit = defineEmits(['change', 'blur', 'focus']);

const showValidationMessage = computed(() => props.visited && props.validationMessage);

function handleChange(e) { emit('change', e); }
function handleBlur(e) { emit('blur', e); }
function handleFocus(e) { emit('focus', e); }
</script>
