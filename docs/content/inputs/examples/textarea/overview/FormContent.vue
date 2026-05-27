<template>
  <FormElement :style="{ maxWidth: '650px' }">
    <fieldset class="k-form-fieldset">
      <div class="col-xs-12 col-md-6 example-col">
        <Field
          id="sendInvitation"
          name="sendInvitation"
          label="Send Invitation:"
          component="myTemplate"
          :max="200"
          :validator="addressValidator"
          :icon-name="gearIcon"
          hint="Hint: Enter your text here"
        >
          <template #myTemplate="{ props }">
            <FormTextArea
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
      </div>
      <div class="col-xs-12 col-md-6 example-col">
        <Field
          id="invitationDetails"
          name="invitationDetails"
          label="Details:"
          component="myTemplate"
          :max="200"
          hint="Hint: Enter Invitation details here"
          :icon-name="gearIcon"
        >
          <template #myTemplate="{ props }">
            <FormTextArea
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
      </div>
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
import { gearIcon } from "@progress/kendo-svg-icons";
import FormTextArea from "./FormTextArea.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const kendoForm = inject("kendoForm", {});

function clear() {
    kendoForm.onFormReset();
}

const addressValidator = (value) =>
    value ? "" : "Address is required";
</script>
