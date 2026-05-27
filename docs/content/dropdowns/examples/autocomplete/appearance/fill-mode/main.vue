<template>
  <div class="example-config">
    <div class="demo">
      <span class="wrapper">
        <span>Flat: </span>
        <AutoComplete
          :style="{ width: '170px' }"
          :fill-mode="'flat'"
          :data-items="sizes"
        />
      </span>
      <span class="wrapper">
        <span>Solid: </span>
        <AutoComplete
          :style="{ width: '170px' }"
          :fill-mode="'solid'"
          :data-items="sizes"
        />
      </span>
      <span class="wrapper">
        <span>Outline: </span>
        <AutoComplete
          :style="{ width: '170px' }"
          :fill-mode="'outline'"
          :data-items="sizes"
        />
      </span>
    </div>
    <div class="demo">
      <span class="wrapper">
        <span>Custom fill mode:</span>
        <AutoComplete
          :class="'custom-autocomplete'"
          :fill-mode="null"
          :data-items="sizes"
        />
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { AutoComplete } from '@progress/kendo-vue-dropdowns';

const sizes = ref([
    'X-Small',
    'Small',
    'Medium',
    'Large',
    'X-Large',
    '2X-Large',
]);
</script>

<style>
.custom-autocomplete {
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
