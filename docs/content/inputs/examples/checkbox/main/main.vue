<template>
  <div>
    <Checkbox :label="'Unchecked state'" />
    <br />
    <Checkbox :default-checked="true" :label="'Checked state'" />
    <br />
    <Checkbox :value="null" :label="'Indeterminate state'" />
    <br />
  </div>
</template>

<script setup>
import { Checkbox } from "@progress/kendo-vue-inputs";
</script>

