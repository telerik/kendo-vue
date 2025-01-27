<template>
     <kendo-map :center="[30.268107, -97.744821]"
            :zoom="15" style="width: 100%; height: 500px;">

        <kendo-map-layer :type="'tile'"
            :url-template="'http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png'"
            :subdomains="['a', 'b', 'c']"
            :attribution="'&copy; <a href=\'http://osm.org/copyright\'>OpenStreetMap contributors</a>'" ></kendo-map-layer>

        <kendo-map-layer :type="'marker'"
            :data-source="markers"
            :location-field="'latlng'"
            :title-field="'name'"></kendo-map-layer>
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
            // https://demos.telerik.com/kendo-ui/map/remote-markers
            markers: [{
                    latlng: [ 30.2675, -97.7409 ],
                    name: 'Zevo Toys'
                },{
                    latlng: [ 30.2707, -97.7490 ],
                    name: 'Foo Bars'
                },{
                    latlng: [ 30.2705, -97.7409 ],
                    name: 'Mainway Toys'
                },{
                    latlng: [ 30.2686, -97.7494 ],
                    name: 'Acme Toys'
            }]
        }
    }
}
</script>

