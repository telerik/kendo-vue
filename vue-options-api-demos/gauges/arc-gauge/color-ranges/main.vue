<template>
  <div class="row">
    <ArcGauge :value="value" :colors="colors"> </ArcGauge>
  </div>
</template>

<script>
import { ArcGauge } from "@progress/kendo-vue-gauges";

export default {
  components: {
    ArcGauge,
  },
  mounted() {
    setInterval(() => {
      this.value = Math.ceil(Math.random() * 100);
    }, 1000);
  },
  data() {
    return {
      value: 8,
      colors: [
        {
          to: 25,
          color: "#0058e9",
        },
        {
          from: 25,
          to: 50,
          color: "#37b400",
        },
        {
          from: 50,
          to: 75,
          color: "#ffc000",
        },
        {
          from: 75,
          color: "#f31700",
        },
      ],
    };
  },
};
</script>
