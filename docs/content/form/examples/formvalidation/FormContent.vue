<template>
  <FormElement :style="{ maxWidth: '650px' }">
    <fieldset class="k-form-fieldset">
      <legend class="k-form-legend">Please fill in the fields:</legend>
      <div
        v-if="
          kendoForm.visited &&
          kendoForm.errors &&
          kendoForm.errors.VALIDATION_SUMMARY
        "
        class="k-messagebox k-messagebox-error"
      >
        {{ kendoForm.errors.VALIDATION_SUMMARY }}
      </div>
      <div class="mb-3">
        <Field
          :id="'user.firstName'"
          :name="'user.firstName'"
          :label="'First Name'"
          :component="'myTemplate'"
        >
          <template #myTemplate="{ props }">
            <FormInput
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
      </div>
      <div class="mb-3">
        <Field
          :id="'user.lastName'"
          :name="'user.lastName'"
          :label="'Last Name'"
          :component="'myTemplate'"
        >
          <template #myTemplate="{ props }">
            <FormInput
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
      </div>
    </fieldset>
    <div class="k-form-buttons">
      <KButton type="submit" :disabled="!kendoForm.allowSubmit">
        Submit
      </KButton>
      <KButton type="button" @click="clear">Clear</KButton>
    </div>
  </FormElement>
</template>

<script setup>
import { inject } from "vue";
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormInput from "./FormInput.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const kendoForm = inject("kendoForm", {});

function clear() {
    kendoForm.onFormReset();
}
</script>
