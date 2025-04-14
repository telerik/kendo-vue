<template>
  <div class="example">
    <fab :items="items" :svg-icon="shareIcon" />
  </div>
</template>
<script>
import { FloatingActionButton } from "@progress/kendo-vue-buttons";
import { shareIcon, userIcon } from "@progress/kendo-svg-icons";

const items = [
  { svgIcon: userIcon, text: "Adam" },
  { svgIcon: userIcon, text: "Ellie", disabled: true },
  { svgIcon: userIcon, text: "Paul" },
];

export default {
  components: {
    fab: FloatingActionButton,
  },
  data() {
    return {
      shareIcon,
      items,
    };
  },
};
</script>
