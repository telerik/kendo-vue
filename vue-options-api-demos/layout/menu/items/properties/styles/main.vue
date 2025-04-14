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
          cssClass: "active",
        },
        {
          text: "Item2",
          cssStyle: {
            backgroundColor: "#d3d3d3",
          },
        },
      ],
    };
  },
};
</script>