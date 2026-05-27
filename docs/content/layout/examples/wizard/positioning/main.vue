<template>
  <p>Change content position:</p>
  <DropDownList
    :style="{ width: '220px' }"
    :data-items="['Left', 'Right', 'Down']"
    :value="position"
    @change="handlePositionChange"
  />
  <hr />
  <div :style="wizardStyles">
    <Stepper
      :value="step"
      :items="steps"
      @change="stepperChange"
      :orientation="stepperOrientation"
      :style="{ margin: '30px', height: '100%' }"
    />
    <br />
    <div>
      <KForm
        ref="form"
        :class="'form-element'"
        :initial-values="initialValues"
      >
        <personalDetails v-show="step === 0" />
        <accountDetails v-show="step === 1" />
        <register v-show="step === 2" />
      </KForm>
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
            <KButton
              :style="{ 'margin-right': '16px' }"
              @click="prevButtonClick"
            >
              Previous
            </KButton>
          </span>
          <KButton :theme-color="'primary'" @click="nextSubmitButtonClick">
            {{ isLastStep ? 'Register' : 'Next' }}
          </KButton>
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { Stepper } from '@progress/kendo-vue-layout';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { Form as KForm } from '@progress/kendo-vue-form';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import PersonalDetails from './PersonalDetails.vue';
import AccountDetails from './AccountDetails.vue';
import Register from './Register.vue';

const form = ref(null);
const position = ref('Down');
const stepperOrientation = ref('horizontal');
const wizardStyles = ref({
    display: 'flex',
    'justify-content': 'center',
    'flex-direction': 'column',
});
const initialValues = {
    firstName: 'John',
    lastName: 'Doe',
    username: 'john',
    email: 'john.doe@email.com',
    password: 'password123',
};
const step = ref(0);
const steps = [
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
];

const isLastStep = computed(() => steps.length - 1 === step.value);

function stepperChange(event) {
    step.value = event.value;
}

function nextSubmitButtonClick() {
    if (isLastStep.value) {
        let showErrors = false;
        const formValues = form.value.form.values;
        for (const property in formValues) {
            if (formValues[property] === null || formValues[property] === '') {
                showErrors = true;
            }
        }
        if (!showErrors) {
            alert(JSON.stringify(form.value.form.values, null, 2));
        }
    } else {
        step.value += 1;
    }
}

function prevButtonClick() {
    step.value -= 1;
}

function handlePositionChange(e) {
    const value = e.value;
    position.value = value;

    if (value === 'Down') {
        wizardStyles.value = {
            display: 'flex',
            'justify-content': 'center',
            'flex-direction': 'column',
        };
        stepperOrientation.value = 'horizontal';
    } else if (value === 'Right') {
        wizardStyles.value = {
            display: 'flex',
            'justify-content': 'center',
            'flex-direction': 'row',
        };
        stepperOrientation.value = 'vertical';
    } else if (value === 'Left') {
        wizardStyles.value = {
            display: 'flex',
            'justify-content': 'center',
            'flex-direction': 'row-reverse',
        };
        stepperOrientation.value = 'vertical';
    }
}
</script>
<style>
.form-element {
  display: flex;
  justify-content: center;
}
</style>
