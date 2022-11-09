<template>
    <div
      :style="{
        display: 'grid',
        gridTemplateRows: 'repeat(2, 100px)',
      }"
    >
      <Stepper :value="step" @change="handleChange" :items="steps" />
      <Stepper
        :value="step"
        @change="handleChange"
        :items="steps"
        :mode="'labels'"
      />
    </div>
</template>
<script>
import {
 Stepper
    } from '@progress/kendo-vue-layout';

export default {
    components: {
       Stepper
    },
    data () {
      return {
        step: 0,
        steps: [
                {
                label: "Account Details",
                isValid: undefined,
                },
                {
                label: "Personal Details",
                isValid: undefined,
                },
                {
                label: "Delivery Details",
                isValid: undefined,
                },
                {
                label: "Payment Details",
                isValid: undefined,
                },
            ]
      };
    },
    methods: {
        handleChange (e) {
            const isValid = this.step % 2 === 0;
            const currentSteps = this.steps.map((currentStep, index) => ({
                ...currentStep,
                isValid: index === this.step ? isValid : currentStep.isValid,
            }));
            this.steps = currentSteps;
            this.step = e.value;
        }
    }
};
</script>
