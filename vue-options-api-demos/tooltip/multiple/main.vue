<template>
  <div>
    <Tooltip :open-delay="100" :position="'right'" :anchor-element="'target'">
      <div
        :style="{
          'text-align': 'center',
        }"
      >
        <span title="This is with position right">
          This is the first Tooltip with position right.
        </span>
      </div>
    </Tooltip>
    <br />
    <Tooltip :open-delay="100" :position="'left'" :anchor-element="'target'">
      <div
        :style="{
          'text-align': 'center',
        }"
      >
        <span title="This is with position left">
          This is the second Tooltip with position left.
        </span>
      </div>
    </Tooltip>
  </div>
</template>

<script>
import { Tooltip } from '@progress/kendo-vue-tooltip';

export default {
  components: {
    Tooltip,
  },
};
</script>
