<template>
  <div>
    <div class="col-xs-12 col-md-12 example-col">
      <DateRangePicker :value="value" @change="handleChange" />
    </div>
    <br />
    <br />
    <Logger :title="'Events list'" :events="events" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";
import Logger from "./Logger.vue";

const events = ref([]);
const value = ref({
    start: null,
    end: null,
});

const handleChange = (event) => {
    setTimeout(() => {
        events.value.unshift(
            `Date range between '${new Date(event.component.value.start).toLocaleDateString(
                "en-US"
            )}' and '${new Date(event.component.value.end).toLocaleDateString("en-US")}' was selected`
        );
    });
    value.value = event.value;
};
</script>
