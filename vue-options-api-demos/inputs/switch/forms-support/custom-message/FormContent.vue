<template>
  <form-element :style="{ maxWidth: '650px' }">
    <fieldset>
      <legend>Create new account:</legend>
      <div class="mb-3">
        <field
          :id="'username'"
          :name="'username'"
          :component="'myTemplate'"
          :style="{
            width: '100%',
          }"
          :label="'First Name'"
          :pattern="'[A-Za-z]+'"
          :min-length="2"
          :validator="requiredValidator"
        >
          <template v-slot:myTemplate="{ props }">
            <forminput
              v-bind="props"
              :validation-message="usernameValidationMessage"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </field>
      </div>
      <div class="mb-3">
        <field
          :name="'password'"
          :type="'password'"
          :component="'myTemplate'"
          :style="{
            width: '100%',
          }"
          :label="'Password'"
          :min-length="6"
          :max-length="16"
          :validator="passwordValidator"
        >
          <template v-slot:myTemplate="{ props }">
            <forminput
              v-bind="props"
              :validation-message="passwordValidationMessage"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </field>
      </div>
      <div class="mb-3">
        <field
          :name="'confirmPassword'"
          :type="'password'"
          :component="'myTemplate'"
          :style="{
            width: '100%',
          }"
          :label="'Confirm Password'"
          :min-length="2"
          :max-length="18"
          :validator="passwordValidator"
        >
          <template v-slot:myTemplate="{ props }">
            <forminput
              v-bind="props"
              :validation-message="passwordValidationMessage"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </field>
      </div>
      <div class="mb-3">
        <field
          :name="'email'"
          :type="'email'"
          :component="'myTemplate'"
          :style="{
            width: '100%',
          }"
          :label="'Email address'"
          :validator="emailValidator"
        >
          <template v-slot:myTemplate="{ props }">
            <forminput
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </field>
      </div>
      <div class="mb-3">
        <field
          :id="'keepSigned'"
          :name="'keepSigned'"
          :component="'myTemplate'"
          :validator="requiredValidator"
        >
          <template v-slot:myTemplate="{ props }">
            <formswitch
              v-bind="props"
              :validation-message="switchCustomMessage"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </field>
        <span
          :style="{
            'margin-left': 10,
            'font-size': 12,
          }"
        >
          Keep me signed in
        </span>
      </div>
    </fieldset>
    <div class="k-form-buttons">
      <k-button :disabled="!kendoForm.allowSubmit"> Submit </k-button>
    </div>
  </form-element>
</template>
<script>
import { Field, FormElement } from "@progress/kendo-vue-form";
import { Button } from "@progress/kendo-vue-buttons";
import FormInput from "./FormInput.vue";
import FormSwitch from "./FormSwitch.vue";

const requiredValidator = (value) => {
  return value ? "" : "Error: This field is required.";
};

const passwordValidator = (value) => {
  return !value || value.length < 6 || value.length > 16;
};

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) =>
  emailRegex.test(value) ? "" : "Please enter a valid email.";

export default {
  components: {
    field: Field,
    "form-element": FormElement,
    forminput: FormInput,
    formswitch: FormSwitch,
    "k-button": Button,
  },
  inject: {
    kendoForm: { default: {} },
  },
  data: function () {
    return {
      requiredValidator: requiredValidator,
      passwordValidator: passwordValidator,
      emailValidator: emailValidator,
      usernameValidationMessage: "Your username should contain only letters",
      passwordValidationMessage:
        "Please enter password between 6 and 16 characters",
      switchCustomMessage: "Please turn the automatic sign in",
    };
  },
  methods: {
    handleSubmit(dataItem) {
      console.log("dataItem=", dataItem);
    },
  },
};
</script>
