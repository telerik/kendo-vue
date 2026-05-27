<template>
    <ChipList
      :rounded="'full'"
      :default-data-items="fruits"
      :selection="'single'"
      :chip="chip"
    >
      <template #myTemplate="{ props }">
        <CustomChip
          :data-item="props.dataItem"
          :value="props.value"
          :text="props.text"
        />
      </template>
    </ChipList>
  </template>

<script setup>
import { ChipList } from "@progress/kendo-vue-buttons";
import {
    xIcon,
    cancelIcon,
} from "@progress/kendo-svg-icons";
import CustomChip from "./CustomChip.vue";

const fruits = [
    {
        text: "Berry",
        value: "berry",
        removable: true,
        removeIcon: xIcon,
    },
    {
        text: "Apple",
        value: "apple",
        removable: true,
        removeIcon: cancelIcon,
    },
    {
        text: "Strawberry",
        value: "strawberry",
        removable: true,
        removeIcon: cancelIcon,
    },
    {
        text: "Banana",
        value: "banana",
        removable: true,
        removeIcon: cancelIcon,
    },
];

const chip = "myTemplate";
</script>
