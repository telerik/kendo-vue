<template>
  <form-element>
    <fieldset
      class="k-form-fieldset"
      :style="{
        width: '500px',
        margin: '0 auto',
      }"
    >
      <field
        :id="'firstName'"
        :name="'firstName'"
        :label="'First Name'"
        :component="'myTemplate'"
        :validator="requiredValidator"
      >
        <template v-slot:myTemplate="{ props }">
          <forminput
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </field>
      <field
        :id="'lastName'"
        :name="'lastName'"
        :label="'Last Name'"
        :component="'myTemplate'"
        :validator="requiredValidator"
      >
        <template v-slot:myTemplate="{ props }">
          <forminput
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </field>
    </fieldset>
  </form-element>
</template>
<script>
import { Field, FormElement } from '@progress/kendo-vue-form';
import FormInput from './FormInput.vue';
import { Button } from '@progress/kendo-vue-buttons';
import { requiredValidator } from './validators';

export default {
  components: {
    field: Field,
    'form-element': FormElement,
    forminput: FormInput,
    kbutton: Button,
  },
  inject: {
    kendoForm: { default: {} },
  },
  data: function () {
    return {
      requiredValidator,
    };
  },
};
</script>
