<template>
  <div>
    <div class="col-xs-12 col-md-12 example-col">
      <DateRangePicker :value="value" @change="handleChange" />
    </div>
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>

<script>
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";
import Logger from "./Logger.vue";

export default {
  components: {
    Logger,
    DateRangePicker,
  },
  computed: {
    eventsList() {
      return this.events;
    },
  },
  data() {
    return {
      events: [],
      value: {
        start: null,
        end: null,
      },
    };
  },
  methods: {
    handleChange(event) {
      setTimeout(() => {
        this.events.unshift(
          "Date range betwen '" +
            new Date(event.component.value.start).toLocaleDateString("en-US") +
            "' and '" +
            new Date(event.component.value.end).toLocaleDateString("en-US") +
            " was selected"
        );
      });
      this.value = event.value;
    },
  },
};
</script>
