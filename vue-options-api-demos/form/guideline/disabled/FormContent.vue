<template>
    <form-element :style="{ width: '400px' }" >
          <fieldset class="k-form-fieldset">
              <field
                :id="'ownerName'"
                :name="'ownerName'"
                :label="'Owner Name'"
                :hint="'Hint: Disabled field'"
                :component="'myTemplate'"
                :disabled="true"
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
                :hint="'Hint: Readonly field'"
                :readonly="true"
                :component="'myTemplate'"
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

export default {
    
    components: {
      field: Field,
      'form-element': FormElement,
      forminput: FormInput,
      formmaskedtextbox: FormMaskedTextBox,
      kbutton: Button
    },
    inject: {
      kendoForm: { default: {} },  
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
