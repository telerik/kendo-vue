<template>
    <form-element :style="{ maxWidth: '650px' }">
          <fieldset class="k-form-fieldset">
              <field
                  :name="'price'"
                  :label="'Price'"
                  :component="'myTemplate'"
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
          
                <br />
        <kbutton
            @click="clearPrice"
          >
            Clear price
          </kbutton>
            <div class="k-form-buttons">
              <kbutton
                :theme-color="'primary'"
                :type="'submit'"
                :disabled="!kendoForm.allowSubmit"
              >
                Submit
              </kbutton>
            </div>
          </fieldset>
        </form-element>
</template>
<script>
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormNumericTextBox from "./FormNumericTextBox.vue";
import { Button } from "@progress/kendo-vue-buttons";

export default {
    
    components: {
      field: Field,
      'form-element': FormElement,
      formnumerictextbox: FormNumericTextBox,
      kbutton: Button
    },
    inject: {
      kendoForm: { default: {} },  
    },
    methods: {
      handleSubmit (dataItem) {
         alert(JSON.stringify(dataItem, null, 2));
      },
      clearPrice (e) {
          e.preventDefault();
          this.kendoForm.onChange("price", {
            value: 0,
          });
      }
    }
};

</script>
