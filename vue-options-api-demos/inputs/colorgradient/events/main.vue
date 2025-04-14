<template>
  <div>
    <ColorGradient @change="onChange" />
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>
<script>
import { ColorGradient } from '@progress/kendo-vue-inputs';
import Logger from './Logger.vue';

export default {
  components: {
    Logger,
    ColorGradient,
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
    onChange(e) {
      this.events.unshift(
        'Change event triggered. Current ColorGradient value is: HEX: ' +
          e.value +
          ', RGBA:' +
          e.rgbaValue
      );
    },
  },
};
</script>
