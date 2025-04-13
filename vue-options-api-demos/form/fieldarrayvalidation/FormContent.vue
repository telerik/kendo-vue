<template>
    <form-element :style="{ maxWidth: '650px' }">
          <fieldset class="k-form-fieldset">
          <fieldarray
            :name="'users'"
            :component="'myTemplate'"
            :validator="arrayLengthValidator"
          >
            <template v-slot:myTemplate="{props}">
                  <formgrid
                    v-bind="props"
                    @remove="props.onRemove"
                    @unshift="props.onUnshift"
                  ></formgrid>
              </template>
          </fieldarray>
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
import { Field, FieldArray, FormElement } from "@progress/kendo-vue-form";
import { Button } from "@progress/kendo-vue-buttons";
import FormGrid from "./FormGrid.vue";

export default {
    components: {
      field: Field,
      fieldarray: FieldArray,
      'form-element': FormElement,
      'kbutton': Button,
      formgrid: FormGrid
    },
    inject: {
      kendoForm: { default: {} },  
    },
    methods: {
      arrayLengthValidator(value){
          return value && value.length ? "" : "Please add at least one record.";
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
