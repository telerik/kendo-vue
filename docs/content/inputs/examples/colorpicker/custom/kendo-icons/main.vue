<template>
  <div>
    <ColorPicker :view="'gradient'" :svg-icon="editToolsIcon" />
  </div>
</template>

<script setup>
import { ColorPicker } from "@progress/kendo-vue-inputs";
import { editToolsIcon } from "@progress/kendo-svg-icons";
</script>
