<template>
    <kendo-map :center="[10,10]" style="width: 100%; height: 500px;">

        <kendo-map-layer :type="'bubble'" :symbol="'circle'"
            :data-source="circleBubble"></kendo-map-layer>

        <kendo-map-layer :type="'bubble'" :symbol="'square'"
            :data-source="squareBubble"></kendo-map-layer>
    </kendo-map>
</template>
<script>
import { Map, MapLayer, MapMarker } from '@progress/kendo-map-vue-wrapper';

export default {
  components: {
    'kendo-map': Map,
    'kendo-map-layer': MapLayer,
    'kendo-map-marker': MapMarker
  },
  data () {
        return {
            // The data set can be also fetched with the kendo.data.DataSource utility.
            // https://demos.telerik.com/kendo-ui/map/bubble-layer
            circleBubble: [{
                    location: [0, 0], value: 10
                }, {
                    location: [0, 20], value: 25
            }],
            squareBubble: [{
                    location: [20, 0], value: 10
                }, {
                    location: [20, 20], value: 25
            }]
        }
    }
}
</script>

