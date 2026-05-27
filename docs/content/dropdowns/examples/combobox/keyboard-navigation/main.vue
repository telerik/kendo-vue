<template>
  <div class="example-wrapper">
    <p>Favorite sport:</p>
    <ComboBox
      :style="{ width: '230px' }"
      :data-items="sports"
      :allow-custom="true"
    />
  </div>
</template>

<script setup>
import { ComboBox } from '@progress/kendo-vue-dropdowns'

const sports = [
    'Baseball',
    'Basketball',
    'Cricket',
    'Field Hockey',
    'Football',
    'Table Tennis',
    'Tennis',
    'Volleyball'
]
</script>
