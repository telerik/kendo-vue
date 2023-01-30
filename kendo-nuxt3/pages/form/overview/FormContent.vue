<template>
  <form-element :style="{ maxWidth: '650px' }">
    <fieldset class="k-form-fieldset">
      <legend class="k-form-legend">Please fill in the fields:</legend>
      <div class="mb-3">
        <label for="firstName"> First name: </label>
        <field
          :class="'k-textbox'"
          :name="'firstName'"
          :component="'input'"
          :label="'First name'"
        />
      </div>

      <div class="mb-3">
        <field
          :name="'lastName'"
          :component="'myTemplate'"
          :label="'Last name'"
           :validator="requiredValidator"
        >
          <template v-slot:myTemplate="{ props, listeners }">
            <forminput
              v-bind="props"
              v-on="listeners"
            />
          </template>
        </field>
      </div>
      <div class="mb-3">
        <field
          :name="'email'"
          :type="'email'"
          :component="'myTemplate'"
          :label="'Email'"
          :validator="emailValidator"
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
      </div>
      <div class="mb-3">
        <field
          :id="'keepSigned'"
          :name="'keepSigned'"
          :component="'myTemplate'"
          :hint="'Keep me signed in'"
          :validator="requiredValidator"
        >
          <template v-slot:myTemplate="{ props }">
            <formswitch
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
      <button type="submit" class="k-button" :disabled="!kendoForm.allowSubmit">
        Submit
      </button>
      <button type="button" class="k-button" @click="clear">Clear</button>
    </div>
  </form-element>
</template>
<script lang="ts">
import { Field, FormElement } from '@progress/kendo-vue-form';
import FormInput from './FormInput.vue';
import FormSwitch from './FormSwitch.vue';

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) =>
  emailRegex.test(value) ? '' : 'Please enter a valid email.';
const requiredValidator = (value) => (value ? '' : 'This field is required.');

export default {
  components: {
    field: Field,
    'form-element': FormElement,
    forminput: FormInput,
    formswitch: FormSwitch,
  },
  inject: {
    kendoForm: { default: {} },
  },
  data: function () {
    return {
      emailValidator: emailValidator,
      requiredValidator: requiredValidator,
    };
  },
  methods: {
    handleSubmit(dataItem) {
      console.log('dataItem=', dataItem);
    },
  },
};
</script>
