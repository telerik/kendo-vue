<template>
   <kendo-tooltip ref="kTooltip" id="agglomerations" :filter="'span'" :width="'120'" :position="'bottom'">
        <span href="#" title="Los Angeles - 17,100,000" id="losangeles">Los Angeles</span>
        <span href="#" title="Osaka - 16,800,000" id="osaka">Osaka</span>
        <span href="#" title="Moscow - 16,200,000" id="moscow">Moscow</span>
    </kendo-tooltip>
</template>
<script>
import { Tooltip } from '@progress/kendo-popups-vue-wrapper';

export default {
  components: {
    'kendo-tooltip': Tooltip
  }
}
</script>

