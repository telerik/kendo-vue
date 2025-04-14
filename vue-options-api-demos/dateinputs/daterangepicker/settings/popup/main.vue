<template>
<div
      class="example-wrapper"
      :style="{
        textAlign: 'center'
      }"
    >
      <DateRangePicker  :popup-settings="popupSettings"  />
    </div>
</template>

<script>
import { DateRangePicker } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
       DateRangePicker
    },
    data() {
      return {
        popupSettings: {
          animate: false,
          anchorAlign: {
            horizontal: "center",
            vertical: "bottom",
          },
          popupAlign: {
            horizontal: "center",
            vertical: "top",
          },
        }
      }
    }
};
</script>

