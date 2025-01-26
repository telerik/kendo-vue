<template>
    <kendo-map :center="[20,20]">

       <kendo-map-layer :type="'shape'"
            :data-source="geoJsonData"
            :style-fill-color="'red'"
            :style-fill-opacity="1"
            :style-stroke-color="'green'"
            :style-stroke-width="4"
            :style-stroke-dash-type="'longDashDot'"
            :style-stroke-opacity="0.5">
        </kendo-map-layer>
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
            // https://demos.telerik.com/kendo-ui/map/geojson
            geoJsonData: [{
                type: 'Polygon',
                coordinates: [
                    [[30, 10], [40, 40], [20, 40], [10, 20], [30, 10]]
                ]
            }]
        }
    }
}
</script>

