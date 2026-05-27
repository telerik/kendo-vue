<template>
  <div>
    <div class="mb-5">
      <Stepper
        class="emoji-stepper"
        :value="value"
        @change="handleChange"
        :items="stepsWithEmoji"
        item="StepWithEmoji"
      >
        <template #StepWithEmoji="{ props }">
          <Step v-bind="props">
            <span class="k-step-indicator" aria-hidden="true">
              <span class="emoji">{{ props.emoji }}</span>
            </span>
            <span class="k-step-label">
              <span class="k-step-text">{{ props.label }}</span>
            </span>
          </Step>
        </template>
      </Stepper>
    </div>
    <div class="mb-1">
      <Stepper
        class="custom-stepper"
        :value="value"
        @change="handleChange"
        :items="customSteps"
        item="CustomStep"
      >
        <template #CustomStep="{ props }">
          <Step v-bind="props">
            <div class="custom-step">
              <SvgIcon :icon="props.svgIcon" />
            </div>
            <span class="step-label">{{ props.label }}</span>
          </Step>
        </template>
      </Stepper>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Stepper, Step } from "@progress/kendo-vue-layout";
import { SvgIcon } from "@progress/kendo-vue-common";
import { gearIcon, zoomInIcon, eyeIcon, fileAddIcon } from "@progress/kendo-svg-icons";

const value = ref(2);
const stepsWithEmoji = ref([
    { label: "Happy", emoji: "😀" },
    { label: "Angry", emoji: "😠" },
    { label: "Cool", emoji: "😎" },
    { label: "Love", emoji: "😍" },
]);

const customSteps = ref([
    { label: "Configuration", svgIcon: gearIcon },
    { label: "Sizing", svgIcon: zoomInIcon },
    { label: "Preview", svgIcon: eyeIcon },
    { label: "Submit", svgIcon: fileAddIcon },
]);

const handleChange = (e) => {
    value.value = e.value;
};
</script>

<style>
.emoji-stepper .emoji {
  height: 100%;
  line-height: 30px;
  font-size: 24px;
}
.custom-stepper .k-progressbar {
  height: 4px;
  top: 18px;
}
.custom-stepper .k-progressbar .k-state-selected {
  background: linear-gradient(to right, #ffc837, #ff8008);
}
.custom-step {
  width: 40px;
  height: 40px;
  border: 2px solid #ff8008;
  border-radius: 10px;
  background-clip: padding-box;
  box-sizing: border-box;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
.k-step-done .custom-step {
  background-image: radial-gradient(circle at center, #ffc837 10px, #ff8008);
}
.k-step:not(.k-step-done):not(.k-step-current) .custom-step {
  border: 2px solid #ccc;
}
.k-step-link .k-icon {
  font-size: 24px;
  color: #000;
}
.k-step-link .step-label {
  color: #75240d;
  font-weight: bold;
}
</style>
