<template>
  <div>
    <k-switch @change="onChange" :checked="checked" />
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>
<script>
import { Switch } from "@progress/kendo-vue-inputs";
import Logger from "./Logger.vue";

export default {
  components: {
    Logger,
    "k-switch": Switch,
  },
  computed: {
    eventsList() {
      return this.events;
    },
  },
  data: function () {
    return {
      checked: true,
      events: [],
    };
  },
  methods: {
    onChange(e) {
      this.checked = e.target.value;
      this.events.unshift(
        "Change event triggered. Switch value is: " + e.target.value
      );
    },
  },
};
</script>
