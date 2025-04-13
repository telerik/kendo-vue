<template>
  <div
    :style="{
      display: 'flex',
      'flex-direction': 'column',
    }"
  >
    <Stepper :value="step" :items="steps" @change="stepperChange" />
    <k-form ref="form" :class="'form-element'" :initial-values="initialValues">
      <accountDetails v-show="step === 0" @isStepValid="isStepValid" />
      <personalDetails v-show="step === 1" @isStepValid="isStepValid" />
      <paymentDetails v-show="step === 2" @isStepValid="isStepValid" />
    </k-form>
    <div
      v-if="showErrors && isLastStep"
      class="k-messagebox k-messagebox-error"
    >
      <errorSummary :form-errors="formErrors" />
    </div>
    <span :style="{ 'margin-top': '40px' }" :class="'k-form-separator'" />
    <div
      :style="{
        'justify-content': 'space-between',
        'align-content': 'center',
      }"
      :class="'k-form-buttons'"
    >
      <span :style="{ 'align-self': 'center' }">
        Step {{ step + 1 }} of 3
      </span>
      <span>
        <span v-if="step !== 0">
          <k-button
            :style="{ 'margin-right': '16px' }"
            @click="prevButtonClick"
          >
            Previous
          </k-button>
        </span>
        <k-button
          :theme-color="'primary'"
          @click="nextSubmitButtonClick"
          :disabled="disableNextStep"
        >
          {{ isLastStep ? 'Submit' : 'Next' }}
        </k-button>
      </span>
    </div>
  </div>
</template>
<script>
import { Stepper } from '@progress/kendo-vue-layout';
import { Form } from '@progress/kendo-vue-form';
import { Button } from '@progress/kendo-vue-buttons';
import AccountDetails from './AccountDetails.vue';
import PersonalDetails from './PersonalDetails.vue';
import PaymentDetails from './PaymentDetails.vue';
import ErrorSummary from './ErrorSummary.vue';

export default {
  components: {
    'k-form': Form,
    Stepper,
    'k-button': Button,
    accountDetails: AccountDetails,
    personalDetails: PersonalDetails,
    paymentDetails: PaymentDetails,
    errorSummary: ErrorSummary,
  },
  data() {
    return {
      disableNextStep: true,
      initialValues: {
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
      },
      formErrors: null,
      showErrors: false,
      step: 0,
    };
  },
  computed: {
    isLastStep() {
      return this.steps.length - 1 === this.step;
    },
    isStepTwoDisabled() {
      if (this.step >= 1) {
        return true;
      }
      if (this.step < 1 && !this.disableNextStep) {
        return true;
      }
    },
    isStepThreeDisabled() {
      if (this.step >= 2) {
        return true;
      }
      if (this.step < 2 && this.step !== 0 && !this.disableNextStep) {
        return true;
      }
    },
    steps() {
      return [
        {
          label: 'Account Details',
          componentName: 'accountDetails',
        },
        {
          label: 'Personal Details',
          componentName: 'personalDetails',
          disabled: !this.isStepTwoDisabled,
        },
        {
          label: 'Payment Details',
          componentName: 'paymentDetails',
          disabled: !this.isStepThreeDisabled,
        },
      ];
    },
  },
  methods: {
    isStepValid(value) {
      this.disableNextStep = !value.disableNextStep;
    },
    stepperChange(event) {
      this.step = event.value;
    },
    nextSubmitButtonClick() {
      this.formErrors = this.$refs.form.form.errors;
      if (this.isLastStep) {
        this.showErrors = false;
        const formValues = this.$refs.form.form.values;
        for (const property in formValues) {
          if (formValues[property] === null || formValues[property] === '') {
            this.showErrors = true;
          }
        }
        if (!this.showErrors) {
          alert(JSON.stringify(this.$refs.form.form.values, null, 2));
        }
      } else {
        this.step += 1;
        this.disableNextStep = true;
      }
    },
    prevButtonClick() {
      this.step -= 1;
      this.disableNextStep = false;
    },
  },
};
</script>
<style>
.form-element {
  display: flex;
  justify-content: center;
}
</style>
