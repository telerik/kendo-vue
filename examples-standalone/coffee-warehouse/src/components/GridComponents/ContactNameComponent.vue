<template>
  <div
    class="customer-photo"
    :style="{ 'background-image': photoURL(dataItem) }"
  ></div>
  <div class="customer-name">{{ dataItem.full_name }}</div>
</template>

<script>
import { images } from "../../assets/images";

export default {
  props: {
    dataItem: Object,
  },
  methods: {
    photoURL(dataItem) {
      const code = dataItem.img_id + dataItem.gender;
      const image = images;
      return image[code];
    },
  },
};
</script>
