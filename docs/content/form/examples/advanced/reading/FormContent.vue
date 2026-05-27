<template>
  <FormElement :style="{ maxWidth: '650px' }">
    <fieldset class="k-form-fieldset">
      <Field name="userCount" label="Users Count" :component="'myTemplate'">
        <template #myTemplate="{ props }">
          <FormNumericTextBox
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <Field name="ticketCount" label="Tickets Count" :component="'myTemplate'">
        <template #myTemplate="{ props }">
          <FormNumericTextBox
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <br />
      Total ticket price:
      <strong>
        {{ kendoForm.valueGetter("userCount") *
          kendoForm.valueGetter("ticketCount") }}
      </strong>
      <div class="k-form-buttons">
        <KButton
          theme-color="primary"
          type="submit"
          :disabled="!kendoForm.allowSubmit"
        >
          Submit
        </KButton>
      </div>
    </fieldset>
  </FormElement>
</template>

<script setup>
import { inject } from "vue";
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormNumericTextBox from "./FormNumericTextBox.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const kendoForm = inject("kendoForm", {});
</script>
