<template>
    <form-element :style="{ maxWidth: '650px' }">
          <fieldset class="k-form-fieldset">
              <field
                  :id="'confirmationType'"
                  :name="'confirmationType'"
                  :label="'Type of Confirmation'"
                  :hint="'Hint: Choose a way to receive a confirmation'"
                  :component="'myTemplate'"
                  :data-items="confirmationData"
                >
                <template v-slot:myTemplate="{props}">
                    <formradiogroup
                     v-bind="props"
                      @change="props.onChange"
                      @blur="props.onBlur"
                      @focus="props.onFocus"
                    ></formradiogroup>
                </template>
              </field>
              <field
                  :id="'gender'"
                  :name="'gender'"
                  :label="'Gender'"
                  :layout="'horizontal'"
                  :component="'myTemplate'"
                  :data-items="genders"
                >
             <template v-slot:myTemplate="{props}">
                    <formradiogroup
                     v-bind="props"
                      @change="props.onChange"
                      @blur="props.onBlur"
                      @focus="props.onFocus"
                    ></formradiogroup>
                </template>
              </field>
              <field
                  :id="'terms'"
                  :name="'terms'"
                  :label="'I agree with terms and conditions'"
                  :hint="'Hint: By checking this, you agree to our Terms&Conditions'"
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
              <kbutton @click="clear">
                  Clear
              </kbutton>
            </div>
          </fieldset>
        </form-element>
</template>
<script>
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormCheckbox from "./FormCheckbox.vue";
import FormRadioGroup from "./FormRadioGroup.vue";
import { termsValidator } from './validators';
import { Button } from "@progress/kendo-vue-buttons";
import { genders } from "./data";

export default {
    
    components: {
      field: Field,
      'form-element': FormElement,
      formcheckbox: FormCheckbox,
      formradiogroup: FormRadioGroup,
      kbutton: Button
    },
    inject: {
      kendoForm: { default: {} },  
    },
    data: function () {
        return { 
          
          confirmationData: [
            { label: "Phone Call", value: "phone" },
            { label: "Via Email", value: "email" },
          ],
          genders: genders
         };
    },
    methods: {
      termsValidator: termsValidator,
      handleSubmit (dataItem) {
         alert(JSON.stringify(dataItem, null, 2));
      },
      clear(){
        this.kendoForm.onFormReset();
      }
    }
};

</script>
