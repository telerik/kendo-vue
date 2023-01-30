<template>
  <div > 
    <Tooltip
        :anchor-element="'target'"
        :open="open"
        :target-element="targetElement"
        :open-delay="1"
                >
               <div :ref="'wrapper'">
        <p>
          Click the button to show the tooltip with&nbsp;
          <a
            ref="firstElement"
            href="http://example.com/first"
            title="http://example.com/first"
          >
            first link
          </a>
          &nbsp; as an anchor.
          <button
            class="k-button"
            @click="showTooltip('firstElement')"
          >
            Show Tooltip
          </button>
        </p>
        <p>
          Click the button to show the tooltip with&nbsp;
          <a
            ref="secondElement"
            href="http://example.com/second"
            title="http://example.com/second"
          >
            second link
          </a>
          &nbsp; as an anchor.
          <button
            class="k-button"
            @click="showTooltip('secondElement')"
          >
            Show Tooltip
          </button>
        </p>
        <hr />
        <button
          class="k-button"
          @click="hideTooltip"
        >
          Hide Tooltip
        </button>
      </div>
            </Tooltip>
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
      targetElement: null,
      open: false
    };
  },
  methods: {
      showTooltip (element) {
         console.log('showTooltip');
        this.open = true;
        this.targetElement = this.$refs[element];
      },
      hideTooltip () {
        console.log('hideTooltip');
        this.open = false;
        this.targetElement = null;
      }
  }
};
</script>
