<template>
  <FormElement :style="{ maxWidth: '650px' }">
    <fieldset class="k-form-fieldset">
      <Field
        id="fullName"
        name="fullName"
        label="Full Name"
        component="myTemplate"
        :validator="nameValidator"
        hint="Hint: Write Your Name"
      >
        <template #myTemplate="{ props }">
          <FormTextBox
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>

      <div class="k-form-buttons">
        <KButton
          theme-color="primary"
          type="submit"
          :disabled="!kendoForm.allowSubmit"
        >
          Submit
        </KButton>
        <KButton @click="clear"> Clear </KButton>
      </div>
    </fieldset>
  </FormElement>
</template>

<script setup>
import { inject } from "vue";
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormTextBox from "./FormTextBox.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { nameValidator } from "./validators";

const kendoForm = inject("kendoForm", {});

function clear() {
    kendoForm.onFormReset();
}
</script>
