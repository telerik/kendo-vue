<template>
  <ChunkProgressBar :value="value" :style="{ width: '450px' }" />
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
