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
        :id="'fullName'"
        :name="'fullName'"
        :label="'Full Name'"
        :component="'myTemplate'"
        :validator="nameValidator"
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
        :id="'countryselected'"
        :name="'countryselected'"
        :label="'Country'"
        :hint="'Hint: Only European countries.'"
        :component="'myTemplate'"
        :data="countries"
        :validator="requiredValidator"
      >
        <template v-slot:myTemplate="{ props }">
          <formautocomplete
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          ></formautocomplete>
        </template>
      </field>
      <field
        :id="'gender'"
        :name="'gender'"
        :label="'Gender'"
        :layout="'horizontal'"
        :component="'myTemplate'"
        :data-items="genders"
        :validator="requiredValidator"
      >
        <template v-slot:myTemplate="{ props }">
          <formradiogroup
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          ></formradiogroup>
        </template>
      </field>
      <field
        :id="'about'"
        :name="'about'"
        :label="'About'"
        :optional="true"
        :component="'myTemplate'"
      >
        <template v-slot:myTemplate="{ props }">
          <formtextarea
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          ></formtextarea>
        </template>
      </field>
    </fieldset>
  </form-element>
</template>
<script>
import { Field, FormElement } from '@progress/kendo-vue-form';
import FormInput from './FormInput.vue';
import FormAutoComplete from './FormAutoComplete.vue';
import FormRadioGroup from './FormRadioGroup.vue';
import FormTextArea from './FormTextArea.vue';
import { Button } from '@progress/kendo-vue-buttons';
import { requiredValidator, nameValidator } from './validators';

export default {
  components: {
    field: Field,
    'form-element': FormElement,
    forminput: FormInput,
    formautocomplete: FormAutoComplete,
    formradiogroup: FormRadioGroup,
    formtextarea: FormTextArea,
    kbutton: Button,
  },
  inject: {
    kendoForm: { default: {} },
  },
  data: function () {
    return {
      requiredValidator,
      nameValidator,
      genders: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
      ],
      countries: [
        'Albania',
        'Andorra',
        'Armenia',
        'Austria',
        'Azerbaijan',
        'Belarus',
        'Belgium',
        'Bosnia & Herzegovina',
        'Bulgaria',
        'Croatia',
        'Cyprus',
        'Czech Republic',
        'Denmark',
        'Estonia',
        'Finland',
        'France',
        'Georgia',
        'Germany',
        'Greece',
        'Hungary',
        'Iceland',
        'Ireland',
        'Italy',
        'Kosovo',
        'Latvia',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Macedonia',
        'Malta',
        'Moldova',
        'Monaco',
        'Montenegro',
        'Netherlands',
        'Norway',
        'Poland',
        'Portugal',
        'Romania',
        'Russia',
        'San Marino',
        'Serbia',
        'Slovakia',
        'Slovenia',
        'Spain',
        'Sweden',
        'Switzerland',
        'Turkey',
        'Ukraine',
        'United Kingdom',
        'Vatican City',
      ],
    };
  },
  computed: {
    disableNextStep() {
      const errors = this.kendoForm.errors;
      return (
        errors.fullName === '' &&
        errors.gender == '' &&
        errors.countryselected == ''
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
