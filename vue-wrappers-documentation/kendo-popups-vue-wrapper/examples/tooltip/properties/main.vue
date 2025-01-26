<template>
   <div id="vueapp" class="vue-app" style="width: 140px">
    <kendo-tooltip :width="'100'"
                   :height="'100'"
                   :position="'bottom'"
                   :auto-hide="'false'"
                   show-on="click"
                   :content="getContent">
        Click Here
    </kendo-tooltip>
</div>
</template>
<script>
import { Tooltip } from '@progress/kendo-popups-vue-wrapper';

export default {
  components: {
    'kendo-tooltip': Tooltip
  },
    methods: {
      getContent () {
          return "custom text";
      }
    }
}
</script>

