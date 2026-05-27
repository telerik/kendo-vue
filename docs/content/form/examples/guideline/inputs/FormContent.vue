<template>
  <FormElement :style="{ maxWidth: '650px' }">
    <fieldset class="k-form-fieldset">
      <Field
        :id="'fullName'"
        :name="'fullName'"
        :label="'Full Name'"
        :component="'myTemplate'"
        :validator="nameValidator"
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
        :id="'phoneNumber'"
        :name="'phoneNumber'"
        :label="'Phone Number'"
        :mask="'(999) 000-00-00-00'"
        :hint="'Hint: Your active phone number.'"
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
      <Field
        :id="'amount'"
        :name="'amount'"
        :label="'Amount'"
        :hint="'Hint: Amount of money.'"
        :format="'n2'"
        :component="'myTemplate'"
        :validator="guestsValidator"
      >
        <template #myTemplate="{ props }">
          <FormNumericTextBox
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <Field
        :id="'address'"
        :name="'address'"
        :label="'Address'"
        :component="'myTemplate'"
        :validator="addressValidator"
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
      <Field
        :id="'size'"
        :name="'size'"
        :label="'Size'"
        :component="'myTemplate'"
        :min="min"
        :max="max"
        :data="sliderData"
      >
        <template #myTemplate="{ props }">
          <FormSlider
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
import { inject, ref } from "vue";
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormInput from "./FormInput.vue";
import FormMaskedTextBox from "./FormMaskedTextBox.vue";
import FormNumericTextBox from "./FormNumericTextBox.vue";
import FormTextArea from "./FormTextArea.vue";
import FormSlider from "./FormSlider.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import {
    nameValidator,
    phoneValidator,
    addressValidator,
    guestsValidator,
} from "./validators";

const kendoForm = inject("kendoForm", {});
const min = ref(1);
const max = ref(10);
const sliderData = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function clear() {
    kendoForm.onFormReset();
}
</script>
