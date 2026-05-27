<template>
  <div>
    <SvgIcon :icon="menuIconRef" />
    &nbsp;
    <InputSeparator />
    &nbsp;
    <SvgIcon :icon="gearIconRef" />
  </div>
</template>

<script setup>
import { InputSeparator } from "@progress/kendo-vue-inputs";
import { SvgIcon } from "@progress/kendo-vue-common";
import { menuIcon, gearIcon } from "@progress/kendo-svg-icons";

const menuIconRef = menuIcon;
const gearIconRef = gearIcon;
</script>
