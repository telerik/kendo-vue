<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col-sm">
        <p>
          State:
          <strong>{{ isProgressBarReversed ? "Reversed" : "Default" }}</strong>
        </p>
        <Checkbox
          id="reverse"
          v-model="isProgressBarReversed"
          label="Toggle the reverse state"
          label-placement="before"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <ChunkProgressBar :value="value" :reverse="isProgressBarReversed" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ChunkProgressBar } from "@progress/kendo-vue-progressbars";
import { Checkbox } from "@progress/kendo-vue-inputs";

const value = ref(40);
const isProgressBarReversed = ref(false);

const handleIncrease = () => {
    value.value = value.value < 100 ? value.value + 20 : 0;
};

onMounted(() => {
    setInterval(handleIncrease, 800);
});
</script>
