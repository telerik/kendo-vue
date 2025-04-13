<template>
  <div class="container">
    <div class="row">
      <div class="col-sm mb-2">ProgressBar</div>
    </div>
    <div class="row">
      <div class="col-sm">
        <ProgressBar :value="value" :dir="'rtl'" />
      </div>
    </div>
  </div>
</template>

<script>
import { ProgressBar } from "@progress/kendo-vue-progressbars";

export default {
  components: {
    ProgressBar,
  },
  data() {
    return {
      value: 55,
    };
  },
};
</script>
