<template>
  <div>
    <Stepper :value="step" @change="handleChange" :items="items" />
    <router-view />
    <span :style="{ 'margin-top': '40px' }" class="k-form-separator" />
    <div
      :style="{
        'justify-content': 'space-between',
        'align-content': 'center',
      }"
      class="k-form-buttons"
    >
      <span :style="{ 'align-self': 'center' }">Step {{ step + 1 }} of 3</span>
      <span>
        <span v-if="step !== 0">
          <KButton :style="{ 'margin-right': '16px' }" @click="prevButtonClick">Previous</KButton>
        </span>
        <KButton
          theme-color="primary"
          @click="nextSubmitButtonClick"
        >{{ isLastStep ? 'Register' : 'Next' }}</KButton>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { Stepper } from "@progress/kendo-vue-layout";
import { useRouter } from 'vue-router';

const router = useRouter();
const step = ref(0);

const items = [
    {
        label: "Home",
        data: {
            path: "/layout/wizard/routing/overview",
        },
    },
    {
        label: "Details",
        data: {
            path: "/layout/wizard/routing/user-details",
        },
    },
    {
        label: "Register",
        data: {
            path: "/layout/wizard/routing/register",
        },
    },
];

const isLastStep = computed(() => items.length - 1 === step.value);

function handleChange(e) {
    step.value = e.value;
    router.push(items[e.value].data);
}

function nextSubmitButtonClick() {
    if (isLastStep.value) {
        alert("Registration completed!");
    } else {
        step.value += 1;
        router.push(items[step.value].data);
    }
}

function prevButtonClick() {
    step.value -= 1;
    router.push(items[step.value].data);
}

router.push(items[0].data);
</script>

<style>
</style>
