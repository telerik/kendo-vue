<template>
   <div id="test-area">
      <div id="circular">
              {{value}}
             <CircularGauge :value="value" :colors="colors" :style="gaugeStyles"
            :center-render="'myTemplate'" >
               <template v-slot:myTemplate="{props}">
                   <h3
                    :style="{
                      color: props.color,
                    }"
                  >
                    {{props.value}}%
                  </h3>
              </template>
            </CircularGauge>
      </div>
    </div>
</template>
<script lang="ts">
import { CircularGauge } from '@progress/kendo-vue-gauges';

export default {
  components: {
     CircularGauge 
  },
  data() {
    return {
        value: 3,
        gaugeStyles: {
            display: 'block'
        },
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
            ]
    };
  },
  mounted() {
      setInterval(
            () => {
                this.value = Math.ceil(Math.random() * 100);
            },
            2000);
  }
};
</script>
