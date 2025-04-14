<template>
  <div>
    <Tooltip
      :anchor-element="'target'"
      :open="open"
      :target-element="targetElement"
      :open-delay="1"
      :append-to="wrapper"
    >
      <div ref="wrapper">
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
          <kbutton @click="showTooltip($refs.firstElement)">
            Show Tooltip
          </kbutton>
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
          <kbutton @click="showTooltip($refs.secondElement)">
            Show Tooltip
          </kbutton>
        </p>
        <hr />
        <kbutton @click="hideTooltip">Hide Tooltip</kbutton>
      </div>
    </Tooltip>
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
  data() {
    return {
      wrapper: this.$refs.wrapper,
      open: false,
      targetElement: null,
    };
  },
  methods: {
    showTooltip(element) {
      this.open = true;
      this.targetElement = element;
    },
    hideTooltip(element) {
      this.open = false;
      this.targetElement = null;
    },
  },
};
</script>
