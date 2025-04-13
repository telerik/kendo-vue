<template>
    <form-element :style="{ width: '400px' }" :horizontal="true" >
          <fieldset class="k-form-fieldset">
            <legend class="k-form-legend">
                Horizontal Form            
            </legend>
              <field
                :id="'fullName'"
                :name="'fullName'"
                :label="'Full Name'"
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
                :id="'cardNumber'"
                :name="'cardNumber'"
                :label="'Card Number'"
                :mask="'0000-0000-0000-0000'"
                :hint="'Hint: Your Credit Card Number'"
                :component="'myTemplate'"
                :validator="cardValidator"
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
                :id="'cvc'"
                :name="'cvc'"
                :label="'CVC Number'"
                :mask="'000'"
                :hint="'Hint: The last 3 digids on the back of the Card'"
                :component="'myTemplate'"
                :validator="cvcValidator"
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
import FormInput from "./FormInput.vue";
import FormMaskedTextBox from "./FormMaskedTextBox.vue";
import { Button } from "@progress/kendo-vue-buttons";
import {
  requiredValidator,
  cardValidator,
  cvcValidator
} from "./validators";

export default {
    
    components: {
      field: Field,
      'form-element': FormElement,
      forminput: FormInput,
      formmaskedtextbox:FormMaskedTextBox,
      kbutton: Button
    },
    inject: {
      kendoForm: { default: {} },  
    },
    data: function () {
        return { 
          requiredValidator,
          cardValidator,
          cvcValidator
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
