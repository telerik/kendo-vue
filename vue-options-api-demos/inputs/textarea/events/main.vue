<template>
  <div>
    <h6>Enter text:</h6>
    <k-textarea
      @change="onChange"
      @blur="onBlur"
      @focus="onFocus"
      @input="onInput"
      :rows="5"
      :style="{ 'background-color': 'red', width: '100%' }"
    />
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>
<script>
import { TextArea } from '@progress/kendo-vue-inputs';
import Logger from './Logger.vue';

export default {
  components: {
    Logger,
    'k-textarea': TextArea,
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
        'Change event triggered. The value of the TextArea is: ' + e.value
      );
    },
    onBlur(e) {
      this.events.unshift('Blur event triggered.');
    },
    onFocus(e) {
      this.events.unshift('Focus event triggered.');
    },
    onInput(e) {
      this.events.unshift(
        'Input event triggered.  The value of the TextArea is: ' + e.value
      );
    },
  },
};
</script>

<style>
.k-textarea {
  width: 100%;
}
</style>
