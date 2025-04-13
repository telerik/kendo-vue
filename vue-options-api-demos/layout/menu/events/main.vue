<template>
  <div>
    <kendo-menu :items="items" @select="onMenuSelect" />
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>

<script>
import { Menu } from "@progress/kendo-vue-layout";
import Logger from "./Logger.vue";

export default {
  components: {
    "kendo-menu": Menu,
    Logger,
  },
  computed: {
    eventsList() {
      return this.events;
    },
  },
  data: function () {
    return {
      events: [],
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
  methods: {
    onMenuSelect(e) {
      this.events.unshift("Menu Item '" + e.item.text +"' was selected");
    },
  },
};
</script>

