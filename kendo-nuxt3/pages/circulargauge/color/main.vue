<template>
   <div id="test-area">
      <div id="circular">
              {{circularPointer}}
              <CircularGauge :pointer="circularPointer" :style="gaugeStyles" />
      </div>
    </div>
</template>
<script lang="ts">
import { CircularGauge } from '@progress/kendo-vue-gauges';

export default {
  components: {
     CircularGauge 
  },
  computed: {
    circularPointer(){
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
