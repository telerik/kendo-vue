<template>
  <div class="example">
    <fab :items="items" :svg-icon="gearIcon" />
  </div>
</template>
<script>
import { FloatingActionButton } from "@progress/kendo-vue-buttons";
import {
  gearIcon,
  plusIcon,
  pencilIcon,
  trashIcon,
} from "@progress/kendo-svg-icons";

const items = [
  { svgIcon: plusIcon, text: "Create" },
  { svgIcon: pencilIcon, text: "Edit" },
  { svgIcon: trashIcon, text: "Delete" },
];

export default {
  components: {
    fab: FloatingActionButton,
  },
  data() {
    return {
      gearIcon,
      items: items,
    };
  },
};
</script>
