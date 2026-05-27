<template>
  <div>
    <ChunkProgressBar :value="value" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ChunkProgressBar } from "@progress/kendo-vue-progressbars";

const value = ref(0);

const handleIncrease = () => {
    value.value = value.value < 100 ? value.value + 20 : 0;
};

onMounted(() => {
    setInterval(handleIncrease, 800);
});
</script>
