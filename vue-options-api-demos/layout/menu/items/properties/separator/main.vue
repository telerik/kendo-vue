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
          { text: "Item1",
                items: [
                    { text: "Child item 1.1" },
                    { text: "Child item 1.2" },
                    { separator: true },
                    { text: "Child item 1.3" }
                ]
          },
          { text: "Item2" },
          { separator: true },
          { text: "Item3" }
        ]
      };
    },
  };
  </script>
