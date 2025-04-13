<template>
    <form-element :style="{ maxWidth: '650px' }">
      <fieldset class="k-form-fieldset">
        <field
          :id="'fullName'"
          :name="'fullName'"
          :label="'Full Name'"
          :component="'myTemplate'"
          :validator="nameValidator"
          :hint="'Hint: Write Your Name'"
        >
          <template v-slot:myTemplate="{ props }">
            <FormTextBox
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
          <kbutton @click="clear"> Clear </kbutton>
        </div>
      </fieldset>
    </form-element>
  </template>
  <script>
  import { Field, FormElement } from '@progress/kendo-vue-form';
  import FormTextBox from './FormTextBox.vue';
  import { Button } from '@progress/kendo-vue-buttons';
  import { nameValidator } from './validators';
  
  export default {
    components: {
      field: Field,
      'form-element': FormElement,
      FormTextBox,
      kbutton: Button,
    },
    inject: {
      kendoForm: { default: {} },
    },
    data: function () {
      return {
        nameValidator,
      };
    },
    methods: {
      handleSubmit(dataItem) {
        alert(JSON.stringify(dataItem, null, 2));
      },
      clear() {
        this.kendoForm.onFormReset();
      },
    },
  };
  </script>
  