<template>
  <div>
    <MultiSelect
      :style="{ width: '300px' }"
      @open="onOpen"
      @close="onClose"
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange"
      @filterchange="onFilterChange"
      :filterable="true"
      :data-items="countriesList"
    />
    <br />
    <br />
    <div class="example-config">
      <h5>Event log</h5>
      <ul class="event-log" :style="{ textAlign: 'right' }">
        <li v-for="(event, index) in events" :key="index">
          {{ event }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { MultiSelect } from "@progress/kendo-vue-dropdowns";
import countries from "./countries";

const countriesList = ref(countries);
const events = ref([]);

function onOpen() {
    log("open");
}

function onClose() {
    log("close");
}

function onFocus() {
    log("focus");
}

function onBlur() {
    log("blur");
}

function onChange() {
    log("change");
}

function onFilterChange(event) {
    log("filterchange", event.filter.value);
}

function log(event, arg = "") {
    events.value.unshift(`${event} ${arg}`);
}
</script>
