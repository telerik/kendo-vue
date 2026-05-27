<template>
  <img class="flag" alt="Flag" :src="flagURL(dataItem)" style="width: 30px" />
</template>

<script setup>
import { images } from './images';

defineProps({
    dataItem: Object,
});

const flagURL = (dataItem) => {
    const code = dataItem.country;
    return images[code];
};
</script>
