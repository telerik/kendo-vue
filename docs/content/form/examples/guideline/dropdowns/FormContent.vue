<template>
  <FormElement :style="{ width: '400px' }">
    <fieldset class="k-form-fieldset">
      <Field
        id="countryselected"
        name="countryselected"
        label="Country"
        hint="Hint: Only Eroupean countries"
        :component="'myTemplate'"
        :data="countries"
        :validator="requiredValidator"
      >
        <template #myTemplate="{ props }">
          <FormAutoComplete
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          ></FormAutoComplete>
        </template>
      </Field>
      <Field
        id="genderselected"
        name="genderselected"
        label="Gender"
        :component="'myTemplate'"
        :data="genders"
        :text-field="'label'"
        :validator="requiredValidator"
      >
        <template #myTemplate="{ props }">
          <FormComboBox
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <Field
        id="dropdownlist"
        name="dropdownlist"
        label="T-Shirt Size"
        :component="'myTemplate'"
        :data="sizes"
        :validator="requiredValidator"
      >
        <template #myTemplate="{ props }">
          <FormDropDownList
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <Field
        id="multiselect"
        name="multiselect"
        label="Sports"
        :component="'myTemplate'"
        :data="sports"
        :validator="requiredValidator"
      >
        <template #myTemplate="{ props }">
          <FormMultiSelect
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
import FormAutoComplete from "./FormAutoComplete.vue";
import FormComboBox from "./FormComboBox.vue";
import FormDropDownList from "./FormDropDownList.vue";
import FormMultiSelect from "./FormMultiSelect.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { countries, genders, sizes, sports } from "./data";
import { requiredValidator } from "./validators";

const kendoForm = inject("kendoForm", {});

function clear() {
    kendoForm.onFormReset();
}
</script>
