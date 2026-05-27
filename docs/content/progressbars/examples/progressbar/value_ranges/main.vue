<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col-sm">
        <Checkbox
          id="indeterminate"
          @click="handleClick"
          label="Toggle the indeterminate state"
          label-placement="before"
        />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-sm">
        Value: {{ " " }}
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

<script setup>
import { ref, watch } from "vue";
import { ProgressBar } from "@progress/kendo-vue-progressbars";
import { Checkbox, NumericTextBox } from "@progress/kendo-vue-inputs";

const value = ref(0);
const min = ref(-10);
const max = ref(10);
const prevValue = ref(null);

watch(value, (newVal, oldVal) => {
    prevValue.value = oldVal;
});

const handleClick = () => {
    value.value = value.value === null ? prevValue.value : null;
};

const handleChange = (e) => {
    value.value = e.target.value;
};
</script>
