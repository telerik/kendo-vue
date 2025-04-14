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
          text: "Item1",
          disabled: true,
          items: [
            {
              text: "Item1.1",
            },
          ],
        },
        {
          text: "Item2",
          disabled: true,
        },
      ],
    };
  },
};
</script>