<template>
<div>
    <div class="col-sm-12 col-md-5 example-col">
           <lineargauge :gauge-area-width="300"
                              :scale-major-unit="20"
                              :scale-minor-unit="2"
                              :scale-min="0"
                              :scale-max="180"
                              :scale-vertical="true"
                              :scale-ranges="[{
                                      from: 0,
                                      to: 20,
                                      color: '#2798df'
                                  }, {
                                      from: 50,
                                      to: 80,
                                      color: '#ffc700'
                                  }, {
                                      from: 80,
                                      to: 180,
                                      color: '#c20000'
                                  }]">
                <lineargauge-pointer :value="bluePointer" :color="'blue'"></lineargauge-pointer>
                <lineargauge-pointer :value="redPointer" :color="'red'"></lineargauge-pointer>
            </lineargauge>
    </div>
    <div class="col-sm-12 col-md-5 example-col">
           <radialgauge :gauge-area-width="300"
                              :scale-minor-unit="5"
                              :scale-start-angle="-30"
                              :scale-end-angle="210"
                              :scale-max="180">
                <radialgauge-pointer :value="bluePointer" :color="'blue'"></radialgauge-pointer>
                <radialgauge-pointer :value="redPointer" :color="'red'"></radialgauge-pointer>
            </radialgauge>
    </div>
</div>
</template>
<script>
import { LinearGauge, LinearGaugePointer, RadialGauge, RadialGaugePointer } from '@progress/kendo-gauges-vue-wrapper';

export default {
name: 'App',
components: {
  'lineargauge': LinearGauge,
  'lineargauge-pointer':LinearGaugePointer,
  'radialgauge': RadialGauge,
  'radialgauge-pointer': RadialGaugePointer
},
  data: function() {
        return {
            bluePointer: 65,
            redPointer: 30
        }
    } 
}
</script>
