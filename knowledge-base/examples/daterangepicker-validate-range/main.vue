<template>
  <div class="example-wrapper">
    <DateRangePicker
      :valid="rangePickerValidation"
      @change="rangePickerChange"
    />
    <div v-if="!rangePickerValidation">
      <span class="k-text-error" style="font-style: italic; font-size: 10px">
        * Start date should be before End date
      </span>
    </div>
  </div>
</template>

<script>
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";

export default {
  name: "App",
  components: {
    DateRangePicker,
  },
  data() {
    return {
      rangePickerValidation: true,
    };
  },
  methods: {
    rangePickerChange(ev) {
      this.rangePickerValidation = ev.value.start < ev.value.end;
    },
  },
};
</script>
