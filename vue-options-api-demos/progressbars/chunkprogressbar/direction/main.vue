<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col-sm">
        <p>
          State:
          <strong>{{ isProgressBarReversed ? 'Reversed' : 'Default' }}</strong>
        </p>
        <KCheckbox
          :id="'reverse'"
          v-model="isProgressBarReversed"
          :label="'Toggle the reverse state'"
          :labelPlacement="'before'"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <ChunkProgressBar :value="value" :reverse="isProgressBarReversed" />
      </div>
    </div>
  </div>
</template>
<script>
import { ChunkProgressBar } from '@progress/kendo-vue-progressbars';
import { Checkbox } from '@progress/kendo-vue-inputs';

export default {
  components: {
    ChunkProgressBar,
    KCheckbox: Checkbox,
  },
  data() {
    return {
      value: 40,
      isProgressBarReversed: false,
    };
  },
  mounted() {
    setInterval(() => {
      this.handleIncrease();
    }, 800);
  },
  methods: {
    handleIncrease() {
      if (this.value < 100) {
        this.value = this.value + 20;
      } else {
        this.value = 0;
      }
    },
  },
};
</script>
