<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col-sm">
        <KCheckbox
          :id="'indeterminate'"
          @change="handleClick"
          :label="'Toggle the indeterminate state'"
          :labelPlacement="'before'"
        />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-sm">
        <NumericTextBox
          :style="{ width: '150px' }"
          :max="max"
          :min="min"
          :value="value"
          @change="handleChange"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <div :style="{ display: 'flex', justifyContent: 'space-between' }">
          <div class="mr-2">Min: {{ min }}</div>
          <div class="ml-2">Max: {{ max }}</div>
        </div>
        <ChunkProgressBar
          :min="min"
          :max="max"
          :value="value"
          :chunkCount="10"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { ChunkProgressBar } from '@progress/kendo-vue-progressbars';
import { Checkbox, NumericTextBox } from '@progress/kendo-vue-inputs';

export default {
  components: {
    ChunkProgressBar,
    KCheckbox: Checkbox,
    NumericTextBox,
  },
  data() {
    return {
      value: 0,
      prevValue: 0,
      min: -10,
      max: 10,
    };
  },
  methods: {
    handleClick() {
      if (this.value == null) {
        this.value = this.prevValue;
      } else {
        this.value = null;
      }
    },
    handleChange(e) {
      this.value = e.target.value;
    },
  },
};
</script>
