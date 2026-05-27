<template>
  <div class="container" dir="rtl">
    <div class="row">
      <div class="col-sm mb-2">ProgressBar</div>
      <div class="col-sm mb-2">Chunk ProgressBar</div>
    </div>
    <div class="row">
      <div class="col-sm">
        <ProgressBar :value="value" />
      </div>
      <div class="col-sm">
        <ChunkProgressBar :value="value" :chunk-count="chunks" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <div>
          Value: <strong>{{ value }}</strong>
        </div>
        <div>
          Chunk count: <strong>{{ chunks }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ProgressBar, ChunkProgressBar } from "@progress/kendo-vue-progressbars";

const value = ref(55);
const chunks = ref(20);
</script>
