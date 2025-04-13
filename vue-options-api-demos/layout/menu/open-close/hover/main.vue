<template>
  <div>
    <div>
      <kendo-menu
        :items="items"
        :hover-open-delay="0"
        :hover-close-delay="200"
      />
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
          text: "Item1",
          items: [
            { text: "Item1.1" },
            {
              text: "Item1.2",
              items: [{ text: "Item1.2.1" }, { text: "Item1.2.2" }],
            },
          ],
        },
        {
          text: "Item2",
          items: [
            { text: "Item2.1" },
            { text: "Item2.2" },
            { text: "Item2.3" },
          ],
        },
        {
          text: "Item3",
        },
      ],
    };
  },
};
</script>
