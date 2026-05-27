<template>
  <FormElement :style="{ width: '400px' }" :horizontal="true">
    <fieldset class="k-form-fieldset">
      <legend class="k-form-legend">Horizontal Form</legend>
      <Field
        :id="'fullName'"
        :name="'fullName'"
        :label="'Full Name'"
        :component="'myTemplate'"
        :validator="requiredValidator"
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
      <Field
        :id="'cardNumber'"
        :name="'cardNumber'"
        :label="'Card Number'"
        :mask="'0000-0000-0000-0000'"
        :hint="'Hint: Your Credit Card Number'"
        :component="'myTemplate'"
        :validator="cardValidator"
      >
        <template #myTemplate="{ props }">
          <FormMaskedTextBox
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <Field
        :id="'cvc'"
        :name="'cvc'"
        :label="'CVC Number'"
        :mask="'000'"
        :hint="'Hint: The last 3 digits on the back of the Card'"
        :component="'myTemplate'"
        :validator="cvcValidator"
      >
        <template #myTemplate="{ props }">
          <FormMaskedTextBox
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
import FormInput from "./FormInput.vue";
import FormMaskedTextBox from "./FormMaskedTextBox.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import {
    requiredValidator,
    cardValidator,
    cvcValidator,
} from "./validators";

const kendoForm = inject("kendoForm", {});

function clear() {
    kendoForm.onFormReset();
}
</script>
