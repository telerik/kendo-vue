<template>
  <FormElement :style="{ width: '400px' }">
    <fieldset class="k-form-fieldset">
      <Field
        :id="'countryselected'"
        :name="'countryselected'"
        :label="'Country'"
        :hint="'Hint: Only Eroupean countries'"
        :component="'myTemplate'"
        :data="countries"
        :validator="requiredValidator"
      >
        <template v-slot:myTemplate="{ props }">
          <FormAutoComplete
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          ></FormAutoComplete>
        </template>
      </Field>
      <Field
        :id="'genderseleceted'"
        :name="'genderseleceted'"
        :label="'Gender'"
        :component="'myTemplate'"
        :data="genders"
        :textField="'label'"
        :validator="requiredValidator"
      >
        <template v-slot:myTemplate="{ props }">
          <FormComboBox
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          ></FormComboBox>
        </template>
      </Field>
      <Field
        :id="'dropdownlist'"
        :name="'dropdownlist'"
        :label="'T-Shirt Size'"
        :component="'myTemplate'"
        :data="sizes"
        :validator="requiredValidator"
      >
        <template v-slot:myTemplate="{ props }">
          <FormDropDownList
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          ></FormDropDownList>
        </template>
      </Field>
      <Field
        :id="'multiselect'"
        :name="'multiselect'"
        :label="'Sports'"
        :component="'myTemplate'"
        :data="sports"
        :validator="requiredValidator"
      >
        <template v-slot:myTemplate="{ props }">
          <FormMultiSelect
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          ></FormMultiSelect>
        </template>
      </Field>
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
  </FormElement>
</template>
<script>
import { Field, FormElement } from '@progress/kendo-vue-form';
import FormAutoComplete from './FormAutoComplete.vue';
import FormComboBox from './FormComboBox.vue';
import FormDropDownList from './FormDropDownList.vue';
import FormMultiSelect from './FormMultiSelect.vue';

import { Button } from '@progress/kendo-vue-buttons';
import { countries, genders, sizes, sports } from './data';

import { requiredValidator } from './validators';

export default {
  components: {
    Field,
    FormElement,
    FormAutoComplete,
    FormComboBox,
    FormDropDownList,
    FormMultiSelect,
    kbutton: Button,
  },
  inject: {
    kendoForm: { default: {} },
  },
  data: function () {
    return {
      requiredValidator,
      genders: genders,
      countries: countries,
      sizes: sizes,
      sports: sports,
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
