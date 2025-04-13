<template>
    <form-element :style="{ width: '400px' }">
          <fieldset class="k-form-fieldset">
              <field
                  :id="'street'"
                  :name="'street'"
                  :label="'Street Number'"
                  :hint="'Hint: Enter your street number.'"
                  :format="'n2'"
                  :component="'myTemplate'"
                  :optional="true"
                  :validator="requiredValidator"
                >
                <template v-slot:myTemplate="{props}">
                    <formfloatingnumerictextBox
                      v-bind="props"
                      @change="props.onChange"
                      @blur="props.onBlur"
                      @focus="props.onFocus"
                    ></formfloatingnumerictextBox>
                </template>
              </field>
              <field
                :id="'phoneNumber'"
                :name="'phoneNumber'"
                :label="'Phone Number'"
                :mask="'(999) 000-00-00-00'"
                :hint="'Hint: Your active phone number.'"
                :optional="true"
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
import FormMaskedTextBox from "./FormMaskedTextBox.vue";
import FormFloatingNumericTextBox from "./FormFloatingNumericTextBox.vue";

import { Button } from "@progress/kendo-vue-buttons";

import {
  phoneValidator,
  requiredValidator
} from "./validators";

export default {
    
    components: {
      field: Field,
      'form-element': FormElement,
      formmaskedtextbox: FormMaskedTextBox,
      formfloatingnumerictextBox:FormFloatingNumericTextBox,
      kbutton: Button
    },
    inject: {
      kendoForm: { default: {} },  
    },
    data: function () {
        return { 
          phoneValidator,
          requiredValidator,
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
