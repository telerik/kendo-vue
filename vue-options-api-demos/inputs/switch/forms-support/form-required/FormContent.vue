<template>
  <form-element :style="{ maxWidth: '650px' }">
    <fieldset class="k-form-fieldset">
      <legend>Create new account:</legend>
      <div class="mb-3">
        <field
          :name="'firstName'"
          :component="'myTemplate'"
          :label="'First Name:'"
          :required="true"
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
          :name="'password'"
          :type="'password'"
          :component="'myTemplate'"
          :label="'Password'"
          :required="true"
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
          :hint="'Keep me signed in'"
          :required="true"
        >
          <template v-slot:myTemplate="{ props }">
            <formswitch
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </field>
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
      emailValidator: emailValidator,
    };
  },
  methods: {
    handleSubmit(dataItem) {
      console.log("dataItem=", dataItem);
    },
  },
};
</script>
