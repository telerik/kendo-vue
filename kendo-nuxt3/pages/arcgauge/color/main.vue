<template>
   <div id="test-area">
      <div id="arc">
              {{arcPointer}}
              <ArcGauge :pointer="arcPointer" :style="gaugeStyles" />
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
    arcPointer(){
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
        value: 3,
        toggle: true,
        gaugeStyles: {
            display: 'block'
        },
        colors: [{from: 0, to: 25, color: 'red'}, {from: 25, to: 100, color: 'green'}]
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
