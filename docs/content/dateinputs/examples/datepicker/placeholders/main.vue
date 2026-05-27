<template>
  <div class="row example-wrapper" :style="{ minHeight: 450 }">
    <div class="col-xs-12 col-md-6 example-col">
      <p>Full-length format description:</p>
      <DatePicker :style="{ width: '230px' }" :format-placeholder="'wide'" />
    </div>

    <div class="col-xs-12 col-md-6 example-col">
      <p>Narrow-length format description:</p>
      <DatePicker :style="{ width: '230px' }" :format-placeholder="'narrow'" />
    </div>

    <div class="col-xs-12 col-md-6 example-col">
      <p>Short-length format description:</p>
      <DatePicker :style="{ width: '230px' }" :format-placeholder="'short'" />
    </div>

    <div class="col-xs-12 col-md-6 example-col">
      <p>Display defined format:</p>
      <DatePicker
        :style="{ width: '230px' }"
        :format="'MM/dd/yyyy'"
        :format-placeholder="'formatPattern'"
      />
    </div>

    <div class="col-xs-12 col-md-6 example-col">
      <p>Custom defined format descriptions</p>
      <DatePicker
        :style="{ width: '230px' }"
        :format="'G'"
        :format-placeholder="customFormatPlaceholder"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DatePicker } from "@progress/kendo-vue-dateinputs";

const customFormatPlaceholder = ref({
    year: "y",
    month: "M",
    day: "d",
});
</script>
