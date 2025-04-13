<template>
    <form-element :style="{ maxWidth: '650px' }">
      <fieldset class="k-form-fieldset">
        <legend class="k-form-legend">
          PROFILE COMPLETENESS: {{ completeness }}%
        </legend>
        <ChunkProgressBar
          :value="completeness"
          :empty-style="emptyStyles"
          :progressStyle="progressStyles"
          :chunk-count="chunks"
        />
        <div class="mb-3">
          <field
            :name="'firstName'"
            :component="'myTemplate'"
            :label="'First name'"
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
            :name="'lastName'"
            :component="'myTemplate'"
            :label="'Last name'"
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
            :id="'gender'"
            :name="'gender'"
            :label="'Gender'"
            :component="'myTemplate'"
            :data="genders"
          >
            <template v-slot:myTemplate="{ props }">
              <formdropdownlist
                v-bind="props"
                @change="props.onChange"
                @blur="props.onBlur"
                @focus="props.onFocus"
              ></formdropdownlist>
            </template>
          </field>
        </div>
        <div class="mb-3">
          <field
            :name="'occupation'"
            :component="'myTemplate'"
            :label="'Occupation'"
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
        <kbutton type="submit" :disabled="!kendoForm.allowSubmit">
          Submit
        </kbutton>
        <kbutton type="button" @click="clear">Clear </kbutton>
      </div>
    </form-element>
  </template>
  <script>
  import { Field, FormElement } from '@progress/kendo-vue-form';
  import FormInput from './FormInput.vue';
  import FormDropDownList from './FormDropDownList.vue';
  import { Button } from '@progress/kendo-vue-buttons';
  import { ChunkProgressBar } from '@progress/kendo-vue-progressbars';
  
  const emailRegex = new RegExp(/\S+@\S+\.\S+/);
  const emailValidator = (value) =>
    emailRegex.test(value) ? '' : 'Please enter a valid email.';
  
  export default {
    components: {
      field: Field,
      'form-element': FormElement,
      forminput: FormInput,
      formdropdownlist: FormDropDownList,
      kbutton: Button,
      ChunkProgressBar,
    },
    inject: {
      kendoForm: { default: {} },
    },
    data: function () {
      return {
        emailValidator: emailValidator,
        chunks: 4,
        emptyStyles: { background: 'pink' },
        progressStyles: { background: 'lightgreen' },
        genders: ['Male', 'Female', 'Other'],
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
    computed: {
      completeness() {
        return (
          Object.keys(this.kendoForm.values).reduce(
            (sum, currentVal) =>
              sum + (!!this.kendoForm.values[currentVal] ? 1 : 0),
            0
          ) * 25
        );
      },
    },
  };
  </script>
  