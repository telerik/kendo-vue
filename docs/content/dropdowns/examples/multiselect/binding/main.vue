<template>
  <div class="example-wrapper">
    <div>
      <div>T-shirt sizes:</div>
      <MultiSelect :style="{ width: '230px' }" :data-items="sizes" />
    </div>
  </div>
</template>
<script setup>
import { MultiSelect } from "@progress/kendo-vue-dropdowns";

const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
</script>
