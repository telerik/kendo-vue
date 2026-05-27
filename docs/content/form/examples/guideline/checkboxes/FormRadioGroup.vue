<template>
  <FieldWrapper>
    <Label
      :class="'k-form-label'"
      :id="labelId"
      :editor-id="id"
      :editor-valid="valid"
      :editor-disabled="disabled"
    >
      {{ label }}
    </Label>
    <div class="k-form-field-wrap">
      <RadioGroup
        :name="name"
        :aria-describedby="describedBy"
        :label="label"
        :valid="valid"
        :value="value"
        :layout="layout"
        :data-items="dataItems"
        :id="id"
        :checked="value"
        @change="handleChange"
      />
      <Error v-if="showValidationMessage">
        {{ validationMessage }}
      </Error>
      <Hint v-else>{{ hint }}</Hint>
    </div>
  </FieldWrapper>
</template>

<script setup>
import { computed } from "vue";
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label } from "@progress/kendo-vue-labels";
import { RadioGroup } from "@progress/kendo-vue-inputs";

const props = defineProps({
    name: String,
    touched: Boolean,
    label: String,
    validationMessage: String,
    hint: String,
    id: String,
    valid: {
        type: Boolean,
        default: true,
    },
    disabled: Boolean,
    layout: String,
    dataItems: Array,
    value: {
        type: String,
        default: null,
    },
});

const emit = defineEmits(["change", "blur", "focus"]);

const showValidationMessage = computed(
    () => props.touched && props.validationMessage
);

const labelId = computed(() => (props.label ? `${props.id}_label` : ""));
const describedBy = computed(() => `${hintId.value} ${errorId.value}`);
const hintId = computed(() => (showHint.value ? `${props.id}_hint` : ""));
const errorId = computed(() => (showValidationMessage.value ? `${props.id}_error` : ""));
const showHint = computed(() => !showValidationMessage.value && props.hint);

function handleChange(e) {
    emit("change", e);
}
</script>

