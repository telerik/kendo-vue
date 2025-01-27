<template>
    <kendo-slider :value="value"
									:min="0"
									:max="100">
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
           value: 25
        }
    }
}
</script>
