<template>
  <form-element @change="onChange">
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
      <field
        :id="'avatar'"
        :name="'avatar'"
        :label="'Avatar'"
        :hint="'Hint: Upload your avatar picture'"
        :optional="true"
        :component="'myTemplate'"
      >
        <template v-slot:myTemplate="{ props }">
          <formupload
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          ></formupload>
        </template>
      </field>
    </fieldset>
  </form-element>
</template>
<script>
import { Field, FormElement } from '@progress/kendo-vue-form';
import FormInput from './FormInput.vue';
import FormUpload from './FormUpload.vue';
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
    formupload: FormUpload,
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
  computed: {
    disableNextStep() {
      const errors = this.kendoForm.errors;
      return (
        errors.username === '' && errors.password == '' && errors.email == ''
      );
    },
  },
  methods: {
    onChange() {
      this.$emit('isStepValid', { disableNextStep: this.disableNextStep });
    },
  },
};
</script>
