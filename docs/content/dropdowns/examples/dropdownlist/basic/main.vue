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
import { ref } from 'vue';

const sports = ref(['Basketball', 'Football', 'Tennis', 'Volleyball']);
</script>
