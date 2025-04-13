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
        },
        {
          text: "Second item",
          items: [
            {
              text: "Second item child item",
            },
          ],
        },
      ],
    };
  },
};
</script>
