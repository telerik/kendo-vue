<template>
  <FormElement :style="{ width: '400px' }">
    <fieldset class="k-form-fieldset">
      <Field
        id="ownerName"
        name="ownerName"
        label="Owner Name"
        hint="Hint: Disabled field"
        :disabled="true"
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
        id="phoneNumber"
        name="phoneNumber"
        label="Phone Number"
        mask="(999) 000-00-00-00"
        hint="Hint: Readonly field"
        :readonly="true"
        :component="'myTemplate'"
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
import FormMaskedTextBox from "./FormMaskedTextBox.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const kendoForm = inject("kendoForm", {});

function clear() {
    kendoForm.onFormReset();
}
</script>
