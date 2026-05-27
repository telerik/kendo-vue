<template>
  <div
    :style="{
      display: 'flex',
      flexDirection: 'column',
    }"
  >
    <Stepper :value="step" :items="steps" @change="stepperChange" />
    <Form ref="form" class="form-element" :initial-values="initialValues">
      <AccountDetails v-show="step === 0" />
      <PersonalDetails v-show="step === 1" />
      <PaymentDetails v-show="step === 2" />
    </Form>
    <div
      v-if="showErrors && isLastStep"
      class="k-messagebox k-messagebox-error"
    >
      <ErrorSummary :form-errors="formErrors" />
    </div>
    <span :style="{ marginTop: '40px' }" class="k-form-separator" />
    <div
      :style="{
        justifyContent: 'space-between',
        alignContent: 'center',
      }"
      class="k-form-buttons"
    >
      <span :style="{ alignSelf: 'center' }">
        Step {{ step + 1 }} of 3
      </span>
      <span>
        <span v-if="step !== 0">
          <KButton
            :style="{ marginRight: '16px' }"
            @click="prevButtonClick"
          >
            Previous
          </KButton>
        </span>
        <KButton theme-color="primary" @click="nextSubmitButtonClick">
          {{ isLastStep ? 'Submit' : 'Next' }}
        </KButton>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Stepper } from '@progress/kendo-vue-layout';
import { Form } from '@progress/kendo-vue-form';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import AccountDetails from './AccountDetails.vue';
import PersonalDetails from './PersonalDetails.vue';
import PaymentDetails from './PaymentDetails.vue';
import ErrorSummary from './ErrorSummary.vue';

const initialValues = {
    username: null,
    email: null,
    password: null,
    fullName: null,
    countryselected: null,
    gender: null,
    cardselector: null,
    cardNumber: null,
    cvc: null,
    expireDate: null,
    cardHolder: null,
};

const form = ref(null);
const formErrors = ref(null);
const showErrors = ref(false);
const step = ref(0);
const steps = [
    { label: 'Account Details', componentName: 'AccountDetails' },
    { label: 'Personal Details', componentName: 'PersonalDetails' },
    { label: 'Payment Details', componentName: 'PaymentDetails' },
];

const isLastStep = computed(() => steps.length - 1 === step.value);

function stepperChange(event) {
    step.value = event.value;
}

function nextSubmitButtonClick() {
    formErrors.value = form.value.form.errors;
    if (isLastStep.value) {
        showErrors.value = false;
        const formValues = form.value.form.values;
        for (const property in formValues) {
            if (formValues[property] === null || formValues[property] === '') {
                form.value.onSubmit();
                showErrors.value = true;
            }
        }
        if (!showErrors.value) {
            alert(JSON.stringify(form.value.form.values, null, 2));
        }
    } else {
        step.value += 1;
    }
}

function prevButtonClick() {
    step.value -= 1;
}
</script>

<style>
.form-element {
  display: flex;
  justify-content: center;
}
</style>
