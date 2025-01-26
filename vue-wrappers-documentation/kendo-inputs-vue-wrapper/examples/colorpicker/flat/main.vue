<template>
 <kendo-flatcolorpicker v-model="color"></kendo-flatcolorpicker>
</template>
<script>
import { FlatColorPicker } from '@progress/kendo-inputs-vue-wrapper';
export default {
  components: {
    'kendo-flatcolorpicker': FlatColorPicker
  },
   data: function() {
        return {
             color: ""
        }
    }
}
</script>
