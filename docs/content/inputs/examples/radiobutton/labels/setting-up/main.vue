<template>
  <div>
    <RadioButton
      :label="'RadioButton label'"
      :name="'group1'"
      :value="'default label'"
      :checked="true"
    />
    <RadioButton
      :label="'RadioButton label before'"
      :label-placement="'before'"
      :name="'group1'"
      :value="'label before'"
    />
  </div>
</template>

<script setup>
import { RadioButton } from "@progress/kendo-vue-inputs";

</script>

