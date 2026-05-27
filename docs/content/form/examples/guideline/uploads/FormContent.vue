<template>
  <FormElement :style="{ width: '400px' }">
    <fieldset class="k-form-fieldset">
      <Field
        id="avatar"
        name="avatar"
        label="Avatar"
        hint="Hint: Upload your avatar picture"
        :component="'myTemplate'"
      >
        <template #myTemplate="{ props }">
          <FormUpload
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <Field
        id="photos"
        name="photos"
        label="Upload Photos"
        hint="Hint: Select your additional photos"
        :component="'myTemplate'"
      >
        <template #myTemplate="{ props }">
          <FormUpload
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
import FormUpload from "./FormUpload.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const kendoForm = inject("kendoForm", {});

function clear() {
    kendoForm.onFormReset();
}
</script>
