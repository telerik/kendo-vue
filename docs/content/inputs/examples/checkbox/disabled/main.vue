<template>
  <div>
    <Checkbox :disabled="true" :label="'Disabled unchecked'" />
    <br />
    <Checkbox :disabled="true" :checked="true" :label="'Disabled checked'" />
  </div>
</template>

<script setup>
import { Checkbox } from "@progress/kendo-vue-inputs";
</script>

