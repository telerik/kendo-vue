<template>
  <div
    :style="{
      display: 'flex',
      'flex-direction': 'column',
    }"
  >
    <Stepper :value="step" :items="steps" @change="stepperChange" />
    <br />
    <Form ref="form" class="form-element" :initial-values="initialValues">
      <PersonalDetails v-show="step === 0" />
      <AccountDetails v-show="step === 1" />
      <Register v-show="step === 2" />
    </Form>
    <span :style="{ 'margin-top': '40px' }" class="k-form-separator" />
    <div
      :style="{
        'justify-content': 'space-between',
        'align-content': 'center',
      }"
      class="k-form-buttons"
    >
      <span :style="{ 'align-self': 'center' }">
        Step {{ step + 1 }} of 3
      </span>
      <span>
        <span v-if="step !== 0">
          <KButton
            :style="{ 'margin-right': '16px' }"
            @click="prevButtonClick"
          >
            Previous
          </KButton>
        </span>
        <KButton theme-color="primary" @click="nextSubmitButtonClick">
          {{ isLastStep ? 'Register' : 'Next' }}
        </KButton>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Stepper } from '@progress/kendo-vue-layout';
import { Form } from '@progress/kendo-vue-form';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import AccountDetails from './AccountDetails.vue';
import PersonalDetails from './PersonalDetails.vue';
import Register from './Register.vue';

const form = ref(null);
const step = ref(0);
const initialValues = {
    firstName: 'John',
    lastName: 'Doe',
    username: 'john',
    email: 'john.doe@email.com',
    password: 'password123',
};
const steps = [
    { label: 'User Data', componentName: 'accountDetails' },
    { label: 'Login Data', componentName: 'personalDetails' },
    { label: 'Register', componentName: 'paymentDetails' },
];
const isLastStep = computed(() => steps.length - 1 === step.value);

function stepperChange(event) {
    step.value = event.value;
}

function nextSubmitButtonClick() {
    const formErrors = ref(null);
    const showErrors = ref(false);
    const formValues = ref(null);

    formErrors.value = form.value.form.errors;
    if (isLastStep.value) {
        showErrors.value = false;
        formValues.value = form.value.form.values;
        for (const property in formValues.value) {
            if (formValues.value[property] === null || formValues.value[property] === '') {
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
