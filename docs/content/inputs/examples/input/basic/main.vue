<template>
  <div>
    <div class="col-xs-12 col-md-6 example-col">
      <p>Input</p>
      <KInput :style="{ width: '230px' }" />
    </div>
  </div>
</template>

<script setup>
import { Input as KInput } from "@progress/kendo-vue-inputs";
</script>
