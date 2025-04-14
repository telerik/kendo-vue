<template>
    <form-element :style="{ maxWidth: '650px' }">
          <fieldset class="k-form-fieldset">
            <legend class="k-form-legend">
              BOOK YOUR DREAM VACATION TODAY
            </legend>
             <field
                :id="'firstName'"
                :name="'firstName'"
                :label="'First Name'"
                :component="'myTemplate'"
                :validator="firstNameValidator"
              >
               <template v-slot:myTemplate="{props}">
                  <forminput
                     v-bind="props"
                    @change="props.onChange"
                    @blur="props.onBlur"
                    @focus="props.onFocus"
                  />
              </template>
              </field>
              <field
                :id="'lastName'"
                :name="'lastName'"
                :label="'Last Name'"
                :component="'myTemplate'"
                :validator="lastNameValidator"
              >
               <template v-slot:myTemplate="{props}">
                  <forminput
                     v-bind="props"
                    @change="props.onChange"
                    @blur="props.onBlur"
                    @focus="props.onFocus"
                  />
              </template>
              </field>
              <span class="k-form-separator" />
              <field
                  :id="'terms'"
                  :name="'terms'"
                  :label="'I agree with terms and conditions'"
                  :component="'myTemplate'"
                  :validator="checkboxValidator"
                >
                <template v-slot:myTemplate="{props}">
                    <formcheckbox
                       v-bind="props"
                      @change="props.onChange"
                      @blur="props.onBlur"
                      @focus="props.onFocus"
                    ></formcheckbox>
                </template>
              </field>
            <div class="k-form-buttons">
              <kbutton
                :primary="true"
                :type="'submit'"
                :disabled="!kendoForm.allowSubmit"
              >
                Submit
              </kbutton>
            </div>
          </fieldset>
    </form-element>
</template>
<script>
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormInput from "./FormInput.vue";
import FormCheckbox from "./FormCheckbox.vue";
import { Button } from "@progress/kendo-vue-buttons";

export default {
    components: {
      field: Field,
      'form-element': FormElement,
      forminput: FormInput,
      formcheckbox: FormCheckbox,
      kbutton: Button
    },
    inject: {
      kendoForm: { default: {} }
    },
    methods: {
      firstNameValidator (value){
        return   !value
          ? "First Name is required"
          : value.length < 7
          ? "First Name should be at least 7 characters long."
          : "";
      },
      lastNameValidator (value) {
        return !value
          ? "Last Name is required"
          : value.length < 7
          ? "Last Name should be at least 7 characters long."
          : "";
      },
      checkboxValidator (value) {
        return  !value ? "Terms&Conditions checkbox is required" : "";
      }
    }
};

</script>
