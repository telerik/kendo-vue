<template>
  <div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
    />

    <k-form @submit="handleSubmit">
      <form-element :style="{ maxWidth: '650px' }">
        <fieldset class="k-form-fieldset">
          <legend class="k-form-legend">Please fill in the fields:</legend>

          <div class="mb-3">
            <field name="firstName" component="myTemplate" label="First name">
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
            <field name="lastName" component="myTemplate" label="Last name">
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
              name="email"
              type="email"
              component="myTemplate"
              label="Email"
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
        </fieldset>

        <div class="k-form-buttons">
          <!-- 3. Spinner icon + disable logic -->
          <kbutton
            type="submit"
            :disabled="disabled"
            :icon-class="disabled ? 'fa fa-spinner fa-spin' : ''"
          >
            Submit
          </kbutton>
          <kbutton type="button" @click="clear">Clear</kbutton>
        </div>
      </form-element>
    </k-form>
  </div>
</template>

<script>
import { Form, Field, FormElement } from '@progress/kendo-vue-form';
import FormInput from './FormInput.vue';
import { Button } from '@progress/kendo-vue-buttons';

const emailRegex = /\S+@\S+\.\S+/;
const emailValidator = (value) =>
  emailRegex.test(value) ? '' : 'Please enter a valid email.';

export default {
  name: 'MyForm',
  components: {
    'k-form': Form,
    field: Field,
    'form-element': FormElement,
    forminput: FormInput,
    kbutton: Button,
  },
  inject: {
    kendoForm: { default: {} },
  },
  data() {
    return {
      disabled: false,
      emailValidator,
    };
  },
  methods: {
    handleSubmit(dataItem) {
      this.disabled = true;

      setTimeout(() => {
        this.disabled = false;
      }, 2000);
    },
    clear() {
      this.kendoForm.onFormReset();
    },
  },
};
</script>

<style scoped>
.k-error {
  color: red;
  font-size: 12px;
}
</style>
