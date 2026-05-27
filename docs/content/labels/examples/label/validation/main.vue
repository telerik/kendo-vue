<template>
  <FormElement style="max-width: 400px">
    <FieldWrapper>
      <KLabel class="k-form-label" :editor-id="editorId" :editor-valid="false">
        First name:&nbsp;
      </KLabel>
      <div class="k-form-field-wrap">
        <KInput
          :style="{ width: '230px' }"
          :id="editorId"
          :valid="isValid"
          @change="onChange"
        />
        <Error v-if="!showValidationMessage">
          {{ validationMessage }}
        </Error>
      </div>
    </FieldWrapper>
  </FormElement>
</template>

<script setup>
import { ref, computed } from "vue";
import { FormElement, FieldWrapper } from "@progress/kendo-vue-form";
import { Label as KLabel, Error } from "@progress/kendo-vue-labels";
import { Input as KInput } from "@progress/kendo-vue-inputs";

const editorId = "firstName";
const value = ref(undefined);
const isValid = ref(!!value.value);
const validationMessage = "This field is required.";

const showValidationMessage = computed(() => isValid.value);

function onChange(e) {
    isValid.value = e.value.length > 0;
    value.value = e.value;
}
</script>

