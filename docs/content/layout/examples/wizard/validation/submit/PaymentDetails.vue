<template>
  <FormElement>
    <fieldset
      class="k-form-fieldset"
      :style="{ width: '500px', margin: '0 auto' }"
    >
      <Field
        id="cardselector"
        name="cardselector"
        label="Full Name"
        :component="'myTemplate'"
      >
        <template #myTemplate="{ props }">
          <CardSelector
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <div :style="{ display: 'flex', justifyContent: 'space-between' }">
        <Field
          :style="{ width: '70%', 'padding-right': '5px' }"
          id="cardNumber"
          name="cardNumber"
          label="Card Number"
          mask="0000-0000-0000-0000"
          hint="Hint: Your Credit Card Number"
          :component="'myTemplate'"
          :validator="cardValidator"
        >
          <template #myTemplate="{ props }">
            <FormMaskedTextBox
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
        <Field
          id="cvc"
          name="cvc"
          label="CVC Number"
          mask="000"
          hint="Hint: The last 3 digits on the back of the Card"
          :component="'myTemplate'"
          :validator="cvcValidator"
        >
          <template #myTemplate="{ props }">
            <FormMaskedTextBox
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
      </div>
      <Field
        id="expireDate"
        name="expireDate"
        label="Expiration Date"
        optional
        :component="'myTemplate'"
        :validator="requiredValidator"
      >
        <template #myTemplate="{ props }">
          <FormDateInput
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <Field
        id="cardHolder"
        name="cardHolder"
        label="Card Holder Name"
        :component="'myTemplate'"
        :validator="requiredValidator"
      >
        <template #myTemplate="{ props }">
          <FormInput
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
    </fieldset>
  </FormElement>
</template>

<script setup>
import { Field, FormElement } from '@progress/kendo-vue-form';
import FormInput from './FormInput.vue';
import FormMaskedTextBox from './FormMaskedTextBox.vue';
import FormDateInput from './FormDateInput.vue';
import CardSelector from './CardSelector.vue';
import { cardValidator, cvcValidator, requiredValidator } from './validators';
</script>
