<template>
  <FieldWrapper>
    <Label
      :class="'k-form-label'"
      :editor-id="id"
      :editor-valid="valid"
      :disabled="disabled"
      :optional="optional"
    >
      {{ label }}
    </Label>
    <div class="k-form-field-wrap">
      <Switch
        :valid="valid"
        :id="id"
        :checked="value"
        :disabled="disabled"
        :required="required"
        :placeholder="placeholder"
        :on-label="'Yes'"
        :off-label="'No'"
        @change="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <span v-if="showValidationMessage && showHint">
        <Error>
          {{ validationMessage }}
        </Error>
        <Hint>{{ hint }}</Hint>
      </span>
      <Error v-else-if="showValidationMessage">
        {{ validationMessage }}
      </Error>
      <Hint v-else-if="showHint">{{ hint }}</Hint>
    </div>
  </FieldWrapper>
</template>

<script setup>
import { FieldWrapper } from '@progress/kendo-vue-form';
import { Error, Hint, Label } from '@progress/kendo-vue-labels';
import { Switch } from '@progress/kendo-vue-inputs';
import { computed } from 'vue';

const props = defineProps({
    optional: Boolean,
    disabled: Boolean,
    placeholder: String,
    touched: Boolean,
    label: String,
    validationMessage: String,
    hint: String,
    id: String,
    valid: Boolean,
    value: {
        type: Boolean,
        default: false,
    },
    required: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['change', 'blur', 'focus']);

const showValidationMessage = computed(() => props.touched && props.validationMessage);
const showHint = computed(() => props.hint);

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
