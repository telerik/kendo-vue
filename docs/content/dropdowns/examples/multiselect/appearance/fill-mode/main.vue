<template>
  <div class="example-config">
    <div class="demo">
      <span class="wrapper">
        <span>Flat: </span>
        <MultiSelect
          :style="{ width: '170px' }"
          :fill-mode="'flat'"
          :data-items="sizes"
        />
      </span>
      <span class="wrapper">
        <span>Solid: </span>
        <MultiSelect
          :style="{ width: '170px' }"
          :fill-mode="'solid'"
          :data-items="sizes"
        />
      </span>
      <span class="wrapper">
        <span>Outline: </span>
        <MultiSelect
          :style="{ width: '170px' }"
          :fill-mode="'outline'"
          :data-items="sizes"
        />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Custom fill mode:</span>
        <MultiSelect
          :class="'custom-multiselect'"
          :fill-mode="null"
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
  background-color: #00aead;
  border: 2px solid #bfd843;
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
