<template>
  <img class="flag" :src="flagURL(dataItem)" style="width: 30px" alt="" />
</template>

<script>
import { images } from '../../assets/images';

export default {
  props: {
    dataItem: Object,
  },
  methods: {
    flagURL(dataItem) {
      const code = dataItem.country;
      const image = images;

      return image[code];
    },
  },
};
</script>
