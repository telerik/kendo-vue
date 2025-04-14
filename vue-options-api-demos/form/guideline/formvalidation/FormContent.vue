<template>
    <form-element :style="{ width: '400px' }" >
          <fieldset class="k-form-fieldset">
            <legend class="k-form-legend">
                PLEASE FILL IN THE FOLLOWING INFORMATION:
            </legend>
                <div v-if="computedErrors.length" class="k-messagebox k-messagebox-error">
                  {{kendoForm.errors[genericErrorField]}}
                  <ul>
                      <li v-for="errors in computedErrors">
                      {{errors}}</li>
                  </ul>
                </div>
              
              <field
                :id="'username'"
                :name="'username'"
                :label="'User Name'"
                :component="'myTemplate'"
                :validator="userNameValidator"
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
                  />
              </template>
              </field>
              <field
                  :id="'notifications'"
                  :name="'notifications'"
                  :label="'I want to receive notifications'"
                  :hint="'You will receive our latest updates and promotions on your email'"
                  :optional="true"
                  :component="'myTemplate'"
                >
                <template v-slot:myTemplate="{props}">
                 <formcheckbox
                    v-bind="props"
                    @change="props.onChange"
                    @blur="props.onBlur"
                    @focus="props.onFocus"
                  />
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
              <kbutton @click="clear">
                  Clear
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
import {
  userNameValidator, 
  emailValidator,
} from "./validators";

export default {
    components: {
      field: Field,
      'form-element': FormElement,
      forminput: FormInput,
      formcheckbox: FormCheckbox,
      kbutton: Button
    },
    inject: {
      kendoForm: { default: {} },  
    },
    computed: {
      computedErrors (){
          return Object.keys(this.kendoForm.errors)
                      .filter((field) => field !== this.genericErrorField)
                      .filter((field) => this.kendoForm.errors[field])
                      .map((field)=> this.kendoForm.errors[field] )
      }
    },
    data: function () {
        return { 
          genericErrorField: 'VALIDATION_SUMMARY',
        
          emailValidator,
          userNameValidator,
         };
    },
    methods: {
      handleSubmit (dataItem) {
         alert(JSON.stringify(dataItem, null, 2));
      },
      clear(){
        this.kendoForm.onFormReset();
      }
    }
};

</script>
