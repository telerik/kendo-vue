<template>
  <FieldWrapper>
    <Label :class="'k-form-label'" :editor-id="id" :editor-valid="valid">
      {{ label }}
    </Label>
    <div class="k-form-field-wrap">
      <span>
        <Upload
          :valid="valid"
          :value="value"
          :id="id"
          :auto-upload="false"
          :multiple="false"
          :show-action-buttons="false"
          :files="value"
          @blur="handleBlur"
          @focus="handleFocus"
          @add="onAddHandler"
          @remove="onRemoveHandler"
        />
      </span>
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
import { Upload } from "@progress/kendo-vue-upload";


const props = defineProps({
    touched: Boolean,
    optional: Boolean,
    label: String,
    validationMessage: String,
    hint: String,
    id: String,
    valid: Boolean,
    value: Array || String,
});

const emit = defineEmits(["change", "blur", "focus"]);

const showValidationMessage = computed(
    () => props.touched && props.validationMessage
);

function handleBlur(e) {
    emit("blur", e);
}

function handleFocus(e) {
    emit("focus", e);
}

function onAddHandler(e) {
    emit("change", { value: e.newState });
}

function onRemoveHandler(e) {
    emit("change", { value: e.newState });
}
</script>

