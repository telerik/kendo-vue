<template>
 <kendo-colorpicker v-model="color">ColorPicker</kendo-colorpicker>
	color: <span v-text="color"></span>
</template>
<script>
import { ColorPicker } from '@progress/kendo-inputs-vue-wrapper';
export default {
  components: {
    'kendo-colorpicker': ColorPicker
  },
   data: function() {
        return {
            color: ""
        }
    }
}
</script>
