<template>
  <div>
    <span class="cloudy-custom-drawer">
      <img :src="cloudyImage" />
    </span>
    <span class="weather">
      <h2>18<span>ºC</span></h2>
      <p>Cloudy weather in Berlin</p>
    </span>
  </div>
</template>
<script>
const cloudyImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/tabstrip/cloudy.png';

export default {
  data() {
    return {
      cloudyImage
    }
  }
};
</script>
<style>
.cloudy-custom-drawer {
  display: block;
  margin: 30px auto 10px;
  width: 128px;
  height: 128px;
}
</style>
