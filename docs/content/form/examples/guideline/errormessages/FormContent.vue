<template>
  <FormElement :style="{ width: '400px' }">
    <fieldset class="k-form-fieldset">
      <Field
        id="username"
        name="username"
        label="User Name"
        :validator="userNameValidator"
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
      <Field
        id="email"
        name="email"
        label="Email"
        :validator="emailValidator"
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
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { emailValidator, userNameValidator } from "./validators";

const kendoForm = inject("kendoForm", {});

function clear() {
    kendoForm.onFormReset();
}
</script>
