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

<script>
import { Switch } from "@progress/kendo-vue-inputs";
import SwitchStyleConfigurator from "./SwitchStyleConfigurator.vue";

export default {
  components: {
    SwitchStyleConfigurator,
    Switch,
  },
  data() {
    return {
      size: "medium",
      trackRounded: "medium",
      thumbRounded: "medium",
    };
  },
  methods: {
    setSize(event) {
      this.size = event.value;
    },
    setTrackRounded(event) {
      this.trackRounded = event.value;
    },
    setThumbRounded(event) {
      this.thumbRounded = event.value;
    },
  },
};
</script>
