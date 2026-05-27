<template>
  <FormElement :style="{ width: '400px' }">
    <fieldset class="k-form-fieldset">
      <Field
        id="bdate"
        name="bdate"
        label="Birth Date"
        :component="'myTemplate'"
        :validator="requiredValidator"
        hint="Hint: Hint message aligned end"
        hintDirection="end"
      >
        <template #myTemplate="{ props }">
          <FormDateInput
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <Field
        id="username"
        name="username"
        label="User Name"
        :component="'myTemplate'"
        hint="Hint: Hint message aligned start"
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
      <div class="k-form-buttons">
        <KButton theme-color="primary" type="submit" :disabled="!kendoForm.allowSubmit">
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
import FormDateInput from "./FormDatePicker.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { requiredValidator } from "./validators";

const kendoForm = inject("kendoForm", {});
const clear = () => {
    kendoForm.onFormReset();
};
</script>
