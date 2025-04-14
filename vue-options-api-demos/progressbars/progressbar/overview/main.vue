<template>
  <div>
    <div class="text-center">
      <kbutton :theme-color="'primary'" @click="start">start</kbutton>
      <kbutton @click="stop">stop</kbutton>
      <kbutton @click="reset">reset</kbutton>
    </div>
    <br />
    <div class="text-center">
      <ProgressBar :value="value" />
    </div>
  </div>
</template>

<script>
import { ProgressBar } from "@progress/kendo-vue-progressbars";
import { Button } from '@progress/kendo-vue-buttons';

export default {
  components: {
    ProgressBar,
      'kbutton': Button
  },
  data() {
    return {
      value: 0,
      currentInterval: null,
    };
  },
  methods: {
    start(e) {
      this.currentInterval = setInterval(() => {
        if (this.value < 100) {
          this.value = this.value + 1;
        }
      }, 50);
    },
    stop(e) {
      clearInterval(this.currentInterval);
      this.clearInterval = null;
    },
    reset(e) {
      this.value = 0;
      clearInterval(this.currentInterval);
      this.clearInterval = null;
    },
  },
};
</script>
