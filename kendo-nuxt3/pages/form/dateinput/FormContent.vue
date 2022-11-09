<template>
  <form-element :style="{ width: '400px' }">
        <fieldset class="k-form-fieldset">
            <field    
                :id="'bdate'"
                :name="'bdate'"
                :label="'Birth Date'"
                :component="'myTemplate'"
                :validator="requiredValidator"
              >
              <template v-slot:myTemplate="{props}">
                  <formdateinput
                    v-bind="props"
                    @change="props.onChange"
                    @blur="props.onBlur"
                    @focus="props.onFocus"
                  ></formdateinput>
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
import FormDateInput from "./FormDateInput.vue";

import { Button } from "@progress/kendo-vue-buttons";

import {
requiredValidator
} from "./validators";

export default {
  
  components: {
    field: Field,
    'form-element': FormElement,
    formdateinput: FormDateInput,
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
