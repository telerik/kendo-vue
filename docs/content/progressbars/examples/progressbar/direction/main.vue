<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col-sm">
        <p>
          State: <strong>{{ direction ? "Reversed" : "Default" }}</strong>
        </p>
        <Checkbox
          id="reverse"
          @click="handleReverse"
          label="Toggle the reverse state"
          label-placement="before"
        />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-sm">
        <ProgressBar :value="50" :reverse="direction" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ProgressBar } from "@progress/kendo-vue-progressbars";
import { Checkbox } from "@progress/kendo-vue-inputs";

const direction = ref(false);

const handleReverse = (e) => {
    direction.value = e.target.checked;
};
</script>
