<template>
    <form-element :style="{ width: '400px' }">
          <fieldset class="k-form-fieldset">
              <field    
                  :id="'appointment'"
                  :name="'appointment'"
                  :label="'Appointment Date and Time'"
                  :hint="'Hint: Select Date and Time for your appointment'"
                  :component="'myTemplate'"
                  :validator="requiredValidator"
                >
                <template v-slot:myTemplate="{props}">
                    <formdatetimepicker
                      v-bind="props"
                      @change="props.onChange"
                      @blur="props.onBlur"
                      @focus="props.onFocus"
                    ></formdatetimepicker>
                </template>
              </field>
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
              <field    
                  :id="'btime'"
                  :name="'btime'"
                  :label="'Time of Birth'"
                  :hint="'Hint: Select your time of birth'"
                  :component="'myTemplate'"
                  :validator="requiredValidator"
                >
                <template v-slot:myTemplate="{props}">
                    <formtimepicker
                      v-bind="props"
                      @change="props.onChange"
                      @blur="props.onBlur"
                      @focus="props.onFocus"
                    ></formtimepicker>
                </template>
              </field>
              <field    
                  :id="'gdate'"
                  :name="'gdate'"
                  :label="'Date of Graduation'"
                  :component="'myTemplate'"
                  :validator="requiredValidator"
                >
                <template v-slot:myTemplate="{props}">
                    <formdatepicker
                      v-bind="props"
                      @change="props.onChange"
                      @blur="props.onBlur"
                      @focus="props.onFocus"
                    ></formdatepicker>
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
import FormDatePicker from "./FormDatePicker.vue";
import FormDateTimePicker from "./FormDateTimePicker.vue";
import FormDateInput from "./FormDateInput.vue";
import FormTimePicker from "./FormTimePicker.vue";

import { Button } from "@progress/kendo-vue-buttons";

import {
  requiredValidator
} from "./validators";

export default {
    
    components: {
      field: Field,
      'form-element': FormElement,
      formdatepicker: FormDatePicker,
      formdatetimepicker: FormDateTimePicker,
      formdateinput: FormDateInput,
      formtimepicker:FormTimePicker,
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
