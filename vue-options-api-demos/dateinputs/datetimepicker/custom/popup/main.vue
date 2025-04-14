<template>
  <div :style="{ textAlign: 'center' }">
    <datetimepicker :style="{ width: '260px' }" ref="datepicker" :popup="customPopup">
      <template v-slot:myTemplate="{ props }">
        <custom :show="props.show" />
      </template>
    </datetimepicker>
  </div>
</template>
<script>
import { DateTimePicker } from "@progress/kendo-vue-dateinputs";
import CustomPopup from "./CustomPopup.vue";

export default {
  components: {
    datepicker: DateTimePicker
  },
  data: function() {
    return {
      customPopup: CustomPopup
    };
  }
};
</script>
