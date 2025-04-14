<template>
    <form-element :style="{ maxWidth: '650px' }">
              <field
                :id="'email'"
                :name="'email'"
                :component="'myTemplate'"
                :label="'Email (Regular Label)'" 
                :validator="emailValidator">
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
                :id="'secondEmail'"
                :name="'secondEmail'"
                :component="'myTemplate'"
                :label="'Email (Floating Label)'" 
                :validator="emailValidator">
                <template v-slot:myTemplate="{props}">
                 <formfloatinglabelinput
                    v-bind="props"
                    @change="props.onChange"
                    @blur="props.onBlur"
                    @focus="props.onFocus"
                  />
              </template>
                </field>
          <div class="k-form-buttons">
           <kbutton
              type="submit"
              :disabled="!kendoForm.allowSubmit"
            >
              Submit
            </kbutton>
          </div>
        </form-element>
</template>
<script>
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormInput from "./LabelFormInput.vue";
import FormFloatingLabelInput from "./FloatingLabelFormInput.vue";
import { Button } from '@progress/kendo-vue-buttons';

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) =>
  emailRegex.test(value) ? "" : "Please enter a valid email.";

export default {
    components: {
      field: Field,
      'form-element': FormElement,
      'forminput': FormInput,
      'formfloatinglabelinput':FormFloatingLabelInput,
      'kbutton': Button
    },
    inject: {
      kendoForm: { default: {} },  
    },
    data: function () {
        return { 
          emailValidator: emailValidator
         };
    },
    methods: {
      handleSubmit (dataItem) {
         alert(JSON.stringify(dataItem, null, 2));
      }
    }
};

</script>
