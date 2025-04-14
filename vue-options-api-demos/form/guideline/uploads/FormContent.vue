<template>
    <form-element :style="{ width: '400px' }">
          <fieldset class="k-form-fieldset">
              <field
                  :id="'avatar'"
                  :name="'avatar'"
                  :label="'Avatar'"
                  :hint="'Hint: Upload your avatar picture'"
                  :component="'myTemplate'"
                >
                <template v-slot:myTemplate="{props}">
                    <formupload
                      v-bind="props"
                      @change="props.onChange"
                      @blur="props.onBlur"
                      @focus="props.onFocus"
                    ></formupload>
                </template>
              </field>
              <field
                  :id="'photos'"
                  :name="'photos'"
                  :label="'Upload Photos'"
                  :hint="'Hint: Select your additional photos'"
                  :component="'myTemplate'"
                >
                <template v-slot:myTemplate="{props}">
                    <formupload
                      v-bind="props"
                      @change="props.onChange"
                      @blur="props.onBlur"
                      @focus="props.onFocus"
                    ></formupload>
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
import FormUpload from "./FormUpload.vue";

import { Button } from "@progress/kendo-vue-buttons";

export default {
    
    components: {
      field: Field,
      'form-element': FormElement,
      formupload: FormUpload,
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
