<template>
  <div>
    <Switch @change="onChange" :checked="checked" />
    <br />
    <br />
    <Logger title="Events list" :events="events" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Switch } from "@progress/kendo-vue-inputs";
import Logger from "./Logger.vue";

const checked = ref(true);
const events = ref([]);

function onChange(e) {
    checked.value = e.target.value;
    events.value.unshift(
        `Change event triggered. Switch value is: ${e.target.value}`
    );
}
</script>
