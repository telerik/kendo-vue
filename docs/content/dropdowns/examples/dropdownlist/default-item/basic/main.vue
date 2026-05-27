<template>
  <div>
    <DropDownList
      :style="{ width: '230px' }"
      :data-items="sports"
      :default-item="'Select sport ...'"
    />
  </div>
</template>

<script setup>
import { DropDownList } from '@progress/kendo-vue-dropdowns';

const sports = ['Basketball', 'Football', 'Tennis', 'Volleyball'];
</script>
