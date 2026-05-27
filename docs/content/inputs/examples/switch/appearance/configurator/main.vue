<template>
  <div>
    <SwitchStyleConfigurator
      :size="size"
      @sizechange="setSize"
      :track-rounded="trackRounded"
      @trackroundedchange="setTrackRounded"
      :thumb-rounded="thumbRounded"
      @thumbroundedchange="setThumbRounded"
    />
    <Switch
      :size="size"
      :track-rounded="trackRounded"
      :thumb-rounded="thumbRounded"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Switch } from "@progress/kendo-vue-inputs";
import SwitchStyleConfigurator from "./SwitchStyleConfigurator.vue";

const size = ref("medium");
const trackRounded = ref("medium");
const thumbRounded = ref("medium");

function setSize(event) {
    size.value = event.value;
}

function setTrackRounded(event) {
    trackRounded.value = event.value;
}

function setThumbRounded(event) {
    thumbRounded.value = event.value;
}
</script>
