<template>
  <div class="row">
    <div class="col-6">
      <p>Simple Steps</p>
      <Stepper :value="value" @change="handleChange" :items="steps" />
    </div>
    <div class="col-6">
      <p>Steps with icons</p>
      <Stepper :value="value" @change="handleChange" :items="icons" />
    </div>
    <div class="col-6 pt-5">
      <p>Steps with labels</p>
      <Stepper :value="value" @change="handleChange" :items="stepsWithLabel" />
    </div>
    <div class="col-6 pt-5">
      <p>Steps with icons and labels</p>
      <Stepper :value="value" @change="handleChange" :items="iconsWithLabel" />
    </div>
    <div class="col-6 pt-5">
      <p>Steps with custom text</p>
      <Stepper :value="value" @change="handleChange" :items="customText" />
    </div>
    <div class="col-6 pt-5">
      <p>Labels Only</p>
      <Stepper
        :value="value"
        @change="handleChange"
        mode="labels"
        :items="labelOnly"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Stepper } from "@progress/kendo-vue-layout";
import { lockIcon, userIcon, trackChangesIcon } from "@progress/kendo-svg-icons";

const value = ref(1);
const steps = ref([{}, {}, {}]);
const stepsWithLabel = ref([
    { label: "Step 1" },
    { label: "Step 2" },
    { label: "Step 3" },
]);
const icons = ref([
    { svgIcon: lockIcon },
    { svgIcon: userIcon },
    { svgIcon: trackChangesIcon },
]);
const iconsWithLabel = ref([
    { svgIcon: lockIcon, label: "Step 1" },
    { svgIcon: userIcon, label: "Step 2" },
    { svgIcon: trackChangesIcon, label: "Step 3" },
]);
const customText = ref([
    { text: "A" },
    { text: "B" },
    { text: "C" },
]);
const labelOnly = ref([
    { label: "Step 1" },
    { label: "Step 2" },
    { label: "Step 3" },
]);

function handleChange(e) {
    value.value = e.value;
}
</script>
