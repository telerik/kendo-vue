<template>
  <div>
    <div>
      <kbutton title="Tooltip message">
        I have the browser tooltip
      </kbutton>
    </div>
    <hr class="k-hr" />
    <div>
      <kbutton>I do not have a tooltip</kbutton>
    </div>
    <hr class="k-hr" />
    <div
      @mouseover="
        (event) => $refs.tooltip && $refs.tooltip.handleMouseOver(event)
      "
      @mouseout="
        (event) => $refs.tooltip && $refs.tooltip.handleMouseOut(event)
      "
    >
      <kbutton title="Tooltip message">
        I have a Kendo UI for Vue Native Tooltip
      </kbutton>
    </div>
    <hr class="k-hr" />
    <div
      @mouseover="
        (event) => $refs.tooltip && $refs.tooltip.handleMouseOver(event)
      "
      @mouseout="
        (event) => $refs.tooltip && $refs.tooltip.handleMouseOut(event)
      "
    >
      <kbutton title="Tooltip message">
        I also the same Kendo UI for Vue Native Tooltip
      </kbutton>
      <Tooltip
        ref="tooltip"
        :anchor-element="'target'"
        :position="'right'"
        :open-delay="300"
      />
    </div>
  </div>
</template>

<script>
import { Tooltip } from '@progress/kendo-vue-tooltip';
import { Button } from '@progress/kendo-vue-buttons';

export default {
  components: {
    Tooltip,
      'kbutton': Button
  },
};
</script>
<style>
.k-button-text {
  pointer-events: none;
}
</style>