<template>
    <kendo-map :center="[30.268107, -97.744821]"
               :zoom="5"
               style="width: 100%; height: 500px;">

        <kendo-map-layer :type="'tile'"
                         :url-template="'https://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png'"
                         :subdomains="['a', 'b', 'c']"
                         :attribution="'&copy; <a href=\'https://osm.org/copyright\'>OpenStreetMap contributors</a>'">
        </kendo-map-layer>
        <kendo-map-marker :location="[30.268107, -97.744821]"></kendo-map-marker>
        <kendo-map-marker :location="[32, -97.744821]"></kendo-map-marker>
        <kendo-map-marker :location="[34, -97.744821]"></kendo-map-marker>
    </kendo-map>
</template>
<script>
import { Map, MapLayer, MapMarker } from '@progress/kendo-map-vue-wrapper';

export default {
  components: {
    'kendo-map': Map,
    'kendo-map-layer': MapLayer,
    'kendo-map-marker': MapMarker
  }
}
</script>

