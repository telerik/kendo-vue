<template>
  <div class="row">
    <div class="col-xs-12 col-md-12 example-col" style="margin-bottom: 270px">
      <p>Controlled DateRangePicker</p>
      <DateRangePicker :show="showPopup" />&nbsp;
      <kbutton :theme-color="'primary'" @click="handleChange">Toggle</kbutton>
    </div>
    <div class="col-xs-12 col-md-12 example-col">
      <p>Always shown</p>
      <DateRangePicker :show="true" />
    </div>
  </div>
</template>

<script>
import { Checkbox } from "@progress/kendo-vue-inputs";
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";
import { Button } from '@progress/kendo-vue-buttons';

export default {
  components: {
    DateRangePicker,
    checkbox: Checkbox,
      'kbutton': Button
  },
  data() {
    return {
      showPopup: true,
    };
  },
  methods: {
    handleChange() {
      this.showPopup = !this.showPopup;
    },
  },
};
</script>