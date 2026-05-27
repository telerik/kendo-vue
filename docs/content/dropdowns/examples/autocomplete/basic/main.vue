<template>
  <div class="example-wrapper">
    <p>Type the name of a European country:</p>
    <AutoComplete
      :style="{ width: '230px' }"
      :data-items="countries"
      :placeholder="'e.g. Denmark'"
    />
  </div>
</template>

<script setup>
import countries from './countries';
import { AutoComplete } from '@progress/kendo-vue-dropdowns';
</script>
