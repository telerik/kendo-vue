<template>
  <div>
    <div>T-shirt size:</div>
    <DropDownList :style="{ width: '230px' }" :data-items="sizes" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

const sizes = ref(['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large']);
</script>
