<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col-sm">
        <kcheckbox
          :id="'indeterminate'"
          @click="handleClick"
          :label="'Toggle the indeterminate state'"
          :label-placement="'before'"
        />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-sm">
        Value:{{ " " }}
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
        <ProgressBar :min="min" :max="max" :value="value" />
      </div>
    </div>
  </div>
</template>

<script>
import { ProgressBar } from "@progress/kendo-vue-progressbars";
import { Checkbox, NumericTextBox } from "@progress/kendo-vue-inputs";

export default {
  components: {
    ProgressBar,
    kcheckbox: Checkbox,
    NumericTextBox,
  },
  data() {
    return {
      value: 0,
      min: -10,
      max: 10,
      prevValue: null,
    };
  },
  watch: {
    value(_new, old) {
      this.prevValue = old;
    },
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
