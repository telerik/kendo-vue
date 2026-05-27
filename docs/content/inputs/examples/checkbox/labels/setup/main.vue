<template>
  <div>
    <Checkbox :id="'chb1'" :label="'Checkbox label'" />
    <br />
    <br />
    <Checkbox
      :id="'chb2'"
      :label="'Checkbox label before'"
      :label-placement="'before'"
    />
  </div>
</template>

<script setup>
import { Checkbox } from "@progress/kendo-vue-inputs";
</script>

