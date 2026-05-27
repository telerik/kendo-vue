<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col-sm">
        <Checkbox
          id="animation"
          @change="handleAnimation"
          label="Disable the animation"
          label-placement="before"
        />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-sm">
        <ProgressBar :value="animatedValue" :animation="animation" />
      </div>
      <div class="col-sm">
        <KButton @click="changeProgress">
          {{ animatedValue === 0 ? "Start progress" : "Reset progress" }}
        </KButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ProgressBar } from "@progress/kendo-vue-progressbars";
import { Checkbox } from "@progress/kendo-vue-inputs";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const animation = ref(true);
const animatedValue = ref(0);

const handleAnimation = (e) => {
    animation.value = !e.value;
};

const changeProgress = () => {
    animatedValue.value = animatedValue.value === 100 ? 0 : 100;
};
</script>
