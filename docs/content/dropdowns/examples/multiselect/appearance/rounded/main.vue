<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small roundness: </span>
        <MultiSelect
          :style="{ width: '170px' }"
          :rounded="'small'"
          :data-items="sizes"
        />
      </span>
      <span class="wrapper">
        <span>Medium roundness: </span>
        <MultiSelect
          :style="{ width: '170px' }"
          :rounded="'medium'"
          :data-items="sizes"
        />
      </span>
      <span class="wrapper">
        <span>Large roundness: </span>
        <MultiSelect
          :style="{ width: '170px' }"
          :rounded="'large'"
          :data-items="sizes"
        />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Full roundness: </span>
        <MultiSelect
          :style="{ width: '170px' }"
          :rounded="'full'"
          :data-items="sizes"
        />
      </span>
      <span class="wrapper">
        <span>Custom roundness:</span>
        <MultiSelect
          :class="'custom-multiselect'"
          :rounded="'none'"
          :data-items="sizes"
        />
      </span>
    </div>
  </div>
</template>
<script setup>
import { MultiSelect } from "@progress/kendo-vue-dropdowns";

const sizes = [
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "2X-Large",
];
</script>
<style>
.custom-multiselect {
  width: 200px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
}
.wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.demo {
  display: flex;
  flex-direction: row;
}
</style>
