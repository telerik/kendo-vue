<template>
  <img class="flag" :src="flagURL(dataItem)" style="width: 30px" />
</template>

<script>
import { images } from './images';

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
