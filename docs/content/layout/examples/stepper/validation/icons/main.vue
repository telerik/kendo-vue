<template>
  <div
    :style="{
      display: 'grid',
      gridTemplateRows: 'repeat(2, 100px)',
    }"
  >
    <Stepper
      :value="step"
      @change="handleChange"
      :items="steps"
    />
    <Stepper
      :value="step"
      @change="handleChange"
      :items="steps"
      mode="labels"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Stepper } from "@progress/kendo-vue-layout";
import {
    checkCircleIcon,
    checkIcon,
    xCircleIcon,
    xIcon,
} from "@progress/kendo-svg-icons";

const step = ref(0);
const steps = ref([
    {
        label: "Account Details",
        isValid: undefined,
        successSvgIcon: checkCircleIcon,
        errorSvgIcon: xCircleIcon,
    },
    {
        label: "Personal Details",
        isValid: undefined,
        successSvgIcon: checkCircleIcon,
        errorSvgIcon: xIcon,
    },
    {
        label: "Delivery Details",
        isValid: undefined,
        successSvgIcon: checkIcon,
        errorSvgIcon: xIcon,
    },
    {
        label: "Payment Details",
        isValid: undefined,
    },
]);

function handleChange(e) {
    const isValid = step.value % 2 === 0;
    steps.value = steps.value.map((currentStep, index) => ({
        ...currentStep,
        isValid: index === step.value ? isValid : currentStep.isValid,
    }));
    step.value = e.value;
}
</script>
