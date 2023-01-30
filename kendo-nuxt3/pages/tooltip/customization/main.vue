<template>
  <div>
      <div>
        <button class="k-button" title="Tooltip message">
          I have the browser tooltip
        </button>
      </div>
      <hr class="k-hr" />
      <div>
        <button class="k-button">I do not have a tooltip</button>
      </div>
      <hr class="k-hr" />
      <div
        @mouseover="handleMouseover"
        @mouseout="handleMouseout"
      >
        <button class="k-button" title="Tooltip message">
          I have a KendoReact Tooltip
        </button>
      </div>
      <hr class="k-hr" />
      <div
         @mouseover="handleMouseover"
         @mouseout="handleMouseout"
      >
        <button class="k-button" title="Tooltip message">
          I also the same KendoReact Tooltip
        </button>
        <Tooltip
          ref='tooltip'
          :anchor-element="'target'"
          :position="'right'"
          :open-delay="300"
        />
      </div>
    </div>
</template>
<script lang="ts">
import { Tooltip } from '@progress/kendo-vue-tooltip';

export default {
  components: {
    Tooltip
  },
  data() {
    return {
      status: 'closed'
    };
  },
  methods: {
    handleMouseover (event) {
        this.$refs.tooltip.handleMouseOver(event)
    },
    handleMouseout (event) {
        this.$refs.tooltip.handleMouseOut(event)
    }
  }
};
</script>
