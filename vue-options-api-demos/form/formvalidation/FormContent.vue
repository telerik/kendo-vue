<template>
    <form-element :style="{ maxWidth: '650px' }">
          <fieldset class="k-form-fieldset">
            <legend class="k-form-legend">
              Please fill in the fields:
            </legend>
                <div v-if="kendoForm.visited &&
              kendoForm.errors &&
              kendoForm.errors.VALIDATION_SUMMARY" class="k-messagebox k-messagebox-error">
                  {{kendoForm.errors.VALIDATION_SUMMARY}}
                </div>
            <div class="mb-3">
               <field
                :id="'user.firstName'"
                :name="'user.firstName'"
                :label="'first Name'"
                :component="'myTemplate'"
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
            </div>

            <div class="mb-3">
               <field
                :id="'user.lastName'"
                :name="'user.lastName'"
                :label="'Last Name'"
                :component="'myTemplate'"
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
            </div>
          </fieldset>
          <div class="k-form-buttons">
           <kbutton
              type="submit"
              :disabled="!kendoForm.allowSubmit"
            >
              Submit
            </kbutton>
              <kbutton
              type="button"
                @click="clear">Clear
              </kbutton>
          </div>
        </form-element>
</template>
<script>
import { Field, FormElement } from "@progress/kendo-vue-form";
import { Input } from "@progress/kendo-vue-inputs";
import FormInput from "./FormInput.vue";
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
      field: Field,
      'form-element': FormElement,
      error: Error,
      'forminput': FormInput,
      'kbutton': Button
    },
    inject: {
      kendoForm: { default: {} },  
    },
    data: function () {
        return { 
          kinput: Input
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
