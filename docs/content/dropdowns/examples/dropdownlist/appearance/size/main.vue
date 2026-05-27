<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small: </span>
        <DropDownList
          :style="{ width: '170px' }"
          :size="'small'"
          :data-items="sizes"
        />
      </span>
      <span class="wrapper">
        <span>Medium: </span>
        <DropDownList
          :style="{ width: '170px' }"
          :size="'medium'"
          :data-items="sizes"
        />
      </span>
      <span class="wrapper">
        <span>Large: </span>
        <DropDownList
          :style="{ width: '170px' }"
          :size="'large'"
          :data-items="sizes"
        />
      </span>
    </div>
    <span class="wrapper">
      <span>Custom size:</span>
      <DropDownList
        :class="'custom-dropdownlist'"
        :size="null"
        :data-items="sizes"
      />
    </span>
  </div>
</template>

<script setup>
import { DropDownList } from '@progress/kendo-vue-dropdowns';

const sizes = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
</script>

<style>
.custom-dropdownlist {
  height: 40px;
  width: 200px;
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
