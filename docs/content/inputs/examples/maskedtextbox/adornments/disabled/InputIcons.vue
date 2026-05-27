<template>
  <div>
    <SvgIcon :icon="menuIcon" />
    <InputSeparator />
    <SvgIcon :icon="gearIcon" />
  </div>
</template>

<script setup>
import { SvgIcon } from "@progress/kendo-vue-common";
import { InputSeparator } from "@progress/kendo-vue-inputs";
import { gearIcon, menuIcon } from "@progress/kendo-svg-icons";
</script>
