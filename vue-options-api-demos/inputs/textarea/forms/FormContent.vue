<template>
  <form-element
    :style="{
      width: '290px',
      margin: '0px auto',
    }"
  >
    <legend class="k-form-legend">USER DETAILS</legend>
    <fieldset class="k-form-fieldset">
      <field
        :id="'firstName'"
        :name="'firstName'"
        :label="'First Name:'"
        :component="'myTemplate'"
        :validator="firstNameValidator"
      >
        <template v-slot:myTemplate="{ props }">
          <forminput
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          ></forminput>
        </template>
      </field>
      <field
        :id="'lastName'"
        :name="'lastName'"
        :label="'Last Name:'"
        :validator="lastNameValidator"
        :component="'myTemplate'"
      >
        <template v-slot:myTemplate="{ props }">
          <forminput
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          ></forminput>
        </template>
      </field>
      <field
        :id="'address'"
        :name="'address'"
        :label="'Address:'"
        :component="'myTemplate'"
        :validator="textAreaValidator"
        :hint="'Hint: Enter your personal address'"
      >
        <template v-slot:myTemplate="{ props }">
          <formtextarea
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          ></formtextarea>
        </template>
      </field>
      <div class="k-form-buttons">
        <kbutton
          :theme-color="'primary'"
          :type="'submit'"
          :disabled="!kendoForm.allowSubmit"
        >
          Submit
        </kbutton>
        <kbutton @click="clear"> Clear </kbutton>
      </div>
    </fieldset>
  </form-element>
</template>
<script>
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormTextArea from "./FormTextArea.vue";
import FormInput from "./FormInput.vue";
import { Button } from "@progress/kendo-vue-buttons";

const firstNameValidator = (value) =>
  !value
    ? "First Name is required"
    : value.length < 7
    ? "First Name should be at least 7 characters long."
    : "";

const lastNameValidator = (value) =>
  !value
    ? "Last Name is required"
    : value.length < 7
    ? "Last Name should be at least 7 characters long."
    : "";
const textAreaValidator = (value) => (!value ? "Address is required" : "");

export default {
  components: {
    field: Field,
    "form-element": FormElement,
    formtextarea: FormTextArea,
    forminput: FormInput,
    kbutton: Button,
  },
  inject: {
    kendoForm: { default: {} },
  },
  data() {
    return {
      firstNameValidator: firstNameValidator,
      lastNameValidator: lastNameValidator,
      textAreaValidator: textAreaValidator,
    };
  },
  methods: {
    clear() {
      this.kendoForm.onFormReset();
    },
  },
};
</script>
