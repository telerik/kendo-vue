<template>
  <div>
    <Switch @change="onChange" :checked="checked" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Switch } from "@progress/kendo-vue-inputs";

const checked = ref(true);

function onChange(e) {
    checked.value = e.target.value;
}
</script>
