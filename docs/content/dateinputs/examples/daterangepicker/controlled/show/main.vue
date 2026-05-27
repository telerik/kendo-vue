<template>
  <div class="row">
    <div class="col-xs-12 col-md-12 example-col" style="margin-bottom: 270px">
      <p>Controlled DateRangePicker</p>
      <DateRangePicker :show="showPopup" />&nbsp;
      <KButton :theme-color="'primary'" @click="handleChange">Toggle</KButton>
    </div>
    <div class="col-xs-12 col-md-12 example-col">
      <p>Always shown</p>
      <DateRangePicker :show="true" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const showPopup = ref(true);

const handleChange = () => {
    showPopup.value = !showPopup.value;
};
</script>
