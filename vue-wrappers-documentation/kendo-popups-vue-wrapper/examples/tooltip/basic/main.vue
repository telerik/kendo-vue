<template>
   <div :style="{ width: '150px' }">
    <kendo-tooltip id="tooltip"
                   title="Tooltip content"
                   :position="'right'">
        Hover me
    </kendo-tooltip>
</div>
</template>
<script>
import { Tooltip } from '@progress/kendo-popups-vue-wrapper';

export default {
  components: {
    'kendo-tooltip': Tooltip
  }
}
</script>

