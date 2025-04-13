<template>
  <div>
    <FlatColorPicker @viewchange="onViewChange" @change="onChange" />
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>
<script>
import { FlatColorPicker } from '@progress/kendo-vue-inputs';
import Logger from './Logger.vue';

export default {
  components: {
    Logger,
    FlatColorPicker,
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
    onViewChange(e) {
      this.events.unshift(
        'FlatColorPickerViewChangeEvent triggered. Current view is ',
        e.viewType
      );
    },
    onChange(e) {
      this.events.unshift(
        'Change event triggered. Current ColorPicker value is: HEX: ' +
          e.value +
          '; RGB: ' +
          e.rgbaValue
      );
    },
  },
};
</script>
