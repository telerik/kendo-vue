<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small roundness: </span>
        <DropDownList
          :style="{ width: '170px' }"
          :rounded="'small'"
          :data-items="sizes"
        />
      </span>
      <span class="wrapper">
        <span>Medium roundness: </span>
        <DropDownList
          :style="{ width: '170px' }"
          :rounded="'medium'"
          :data-items="sizes"
        />
      </span>
      <span class="wrapper">
        <span>Large roundness: </span>
        <DropDownList
          :style="{ width: '170px' }"
          :rounded="'large'"
          :data-items="sizes"
        />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Full roundness: </span>
        <DropDownList
          :style="{ width: '170px' }"
          :rounded="'full'"
          :data-items="sizes"
        />
      </span>
      <span class="wrapper">
        <span>Custom roundness:</span>
        <DropDownList
          :class="'custom-dropdownlist'"
          :rounded="'none'"
          :data-items="sizes"
        />
      </span>
    </div>
  </div>
</template>

<script setup>
import { DropDownList } from '@progress/kendo-vue-dropdowns';

const sizes = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
</script>

<style>
.custom-dropdownlist {
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
