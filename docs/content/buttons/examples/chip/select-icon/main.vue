<template>
  <ChipList
    :rounded="'full'"
    :default-data-items="fruits"
    :selection="'multiple'"
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
    checkCircleIcon,
    checkIcon,
    plusIcon,
    plusCircleIcon,
} from "@progress/kendo-svg-icons";
import CustomChip from "./CustomChip.vue";

const fruits = [
    {
        text: "Berry",
        value: "berry",
        selectedIcon: checkIcon,
    },
    {
        text: "Apple",
        value: "apple",
        selectedIcon: checkCircleIcon,
    },
    {
        text: "Strawberry",
        value: "strawberry",
        selectedIcon: plusIcon,
    },
    {
        text: "Banana",
        value: "banana",
        selectedIcon: plusIcon,
    },
    {
        text: "Kiwi",
        value: "kiwi",
        selectedIcon: plusCircleIcon,
    },
];

const chip = "myTemplate";
</script>
