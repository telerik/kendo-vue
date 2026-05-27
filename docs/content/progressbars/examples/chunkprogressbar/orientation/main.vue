<template>
  <div class="row">
    <div class="col-6 example-col">
      <p>Horizontal ChunkProgressBar</p>
      <ChunkProgressBar :value="value" />
    </div>

    <div class="col-6 example-col">
      <p>Vertical ChunkProgressBar</p>
      <ChunkProgressBar :value="value" orientation="vertical" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ChunkProgressBar } from "@progress/kendo-vue-progressbars";

const value = ref(40);

const handleIncrease = () => {
    value.value = value.value < 100 ? value.value + 20 : 0;
};

onMounted(() => {
    setInterval(handleIncrease, 800);
});
</script>
