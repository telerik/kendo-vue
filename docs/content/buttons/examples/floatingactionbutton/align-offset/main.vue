<template>
  <div class="example">
    <div class="row">
      <div class="col-6">
        <p>Horizontal offset</p>
        <NumericTextBox :style="{ width: '230px' }" v-model="xValue" />
      </div>
      <div class="col-6">
        <p>Vertical offset</p>
        <NumericTextBox :style="{ width: '230px' }" v-model="yValue" />
      </div>
    </div>

    <FloatingActionButton
      :alignOffset="{ x: xValue, y: yValue }"
      :svg-icon="homeIcon"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FloatingActionButton } from "@progress/kendo-vue-buttons";
import { NumericTextBox } from "@progress/kendo-vue-inputs";
import { homeIcon } from "@progress/kendo-svg-icons";

const yValue = ref(16);
const xValue = ref(16);
</script>
