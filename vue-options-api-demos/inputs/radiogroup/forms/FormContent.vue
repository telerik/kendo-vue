<template>
    <form-element :style="{ maxWidth: '400px' }">
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
                <field
                :id="'confirmation'"
                :name="'confirmation'"
                :label="'Type of reservation confirmation'"
                :hint="'Hint: Choose a way to receive a confirmation'"
                :data-items="confirmationData"
                :layout="'horizontal'"
                :component="'myTemplate'"
                :validator="radioGroupValidator"
              >
               <template v-slot:myTemplate="{props}">     
                  <formradiogroup
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
                <kbutton
                @click="clear">Clear
              </kbutton>
            </div>
          </fieldset>
        </form-element>
</template>
<script>
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormRadioGroup from "./FormRadioGroup.vue";
import FormInput from "./FormInput.vue";
import { Button } from "@progress/kendo-vue-buttons";

export default {
    components: {
      field: Field,
      'form-element': FormElement,
      forminput: FormInput,
      formradiogroup: FormRadioGroup,
      kbutton: Button
    },
    data() {
      return {
        confirmationData: [
          {
            label: "Phone Call",
            value: "phone",
          },
          {
            label: "Via Email",
            value: "email",
          },
        ]
      };
    },
    inject: {
      kendoForm: { default: {} },  
    },
    methods: {
      firstNameValidator (value){
        return !value
          ? "First Name is required"
          : value.length < 7
          ? "First Name should be at least 7 characters long."
          : "";
      },
      lastNameValidator (value) {
        return  !value
          ? "Last Name is required"
          : value.length < 7
          ? "Last Name should be at least 7 characters long."
          : "";
      },
      radioGroupValidator (value) {
        return !value ? "Type of Confirmation is required" : "";
      },
      handleSubmit (dataItem) {
         alert(JSON.stringify(dataItem, null, 2));
      },
      clear(){
        this.kendoForm.onFormReset();
      }
    }
};

</script>
