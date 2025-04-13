<template>
  <form-element :style="{ width: '400px' }">
    <fieldset class="k-form-fieldset">
      <legend class="k-form-legend">User Details</legend>
      <div class="mb-3">
        <field
          :name="'firstName'"
          :component="'myTemplate'"
          :label="'First name'"
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
          :name="'lastName'"
          :component="'myTemplate'"
          :label="'Last name'"
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
          :name="'signature'"
          :component="'myTemplate'"
          :label="'Signature'"
          :hint="'Sign to agree with our Terms of Use'"
          :validator="signatureValidator"
        >
          <template v-slot:myTemplate="{ props }">
            <FormSignature v-bind="props" @change="props.onChange" />
          </template>
        </field>
      </div>
    </fieldset>
    <div class="k-form-buttons">
      <kbutton type="submit" :disabled="!kendoForm.allowSubmit">
        Submit
      </kbutton>
      <kbutton type="button" @click="clear">Clear </kbutton>
    </div>
  </form-element>
</template>
<script>
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormInput from "./FormInput.vue";
import FormSignature from "./FormSignature.vue";
import { Button } from "@progress/kendo-vue-buttons";

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) =>
  emailRegex.test(value) ? "" : "Please enter a valid email.";

const signatureValidator = (value) =>
  !value ? "Signature is required" : "";

export default {
  components: {
    field: Field,
    "form-element": FormElement,
    forminput: FormInput,
    kbutton: Button,
    FormSignature,
  },
  inject: {
    kendoForm: { default: {} },
  },
  data: function () {
    return {
      emailValidator: emailValidator,
      signatureValidator: signatureValidator,
    };
  },
  methods: {
    handleSubmit(dataItem) {
      alert(JSON.stringify(dataItem, null, 2));
    },
    clear() {
      this.kendoForm.onFormReset();
    },
  },
};
</script>
