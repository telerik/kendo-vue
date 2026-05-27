<template>
  <div>
    <div
      class="customer-photo"
      :style="{ 'background-image': photoURL(dataItem) }"
    ></div>
    <div class="customer-name">{{ dataItem.full_name }}</div>
  </div>
</template>

<script setup>
import { images } from './images';

defineProps({
    dataItem: Object,
});

const photoURL = (dataItem) => {
    const code = dataItem.img_id + dataItem.gender;
    return images[code];
};
</script>
