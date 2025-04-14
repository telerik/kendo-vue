<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col-sm">
        <Checkbox
          :id="'animation'"
          @change="handleAnimation"
          :label="'Disable the animation'"
          :label-placement="'before'"
        />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-sm">
        <ProgressBar :value="animatedValue" :animation="animation" />
      </div>
      <div class="col-sm">
        <kbutton @click="changeProgress">
          {{ animatedValue === 0 ? "Start progress" : "Reset progress" }}
        </kbutton>
      </div>
    </div>
  </div>
</template>

<script>
import { ProgressBar } from "@progress/kendo-vue-progressbars";
import { Checkbox } from "@progress/kendo-vue-inputs";
import { Button } from '@progress/kendo-vue-buttons';

export default {
  components: {
    ProgressBar,
    Checkbox,
      'kbutton': Button
  },
  data() {
    return {
      animation: true,
      animatedValue: 0,
    };
  },
  methods: {
    handleAnimation(e) {
      this.animation = !e.value;
    },
    changeProgress() {
      const newValue = this.animatedValue === 100 ? 0 : 100;
      this.animatedValue = newValue;
    },
  },
};
</script>
