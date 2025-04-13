<template>
    <form-element :style="{ maxWidth: '650px' }">
          <fieldset class="k-form-fieldset">
             <field
                :id="'fullName'"
                :name="'fullName'"
                :component="'myTemplate'"
              >
               <template v-slot:myTemplate="{props}">
                  <forminput
                    v-bind="props"
                    @change="props.onChange"
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
