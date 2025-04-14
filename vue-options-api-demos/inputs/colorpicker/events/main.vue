<template>
  <div>
    <ColorPicker
      :default-value="'rgba(237, 126, 50, 1)'"
      @activecolorclick="onActiveColorClick"
      @blur="onBlur"
      @change="onChange"
      @focus="onFocus"
    />
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>
<script>
import { ColorPicker } from '@progress/kendo-vue-inputs';
import Logger from './Logger.vue';

export default {
  components: {
    Logger,
    ColorPicker,
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
    onActiveColorClick(e) {
      this.events.unshift(
        'ActiveColorClick event triggered. Current ColorPicker value is: ' +
          e.value
      );
    },
    onBlur(e) {
      this.events.unshift('Blur event triggered.');
    },
    onChange(e) {
      this.events.unshift(
        'Change event triggered. Current ColorPicker value is: HEX: ' +
          e.event.value +
          '; RGB: ' +
          e.event.rgbaValue
      );
    },
    onFocus(e) {
      this.events.unshift('Focus event triggered.');
    },
  },
};
</script>
