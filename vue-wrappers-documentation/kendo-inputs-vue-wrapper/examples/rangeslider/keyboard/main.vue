<template>
   <kendo-rangeslider :selection-start="start"
	                   	 :selection-end="end"
											 :min="0"
											 :max="100">
		</kendo-rangeslider>
</template>
<script>
import { RangeSlider } from '@progress/kendo-inputs-vue-wrapper';
export default {
  components: {
    'kendo-rangeslider': RangeSlider,
  },
   data: function() {
        return {
            start: 25,
			      end: 75
        }
    }
}
</script>
