<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col-sm">
        <Checkbox
          id="disabled"
          v-model="disabled"
          label="Toggle the disabled state"
          label-placement="before"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <ChunkProgressBar :value="20" :disabled="disabled" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ChunkProgressBar } from "@progress/kendo-vue-progressbars";
import { Checkbox } from "@progress/kendo-vue-inputs";

const disabled = ref(true);
</script>
