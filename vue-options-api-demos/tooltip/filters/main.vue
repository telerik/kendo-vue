<template>
  <div>
    <Tooltip
      :filter="filterElements"
      :anchor-еlement="'target'"
      :paren-title="true"
    >
      <div>
        <p title="test">
          <span>In this demo, the</span>
          <strong title="this is the tooltip">
            &nbsp;Kendo UI for Vue Native Tooltip&nbsp;
          </strong>
          will show only when you hover &nbsp;<code>&lt;strong&gt;</code>&nbsp;
          <strong title="because the 'filter' property is set">elements</strong>
          .
        </p>
        <p>
          Other elements, like
          <a href="#" title="Default browser tooltip"> &nbsp;this link </a>
          , will only show the default browser tooltip, even though they have a
          specified
          <code>&nbsp;title&nbsp;</code>
          attribute.
        </p>
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
  methods: {
    filterElements(element) {
      if (element.tagName === 'STRONG') {
        return true;
      }
      return false;
    },
  },
};
</script>
