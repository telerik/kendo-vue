<template>
  <div class="example">
    <FloatingActionButton
      v-for="align in alignments"
      :align="align"
      :key="align"
      :svg-icon="userIcon"
      :items="items"
    />
  </div>
</template>

<script setup>
import { FloatingActionButton } from "@progress/kendo-vue-buttons";
import {
    userIcon,
    plusIcon,
    pencilIcon,
    trashIcon,
} from "@progress/kendo-svg-icons";

const alignments = [
    { vertical: "top", horizontal: "start" },
    { vertical: "top", horizontal: "center" },
    { vertical: "top", horizontal: "end" },
    { vertical: "middle", horizontal: "start" },
    { vertical: "middle", horizontal: "end" },
    { vertical: "bottom", horizontal: "start" },
    { vertical: "bottom", horizontal: "center" },
    { vertical: "bottom", horizontal: "end" },
];

const items = [
    { svgIcon: plusIcon, text: "Create" },
    { svgIcon: pencilIcon, text: "Edit" },
    { svgIcon: trashIcon, text: "Delete" },
];
</script>
