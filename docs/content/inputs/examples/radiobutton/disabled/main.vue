<template>
  <div>
    <RadioButton
      :name="'group1'"
      :checked="true"
      :disabled="true"
      :label="'Disabled checked radio'"
    />
    <RadioButton
      :name="'group1'"
      :disabled="true"
      :label="'Disabled unchecked radio'"
    />
  </div>
</template>

<script setup>
import { RadioButton } from "@progress/kendo-vue-inputs";
</script>

