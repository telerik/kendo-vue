<template>
   <div id="test-area">
      <div id="arc">
              {{value}}
            <ArcGauge :value="value" :colors="colors" :style="gaugeStyles"  :scale="scale"
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
            </ArcGauge>
      </div>
    </div>
</template>
<script lang="ts">
import { ArcGauge } from '@progress/kendo-vue-gauges';

export default {
  components: {
     ArcGauge 
  },
  computed: {
    linearPointer(){
      return { value: this.value};
    },
    radualPointer() {
        return [{
            value: this.value,
            color: 'red'
        }, {
            value: this.value >= 50 ? this.value / 2 : this.value * 2,
            color: 'green'
        }]
    }
  },
  data() {
    return {
        scale: {
          labels: {
            format: "c",
            color: this.labelsColor,
            visible: this.showLabels,
          }
        },
        value: 3,
        toggle: true,
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
                this.toggle = !this.toggle;
            },
            2000);
  }
};
</script>
