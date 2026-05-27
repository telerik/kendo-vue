<template>
  <div class="example-wrapper">
    <div class="example-config">
      <p>
        The value is: <br />
        start: {{ value.start }} <br />
        end: {{ value.end }}
      </p>
    </div>
    <DateRangePicker
      :allow-reverse="true"
      @change="handleChange"
      :show="true"
    />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";

const value = reactive({
    start: null,
    end: null,
});

function handleChange(event) {
    value.start = event.value.start;
    value.end = event.value.end;
}
</script>
