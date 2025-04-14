<template>
  <div>
    <Tooltip
      :anchor-element="'target'"
      :position="'top'"
      @open="onOpen"
      @close="onClose"
    >
      <div id="agglomerations">
        <a href="#" title="Canton - 26,300,000" id="canton" />
        <a title="Jakarta - 25,800,000" id="jakarta" />
        <a title="Mexico City - 23,500,000" id="mexico" />
        <a title="Delhi - 23,500,000" id="delhi" />
        <a title="Karachi - 22,100,000" id="karachi" />
        <a title="New York - 21,500,000" id="newyork" />
        <a title="Sao Paulo - 21,300,000" id="saopaolo" />
        <a title="Mumbay/Bombay - 21,100,000" id="bombay" />
        <a title="Los Angeles - 17,100,000" id="losangeles" />
        <a title="Osaka - 16,800,000" id="osaka" />
        <a title="Moscow - 16,200,000" id="moscow" />
      </div>
    </Tooltip>
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>
<script>
import "./styles.css";
import { Tooltip } from "@progress/kendo-vue-tooltip";
import Logger from "./Logger.vue";

export default {
  components: {
    Logger,
    Tooltip,
  },
  computed: {
    eventsList() {
      return this.events;
    },
  },
  data: function () {
    return {
      events: [],
    };
  },
  methods: {
    onOpen(e) {
      this.events.unshift("Open event triggered for: " + e.event.target.id);
    },
    onClose(e) {
      this.events.unshift("Close event triggered for: " + e.event.target.id);
    },
  },
};
</script>
