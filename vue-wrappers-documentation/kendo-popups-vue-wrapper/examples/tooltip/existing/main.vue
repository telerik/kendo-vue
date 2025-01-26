<template>
<div  :style="{ width: '140px' }">
    <kendo-tooltip ref="kTooltip"
                   id="agglomerations"
                   :filter="'p'"
                   :width="'140'"
                   :position="'right'">
        <p href="#" title="Peter Anders" id="peter">Peter</p>
        <p href="#" title="Frank Robertson" id="frank">Frank</p>
        <p href="#" title="Michael Daniels" id="michael">Michael</p>
    </kendo-tooltip>
  </div>
</template>
<script>
import { Tooltip } from '@progress/kendo-popups-vue-wrapper';

export default {
  components: {
    'kendo-tooltip': Tooltip
  },
  mounted () {
      this.$refs.kTooltip.kendoWidget().show(kendo.jQuery('#michael'))
  }
}
</script>

