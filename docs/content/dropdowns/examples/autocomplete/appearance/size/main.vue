<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span>Small: </span>
        <AutoComplete
          :style="{ width: '170px' }"
          :size="'small'"
          :data-items="dataItems"
        />
      </span>
      <span class="wrapper">
        <span>Medium: </span>
        <AutoComplete
          :style="{ width: '170px' }"
          :size="'medium'"
          :data-items="dataItems"
        />
      </span>
      <span class="wrapper">
        <span>Large: </span>
        <AutoComplete
          :style="{ width: '170px' }"
          :size="'large'"
          :data-items="dataItems"
        />
      </span>
    </div>
    <span class="wrapper">
      <span>Custom size:</span>
      <AutoComplete
        class="custom-autocomplete"
        :size="null"
        :data-items="dataItems"
      />
    </span>
  </div>
</template>

<script setup>
import { AutoComplete } from '@progress/kendo-vue-dropdowns'

const dataItems = [
    'X-Small',
    'Small',
    'Medium',
    'Large',
    'X-Large',
    '2X-Large',
]
</script>

<style>
.custom-autocomplete {
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
