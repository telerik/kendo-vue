<template>
    <form-element :style="{ maxWidth: '650px' }">
      <fieldset class="k-form-fieldset">
        <legend class="k-form-legend">Please fill in the fields:</legend>
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
            :name="'email'"
            :type="'email'"
            :component="'myTemplate'"
            :label="'Email'"
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
          <legend class="'k-form-legend'">Please rate your experience:</legend>
          <field
            :name="'rating'"
            :component="'myTemplate'"
            :validator="ratingValidator"
          >
            <template v-slot:myTemplate="{ props }">
                <FormRating
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
        <kbutton type="submit" :disabled="!kendoForm.allowSubmit">
          Submit
        </kbutton>
        <kbutton type="button" @click="clear">Clear </kbutton>
      </div>
    </form-element>
  </template>
  <script>
  import { Field, FormElement } from "@progress/kendo-vue-form";
  import { Button } from "@progress/kendo-vue-buttons";
  import FormInput from "./FormInput.vue";
  import FormRating from "./FormRating.vue";

  const emailRegex = new RegExp(/\S+@\S+\.\S+/);
  const emailValidator = (value) =>
    emailRegex.test(value) ? "" : "Please enter a valid email.";

const ratingValidator = (value) =>
    value ? "" : "Please rate your experience.";

  export default {
    components: {
      field: Field,
      "form-element": FormElement,
      forminput: FormInput,
      kbutton: Button,
      FormRating,
    },
    inject: {
      kendoForm: { default: {} },
    },
    data: function () {
      return {
        emailValidator: emailValidator,
        ratingValidator: ratingValidator
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
