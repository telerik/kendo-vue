<template>
  <div>
    <ButtonGroup :disabled="disabled">
      <KButton :togglable="true">Option A</KButton>
      <KButton :togglable="true">Option B</KButton>
    </ButtonGroup>
    &nbsp;
    <KButton @click="handleDisable">Toggle disabled</KButton>
  </div>
</template>

<script setup>
import { Button as KButton, ButtonGroup } from "@progress/kendo-vue-buttons";
import { ref } from 'vue';

const disabled = ref(true);

function handleDisable() {
    disabled.value = !disabled.value;
}
</script>
