<template>
  <div class="text-center">
    <div
      :style="{
        display: 'flex',
        justifyContent: 'space-between',
      }"
    >
      <div v-for="orientation in orientations" :key="orientation">
        <p>{{ orientation }}</p>
        <SvgIcon :icon="spellCheckerIcon" :flip="orientation" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { SvgIcon } from "@progress/kendo-vue-common";
import { spellCheckerIcon } from "@progress/kendo-svg-icons";

const orientations = ["default", "horizontal", "vertical", "both"];
</script>
