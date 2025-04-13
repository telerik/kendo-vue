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
        :id="'username'"
        :name="'username'"
        :label="'Username'"
        :component="'myTemplate'"
        :validator="userNameValidator"
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
        :id="'email'"
        :name="'email'"
        :label="'Email'"
        :hint="'Hint: Enter your personal email address.'"
        :component="'myTemplate'"
        :validator="emailValidator"
      >
        <template v-slot:myTemplate="{ props }">
          <forminput
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          ></forminput>
        </template>
      </field>
      <field
        :id="'password'"
        :name="'password'"
        :label="'Password'"
        :component="'myTemplate'"
        :type="'password'"
        :hint="'Hint: enter alphanumeric characters only.'"
        :validator="passwordValidator"
      >
        <template v-slot:myTemplate="{ props }">
          <forminput
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          ></forminput>
        </template>
      </field>
    </fieldset>
  </form-element>
</template>
<script>
import { Field, FormElement } from '@progress/kendo-vue-form';
import FormInput from './FormInput.vue';
import { Button } from '@progress/kendo-vue-buttons';

import {
  emailValidator,
  userNameValidator,
  passwordValidator,
} from './validators';

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
      emailValidator,
      userNameValidator,
      passwordValidator,
    };
  },
};
</script>
