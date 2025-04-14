<template>
    <form-element :style="{ maxWidth: '650px' }">
          <fieldset class="k-form-fieldset">
            <legend class="k-form-legend">
              BOOK YOUR DREAM VACATION TODAY
            </legend>
             <field
                :id="'fullName'"
                :name="'fullName'"
                :label="'Full Name'"
                :component="'myTemplate'"
                :validator="nameValidator"
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
                :id="'phoneNumber'"
                :name="'phoneNumber'"
                :label="'Phone Number'"
                :mask="'(999) 000-00-00-00'"
                :hint="'Hint: Your active phone number.'"
                :component="'myTemplate'"
                :validator="phoneValidator"
              >
               <template v-slot:myTemplate="{props}">
                  <formmaskedtextbox
                     v-bind="props"
                    @change="props.onChange"
                    @blur="props.onBlur"
                    @focus="props.onFocus"
                  ></formmaskedtextbox>
              </template>
              </field>
              <field
                :id="'email'"
                :name="'email'"
                :label="'Email'"
                :hint="'Hint: Enter your personal email address.'"
                :component="'myTemplate'"
                :validator="emailValidator"
              >
               <template v-slot:myTemplate="{props}">
                  <forminput
                     v-bind="props"
                    @change="props.onChange"
                    @blur="props.onBlur"
                    @focus="props.onFocus"
                  ></forminput>
              </template>
              </field>
              <div :style="{ display: 'flex', justifyContent: 'space-between' }">
                <field
                  :id="'arrivalDate'"
                  :name="'arrivalDate'"
                  :label="'Arrival Date'"
                  :hint="'Hint: Should be greater than today.'"
                  :component="'myTemplate'"
                  :validator="arrivalDateValidator"
                  :style="{'width': '90%', 'margin-right': '18px'}"
                >
                <template v-slot:myTemplate="{props}">
                    <formdatepicker
                      v-bind="props"
                      @change="props.onChange"
                      @blur="props.onBlur"
                      @focus="props.onFocus"
                    ></formdatepicker>
                </template>
                </field>
                <field
                  :id="'nightsCount'"
                  :name="'nightsCount'"
                  :label="'Number of Nights'"
                  :format="'n0'"
                  :component="'myTemplate'"
                  :validator="nightsValidator"
                >
                <template v-slot:myTemplate="{props}">
                    <formnumerictextbox
                      v-bind="props"
                      @change="props.onChange"
                      @blur="props.onBlur"
                      @focus="props.onFocus"
                    ></formnumerictextbox>
                </template>
                </field>
              </div>
              <field
                  :id="'guestsCount'"
                  :name="'guestsCount'"
                  :label="'Number of Guests'"
                  :hint="'Hint: Maximum 5 guests.'"
                  :format="'n0'"
                  :component="'myTemplate'"
                  :validator="guestsValidator"
                >
                <template v-slot:myTemplate="{props}">
                    <formnumerictextbox
                      v-bind="props"
                      @change="props.onChange"
                      @blur="props.onBlur"
                      @focus="props.onFocus"
                    ></formnumerictextbox>
                </template>
              </field>
              <field
                  :id="'comments'"
                  :name="'comments'"
                  :label="'Comments'"
                  :component="'myTemplate'"
                >
                <template v-slot:myTemplate="{props}">
                    <formtextarea
                     v-bind="props"
                      @change="props.onChange"
                      @blur="props.onBlur"
                      @focus="props.onFocus"
                    ></formtextarea>
                </template>
              </field>
              <span class="k-form-separator" />
              <field
                  :id="'terms'"
                  :name="'terms'"
                  :label="'I agree with terms and conditions'"
                  :component="'myTemplate'"
                  :validator="termsValidator"
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
                :theme-color="'primary'"
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
import FormMaskedTextBox from "./FormMaskedTextBox.vue";
import FormDatePicker from "./FormDatePicker.vue";
import FormNumericTextBox from "./FormNumericTextBox.vue";
import FormTextArea from "./FormTextArea.vue";
import FormCheckbox from "./FormCheckbox.vue";
import { Button } from "@progress/kendo-vue-buttons";

import {
  termsValidator,
  emailValidator,
  nameValidator,
  phoneValidator,
  guestsValidator,
  nightsValidator,
  arrivalDateValidator,
} from "./validators";

export default {
    
    components: {
      field: Field,
      'form-element': FormElement,
      forminput: FormInput,
      formmaskedtextbox: FormMaskedTextBox,
      formdatepicker: FormDatePicker,
      formnumerictextbox: FormNumericTextBox,
      formtextarea: FormTextArea,
      formcheckbox: FormCheckbox,
      kbutton: Button
    },
    inject: {
      kendoForm: { default: {} },  
    },
    data: function () {
        return { 
          termsValidator,
          emailValidator,
          nameValidator,
          phoneValidator,
          guestsValidator,
          nightsValidator,
          arrivalDateValidator
         };
    },
    methods: {
      handleSubmit (dataItem) {
         alert(JSON.stringify(dataItem, null, 2));
      }
    }
};

</script>
