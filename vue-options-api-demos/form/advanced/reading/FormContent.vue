<template>
    <form-element :style="{ maxWidth: '650px' }">
          <fieldset class="k-form-fieldset">
              <field
                  :name="'userCount'"
                  :label="'Users Count'"
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
               <field
                  :name="'ticketCount'"
                  :label="'Tickets Count'"
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
          Total ticket price:
          <strong>
            {{kendoForm.valueGetter("userCount") *
              kendoForm.valueGetter("ticketCount")}}
          </strong>
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
      }
    }
};

</script>
