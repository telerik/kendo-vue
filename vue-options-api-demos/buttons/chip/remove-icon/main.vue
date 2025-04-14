<template>
    <chiplist
      :rounded="'full'"
      :default-data-items="fruits"
      :selection="'single'"
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
    xIcon,
    cancelOutlineIcon,
    cancelCircleIcon,
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
        removeIcon: cancelCircleIcon,
    },
    {
        text: "Strawberry",
        value: "strawberry",
        removable: true,
        removeIcon: cancelOutlineIcon,
    },
    {
        text: "Banana",
        value: "banana",
        removable: true,
        removeIcon: cancelIcon,
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
