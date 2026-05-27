<template>
  <FieldWrapper>
    <Label class="k-form-label" :editor-id="id" :editor-valid="valid">
      {{ label }} {{ value }}
    </Label>
    <div class="k-form-field-wrap">
      <DropDownList
        :style="{ width: '230px' }"
        :data-items="data"
        :valid="valid"
        :value="value"
        :id="id"
        @change="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
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
import { DropDownList } from "@progress/kendo-vue-dropdowns";

const props = defineProps({
    textField: String,
    data: Object,
    touched: Boolean,
    label: String,
    validationMessage: String,
    hint: String,
    id: String,
    valid: Boolean,
    value: {
        type: String,
        default: "",
    },
});

const emit = defineEmits(["change", "blur", "focus"]);

const showValidationMessage = computed(
    () => props.touched && props.validationMessage
);

const handleChange = (e) => {
    emit("change", e);
};

const handleBlur = (e) => {
    emit("blur", e);
};

const handleFocus = (e) => {
    emit("focus", e);
};
</script>
