<template>
  <div>
    <span :style="{ color: dataItem.color }">{{ dataItem.label.text }}</span>
    <span> ({{ dataItem.value }} Units)</span>
  </div>
</template>

<script setup>
defineProps({
    dataItem: Object
});
</script>
