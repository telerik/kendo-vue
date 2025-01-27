<template>
       <kendo-rangeslider :min="0"
					   :max="1"
					   :large-step="0.1"
					   :small-step="0.05"
					   :orientation="'vertical'"
					   :tooltip-format="'{0:p}'">
	</kendo-rangeslider>
</template>
<script>
import { RangeSlider } from '@progress/kendo-inputs-vue-wrapper';
export default {
  components: {
    'kendo-rangeslider': RangeSlider,
  }
}
</script>
