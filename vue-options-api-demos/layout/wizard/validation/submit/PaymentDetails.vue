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
        :id="'cardselector'"
        :name="'cardselector'"
        :label="'Full Name'"
        :component="'myTemplate'"
      >
        <template v-slot:myTemplate="{ props }">
          <cardselector
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </field>
      <div :style="{ display: 'flex', justifyContent: 'space-between' }">
        <field
          :style="{ width: '70%', 'padding-right': '5px' }"
          :id="'cardNumber'"
          :name="'cardNumber'"
          :label="'Card Number'"
          :mask="'0000-0000-0000-0000'"
          :hint="'Hint: Your Credit Card Number'"
          :component="'myTemplate'"
          :validator="cardValidator"
        >
          <template v-slot:myTemplate="{ props }">
            <formmaskedtextbox
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            ></formmaskedtextbox>
          </template>
        </field>
        <field
          :id="'cvc'"
          :name="'cvc'"
          :label="'CVC Number'"
          :mask="'000'"
          :hint="'Hint: The last 3 digids on the back of the Card'"
          :component="'myTemplate'"
          :validator="cvcValidator"
        >
          <template v-slot:myTemplate="{ props }">
            <formmaskedtextbox
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            ></formmaskedtextbox>
          </template>
        </field>
      </div>
      <field
        :id="'expireDate'"
        :name="'expireDate'"
        :label="'Expiration Date'"
        :optional="true"
        :component="'myTemplate'"
        :validator="requiredValidator"
      >
        <template v-slot:myTemplate="{ props }">
          <formdateinput
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          ></formdateinput>
        </template>
      </field>
      <field
        :id="'cardHolder'"
        :name="'cardHolder'"
        :label="'Card Holder Name'"
        :component="'myTemplate'"
        :validator="requiredValidator"
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
import FormAutoComplete from './FormAutoComplete.vue';
import FormRadioGroup from './FormRadioGroup.vue';
import FormTextArea from './FormTextArea.vue';
import CardSelector from './CardSelector.vue';
import FormMaskedTextBox from './FormMaskedTextBox.vue';
import FormDateInput from './FormDateInput.vue';
import { Button } from '@progress/kendo-vue-buttons';
import { cardValidator, cvcValidator, requiredValidator } from './validators';

export default {
  components: {
    field: Field,
    'form-element': FormElement,
    forminput: FormInput,
    formautocomplete: FormAutoComplete,
    formradiogroup: FormRadioGroup,
    formtextarea: FormTextArea,
    formmaskedtextbox: FormMaskedTextBox,
    cardselector: CardSelector,
    formdateinput: FormDateInput,
    kbutton: Button,
  },
  inject: {
    kendoForm: { default: {} },
  },
  data: function () {
    return {
      cardValidator,
      cvcValidator,
      requiredValidator,
    };
  },
};
</script>
