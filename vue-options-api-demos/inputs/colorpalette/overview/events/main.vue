<template>
  <div>
    <ColorPalette :palette="'office'" @change="onChange" />
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>
<script>
import { ColorPalette } from '@progress/kendo-vue-inputs';
import Logger from './Logger.vue';

export default {
  components: {
    Logger,
    ColorPalette,
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
        'Change event triggered. Current ColorPalette value is: HEX: ' +
          e.value +
          '; RGB: ' +
          e.rgbaValue
      );
    },
  },
};
</script>
