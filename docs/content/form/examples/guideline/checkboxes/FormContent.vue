<template>
  <FormElement :style="{ maxWidth: '650px' }">
    <fieldset class="k-form-fieldset">
      <Field
        :id="'confirmationType'"
        :name="'confirmationType'"
        :label="'Type of Confirmation'"
        :hint="'Hint: Choose a way to receive a confirmation'"
        :component="'myTemplate'"
        :data-items="confirmationData"
      >
        <template #myTemplate="{ props }">
          <FormRadioGroup
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <Field
        :id="'gender'"
        :name="'gender'"
        :label="'Gender'"
        :layout="'horizontal'"
        :component="'myTemplate'"
        :data-items="genders"
      >
        <template #myTemplate="{ props }">
          <FormRadioGroup
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <Field
        :id="'terms'"
        :name="'terms'"
        :label="'I agree with terms and conditions'"
        :hint="'Hint: By checking this, you agree to our Terms&Conditions'"
        :component="'myTemplate'"
        :validator="termsValidator"
      >
        <template #myTemplate="{ props }">
          <FormCheckbox
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <div class="k-form-buttons">
        <KButton
          :theme-color="'primary'"
          :type="'submit'"
          :disabled="!kendoForm.allowSubmit"
        >
          Submit
        </KButton>
        <KButton @click="clear">Clear</KButton>
      </div>
    </fieldset>
  </FormElement>
</template>

<script setup>
import { inject } from "vue";
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormCheckbox from "./FormCheckbox.vue";
import FormRadioGroup from "./FormRadioGroup.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { termsValidator } from "./validators";
import { genders } from "./data";

const kendoForm = inject("kendoForm", {});

const confirmationData = [
    { label: "Phone Call", value: "phone" },
    { label: "Via Email", value: "email" },
];

function clear() {
    kendoForm.onFormReset();
}
</script>
