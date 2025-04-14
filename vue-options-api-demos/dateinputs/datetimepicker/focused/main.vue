<template>
  <div class="example-wrapper">
    <datetimepicker :style="{ width: '260px' }" :focused-date="focusedDate" @change="handleChange" />
  </div>
</template>
<script>
import { DateTimePicker } from "@progress/kendo-vue-dateinputs";

export default {
  components: {
    datetimepicker: DateTimePicker
  },
  data() {
    return {
      focusedDate: new Date(1997, 1, 20)
    };
  },
  methods: {
    handleChange(e) {
      this.focusedDate = e.value;
    }
  }
};
</script>
