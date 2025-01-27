<template>
   <kendo-slider v-on:slide="onSlide"></kendo-slider>
</template>
<script>
import { Slider } from '@progress/kendo-inputs-vue-wrapper';
export default {
  components: {
    'kendo-slider': Slider,
  },
  methods: {
		onSlide (e) {
			console.log(e.value);
		}
	}
}
</script>
