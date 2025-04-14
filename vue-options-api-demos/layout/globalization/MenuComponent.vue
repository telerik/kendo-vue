<template>
  <div class="" style="width: 500px; margin: auto">
    <div>
      <kendo-menu :items="items"> </kendo-menu>
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
          text: "Invasion Games",
          items: [{ text: "Hockey" }, { text: "Soccer" }, { text: "Rugby" }],
        },
        {
          text: "Net & Court Games",
          items: [
            { text: "Badminton" },
            { text: "Squash" },
            { text: "Tennis" },
            { text: "Table Tennis" },
            { text: "Volleyball" },
          ],
        },
        {
          text: "Target Games",
          items: [
            { text: "Golf" },
            { text: "Lawn bowls" },
            { text: "Tenpin bowling" },
          ],
        },
      ],
    };
  },
};
</script>