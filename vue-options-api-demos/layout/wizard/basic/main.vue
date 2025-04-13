<template>
  <div
    :style="{
      display: 'flex',
      'flex-direction': 'column',
    }"
  >
    <Stepper :value="step" :items="steps" @change="stepperChange" />
    <br />
    <k-form ref="form" :class="'form-element'" :initial-values="initialValues">
      <personalDetails v-show="step === 0" />
      <accountDetails v-show="step === 1" />
      <register v-show="step === 2" />
    </k-form>
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
        <k-button :theme-color="'primary'" @click="nextSubmitButtonClick">
          {{ isLastStep ? 'Register' : 'Next' }}
        </k-button>
      </span>
    </div>
  </div>
</template>
<script>
import { Stepper } from '@progress/kendo-vue-layout';
import { Form } from '@progress/kendo-vue-form';
import { Button } from '@progress/kendo-vue-buttons';
import PersonalDetails from './PersonalDetails.vue';
import AccountDetails from './AccountDetails.vue';
import Register from './Register.vue';

export default {
  components: {
    'k-form': Form,
    Stepper,
    'k-button': Button,
    accountDetails: AccountDetails,
    personalDetails: PersonalDetails,
    register: Register,
  },
  data() {
    return {
      disableNextStep: true,
      initialValues: {
        firstName: 'John',
        lastName: 'Doe',
        username: 'john',
        email: 'john.doe@email.com',
        password: 'password123',
      },
      step: 0,
      steps: [
        {
          label: 'User Data',
          componentName: 'accountDetails',
        },
        {
          label: 'Login Data',
          componentName: 'personalDetails',
        },
        {
          label: 'Register',
          componentName: 'paymentDetails',
        },
      ],
    };
  },
  computed: {
    isLastStep() {
      return this.steps.length - 1 === this.step;
    },
  },
  methods: {
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
      }
    },
    prevButtonClick() {
      this.step -= 1;
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
