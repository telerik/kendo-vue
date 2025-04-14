<template>
  <div class="example">
    <fab :items="items" :svg-icon="shareIcon" />
  </div>
</template>
<script>
import { FloatingActionButton } from "@progress/kendo-vue-buttons";
import {
  shareIcon,
  twitterIcon,
  facebookIcon,
  pinterestIcon,
} from "@progress/kendo-svg-icons";

const items = [
  {
    text: "Twitter",
    svgIcon: twitterIcon,
  },
  {
    text: "Facebook",
    svgIcon: facebookIcon,
  },
  {
    text: "Pinterest",
    svgIcon: pinterestIcon,
  },
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
