<template>
  <FormElement :style="{ width: '400px' }">
    <fieldset class="k-form-fieldset">
      <Field
        id="street"
        name="street"
        label="Street Number"
        hint="Hint: Enter your street number."
        format="n2"
        :component="'myTemplate'"
        :optional="true"
        :validator="requiredValidator"
      >
        <template #myTemplate="{ props }">
          <FormFloatingNumericTextBox
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <Field
        id="phoneNumber"
        name="phoneNumber"
        label="Phone Number"
        mask="(999) 000-00-00-00"
        hint="Hint: Your active phone number."
        :optional="true"
        :component="'myTemplate'"
        :validator="phoneValidator"
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
import FormMaskedTextBox from "./FormMaskedTextBox.vue";
import FormFloatingNumericTextBox from "./FormFloatingNumericTextBox.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { phoneValidator, requiredValidator } from "./validators";

const kendoForm = inject("kendoForm", {});

function clear() {
    kendoForm.onFormReset();
}
</script>
