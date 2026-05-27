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

<script setup>
import { ref } from "vue";
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";

const value = ref({
    start: new Date(2018, 8, 5),
    end: new Date(2018, 8, 12),
});

function handleChange(event) {
    value.value = event.value;
}
</script>
