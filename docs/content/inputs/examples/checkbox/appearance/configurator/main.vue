<template>
  <div>
    <CheckboxStyleConfigurator
      :size="size"
      @sizechange="setSize"
      :rounded="rounded"
      @roundedchange="setRounded"
    />
    <Checkbox :size="size" :rounded="rounded" :default-checked="true" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CheckboxStyleConfigurator from "./CheckboxStyleConfigurator.vue";
import { Checkbox } from "@progress/kendo-vue-inputs";

const size = ref("medium");
const rounded = ref("medium");

function setSize(event) {
    size.value = event.value;
}

function setRounded(event) {
    rounded.value = event.value;
}
</script>
