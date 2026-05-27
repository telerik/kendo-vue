<template>
  <div>
    <SvgIcon :icon="menuIcon" />
    <InputSeparator />
    <SvgIcon :icon="gearIcon" />
  </div>
</template>

<script setup>
import { InputSeparator } from "@progress/kendo-vue-inputs";
import { SvgIcon } from "@progress/kendo-vue-common";
import { gearIcon, menuIcon } from "@progress/kendo-svg-icons";
</script>
