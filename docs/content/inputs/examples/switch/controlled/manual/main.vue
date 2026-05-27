<template>
  <div class="row">
    <div class="col-md-3">
      <KButton @click="handleToggleSwitch">Toggle</KButton>
    </div>
    <div class="col-md-3">
      <Switch @change="onChange" :checked="checked" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Switch } from "@progress/kendo-vue-inputs";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const checked = ref(true);

function onChange(e) {
    checked.value = e.target.value;
}

function handleToggleSwitch() {
    checked.value = !checked.value;
}
</script>
