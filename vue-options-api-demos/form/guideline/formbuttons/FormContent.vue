<template>
    <form-element :style="{ width: '400px' }">
          <fieldset class="k-form-fieldset">
            <legend class="k-form-legend">
                Your Account       
            </legend>
              <field
                :id="'userName'"
                :name="'userName'"
                :label="'User Name'"
                :hint="'Hint: Your username'"
                :component="'myTemplate'"
                :validator="requiredValidator"
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
                :hint="'Hint: Your active email'"
                :optional="true"
                :component="'myTemplate'"
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
              <span class="k-form-separator" />
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
                    ></formcheckbox>
                </template>
              </field>
            <div class="k-form-buttons k-buttons-end">
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
  emailValidator,
  requiredValidator
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
    data: function () {
        return { 
          emailValidator,
          requiredValidator
        }
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
