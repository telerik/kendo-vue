<template>
  <div class="row">
    <div class="example-config col-xs-12 col-md-12 example-col">
      <p>
        The range is: <br />
        start: {{ value.start }}
        <br />
        end: {{ value.end }}
      </p>
    </div>
    <div class="col-xs-12 col-md-12 example-col">
      <p>Controlled DateRangePicker</p>
      <DateRangePicker :value="value" @change="handleChange" />
    </div>
  </div>
</template>

<script>
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";

export default {
  components: {
    DateRangePicker,
  },
  data() {
    return {
      value: {
        start: new Date(2018, 8, 5),
        end: new Date(2018, 8, 12),
      },
    };
  },
  methods: {
    handleChange(event) {
      this.value = event.value;
    },
  },
};
</script>
