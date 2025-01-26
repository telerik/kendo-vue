<template>
 <kendo-colorpalette :palette="palette"
                        :tile-size="'40'"></kendo-colorpalette>
</template>
<script>
import { ColorPalette } from '@progress/kendo-inputs-vue-wrapper';
export default {
  components: {
    'kendo-colorpalette': ColorPalette
  },
   data: function() {
        return {
            palette: [ "#ddd1c3", "#d2d2d2", "#746153", "#3a4c8b", "#ffcc33", "#fb455f", "#ac120f" ]
        }
    }
}
</script>
