<template>
  <div class="example-wrap">
    <FloatingActionButton
      :text="'Small'"
      :svg-icon="pencilIcon"
      :size="'small'"
      :align="{ horizontal: 'start', vertical: 'bottom' }"
    ></FloatingActionButton>
    <FloatingActionButton
      :text="'Medium'"
      :svg-icon="pencilIcon"
      :size="'medium'"
      :align="{ horizontal: 'center', vertical: 'bottom' }"
    ></FloatingActionButton>
    <FloatingActionButton
      :text="'Large'"
      :svg-icon="pencilIcon"
      :size="'large'"
      :align="{ horizontal: 'end', vertical: 'bottom' }"
    ></FloatingActionButton>
    <FloatingActionButton
      :svg-icon="pencilIcon"
      :text="'Custom'"
      :size="null"
      :class="'custom-fab'"
      :align="{ horizontal: 'end', vertical: 'top' }"
    ></FloatingActionButton>
  </div>
</template>

<script setup>
import { FloatingActionButton } from "@progress/kendo-vue-buttons";
import { pencilIcon } from "@progress/kendo-svg-icons";
</script>

<style>
.custom-fab button {
  padding: 10px 30px;
}
</style>
