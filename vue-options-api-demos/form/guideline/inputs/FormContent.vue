<template>
    <form-element :style="{ maxWidth: '650px' }">
          <fieldset class="k-form-fieldset">
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
                  :id="'amount'"
                  :name="'amount'"
                  :label="'Amount'"
                  :hint="'Hint: Amount of money.'"
                  :format="'n2'"
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
                  :id="'address'"
                  :name="'address'"
                  :label="'Address'"
                  :component="'myTemplate'"
                  :validator="addressValidator"
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
              <field
                  :id="'size'"
                  :name="'size'"
                  :label="'Size'"
                  :component="'myTemplate'"
                  :min="min"
                  :max="max"
                  :data="sliderData"
                >
                <template v-slot:myTemplate="{props}">
                    <formslider
                      v-bind="props"
                      @change="props.onChange"
                      @blur="props.onBlur"
                      @focus="props.onFocus"
                    ></formslider>
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
import FormNumericTextBox from "./FormNumericTextBox.vue";
import FormTextArea from "./FormTextArea.vue";
import FormSlider from "./FormSlider.vue";
import { Button } from "@progress/kendo-vue-buttons";

import {
  nameValidator,
  phoneValidator,
  addressValidator,
  guestsValidator
} from "./validators";

export default {
    
    components: {
      field: Field,
      'form-element': FormElement,
      forminput: FormInput,
      formmaskedtextbox: FormMaskedTextBox,
      formnumerictextbox: FormNumericTextBox,
      formtextarea: FormTextArea,
      formslider: FormSlider,
      kbutton: Button
    },
    inject: {
      kendoForm: { default: {} },  
    },
    data: function () {
        return { 
          nameValidator,
          phoneValidator,
          addressValidator,
          guestsValidator,
          min: 1,
          max: 10,
          sliderData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
