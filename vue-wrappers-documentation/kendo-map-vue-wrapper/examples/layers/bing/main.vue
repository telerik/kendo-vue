<template>
  <kendo-map :center="[51.505, -0.09]"
            :zoom="3" style="width: 100%; height: 500px;">
        <kendo-map-layer :type="'bing'"
            :imagery-set="'aerialWithLabels'"
            :api-key="'AqaPuZWytKRUA8Nm5nqvXHWGL8BDCXvK8onCl2PkC581Zp3T_fYAQBiwIphJbRAK'"></kendo-map-layer>
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

