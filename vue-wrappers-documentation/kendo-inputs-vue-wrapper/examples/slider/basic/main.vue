<template>
   <kendo-slider v-model="value"
				  :orientation="'vertical'"
				  :min="10"
				  :max="50"
				  :small-step="1"
				  :large-step="10">
	</kendo-slider>
</template>
<script>
import { Slider } from '@progress/kendo-inputs-vue-wrapper';
export default {
  components: {
    'kendo-slider': Slider,
  },
   data () {
        return {
            value: "20"
        }
    }
}
</script>
