<template>
  <FieldWrapper>
    <FloatingLabel
      :editor-id="id"
      :editor-valid="valid"
      :editor-value="value"
      :label="label"
      :optional="optional"
    >
      <div class="k-form-field-wrap">
        <NumericTextBox
          :style="{ width: '230px' }"
          :valid="valid"
          :value="value"
          :id="id"
          :min="0"
          :format="format"
          @change="handleChange"
          @blur="handleBlur"
          @focus="handleFocus"
        />
        <Error v-if="showValidationMessage">
          {{ validationMessage }}
        </Error>
        <Hint v-else>{{ hint }}</Hint>
      </div>
    </FloatingLabel>
  </FieldWrapper>
</template>

<script setup>
import { computed } from 'vue';
import { FieldWrapper } from '@progress/kendo-vue-form';
import { Error, Hint, FloatingLabel } from '@progress/kendo-vue-labels';
import { NumericTextBox } from '@progress/kendo-vue-inputs';

defineOptions({ inheritAttrs: false });

const props = defineProps({
    optional: Boolean,
    touched: Boolean,
    label: String,
    format: String,
    validationMessage: String,
    hint: String,
    id: String,
    valid: Boolean,
    value: {
        type: Number,
        default: null,
    },
});

const emit = defineEmits(['change', 'blur', 'focus']);

const showValidationMessage = computed(() => props.touched && props.validationMessage);

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

