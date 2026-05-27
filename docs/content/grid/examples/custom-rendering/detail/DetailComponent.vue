<template>
  <section>
    <p><strong>Descriptions:</strong> {{ dataItem.Descriptions }}</p>
  </section>
</template>

<script setup>
defineProps({
    dataItem: Object,
});
</script>
