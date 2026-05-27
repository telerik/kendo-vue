<template>
  <FormElement :style="{ width: '400px' }" :horizontal="true">
    <fieldset class="k-form-fieldset">
      <Field
        id="fullName"
        name="fullName"
        label="Full Name"
        :component="'myTemplate'"
        placeholder="e.g.: Clevey Thursfield"
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
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { requiredValidator } from "./validators";

const kendoForm = inject("kendoForm", {});

function clear() {
    kendoForm.onFormReset();
}
</script>
