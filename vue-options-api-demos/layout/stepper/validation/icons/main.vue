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
      :mode="'labels'"
    />
  </div>
</template>
<script>
import { Stepper } from "@progress/kendo-vue-layout";
import {
  checkCircleIcon,
  checkOutlineIcon,
  xCircleIcon,
  xOutlineIcon,
  xIcon
} from "@progress/kendo-svg-icons";
export default {
  components: {
    Stepper,
  },
  data() {
    return {
      checkCircleIcon,
      xCircleIcon,
      step: 0,
      steps: [
        {
          label: "Account Details",
          isValid: undefined,
          successSvgIcon: checkCircleIcon,
          errorSvgIcon:xCircleIcon
        },
        {
          label: "Personal Details",
          isValid: undefined,
          successSvgIcon: checkCircleIcon,
          errorSvgIcon:xOutlineIcon
        },
        {
          label: "Delivery Details",
          isValid: undefined,
          successSvgIcon: checkOutlineIcon,
          errorSvgIcon:xIcon
        },
        {
          label: "Payment Details",
          isValid: undefined,
        },
      ],
    };
  },
  methods: {
    handleChange(e) {
      const isValid = this.step % 2 === 0;
      const currentSteps = this.steps.map((currentStep, index) => ({
        ...currentStep,
        isValid: index === this.step ? isValid : currentStep.isValid,
      }));
      this.steps = currentSteps;
      this.step = e.value;
    },
  },
};
</script>