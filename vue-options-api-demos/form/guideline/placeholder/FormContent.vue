<template>
    <form-element :style="{ width: '400px' }" :horizontal="true">
          <fieldset class="k-form-fieldset">
             <field
                :id="'fullName'"
                :name="'fullName'"
                :label="'Full Name'"
                :component="'myTemplate'"
                :placeholder="'e.g.: Clevey Thursfield'"
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
import { Button } from "@progress/kendo-vue-buttons";

import {
  requiredValidator
} from "./validators";

export default {
    
    components: {
      field: Field,
      'form-element': FormElement,
      forminput: FormInput,
      kbutton: Button
    },
    inject: {
      kendoForm: { default: {} },  
    },
    data: function () {
        return { 
          requiredValidator
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
