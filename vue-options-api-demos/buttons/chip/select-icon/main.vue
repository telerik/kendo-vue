<template>
    <chiplist
      :rounded="'full'"
      :default-data-items="fruits"
      :selection="'multiple'"
      :chip="chip"
    >
      <template v-slot:myTemplate="{ props }">
        <custom
          :data-item="props.dataItem"
          :value="props.value"
          :text="props.text"
        />
      </template>
    </chiplist>
  </template>
  <script>
  import { ChipList } from "@progress/kendo-vue-buttons";
  import {
    checkCircleIcon,
    checkOutlineIcon,
    plusOutlineIcon,
    plusCircleIcon,
  } from "@progress/kendo-svg-icons";

  import CustomChip from "./CustomChip.vue";

  const fruits = [
    {
      text: "Berry",
      value: "berry",
      selectedIcon: checkOutlineIcon,
    },
    {
      text: "Apple",
      value: "apple",
      selectedIcon: checkCircleIcon,
    },
    {
      text: "Strawberry",
      value: "strawberry",
      selectedIcon: plusOutlineIcon,
    },
    {
      text: "Banana",
      value: "banana",
      selectedIcon: plusOutlineIcon,
    },
    {
      text: "Kiwi",
      value: "kiwi",
      selectedIcon: plusCircleIcon,
    },
  ];

  export default {
    components: {
      chiplist: ChipList,
      custom: CustomChip,
    },
    data() {
      return {
        fruits: fruits,
        chip: "myTemplate",
      };
    },
  };
  </script>
