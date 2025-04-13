<template>
  <div>
    <div>
      <kendo-menu :items="items" />
    </div>
  </div>
</template>

<script>
import { Menu } from "@progress/kendo-vue-layout";

export default {
  components: {
    "kendo-menu": Menu,
  },
  data: function () {
    return {
      items: [
        {
          text: "First item",
          url: "https://www.example.com/?item=1.1",
          items: [{ text: "Child item 1.1" }, { text: "Child item 1.2" }],
        },
        {
          text: "Second item",
          url: "https://www.example.com/?item=2",
        },
      ],
    };
  },
};
</script>