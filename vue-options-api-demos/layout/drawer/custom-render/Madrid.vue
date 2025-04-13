<template>
  <div>
    <span class="sunny-custom-drawer">
      <img :src="sunnyImage" />
    </span>
    <span class="weather">
      <h2>31<span>ºC</span></h2>
      <p>Sunny weather in Madrid</p>
    </span>
  </div>
</template>
<script>
const sunnyImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/tabstrip/sunny.png';

export default {
  data() {
    return {
      sunnyImage
    }
  }
};
</script>

<style>
.sunny-custom-drawer {
  display: block;
  margin: 30px auto 10px;
  width: 128px;
  height: 128px;
}
</style>
