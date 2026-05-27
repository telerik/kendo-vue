---
title: Splitter
description: "Learn how to build custom functionality when working with the Vue Layout by Kendo UI with the help of the Splitter."
api_reference: true
type: inner_api
slug: api_layout_splitter
---

# Splitter
Represents the [Kendo UI for Vue Native Splitter component]({% slug overview_splitter %}).

```js-no-run
<template>
  <Splitter
    :style="{ height: '340px' }"
    :panes="panes"
    :orientation="'vertical'"
    @change="onChange"
  >
    <template v-slot:first>
      <div class="pane-content">
        <h3>Top Pane</h3>
      </div>
    </template>
    <template v-slot:second>
      <div class="pane-content">
        <h3>Bottom Pane</h3>
      </div>
    </template>
  </Splitter>
</template>

<script>
import { Splitter } from '@progress/kendo-vue-layout';
import './styles.css';

export default {
  components: {
    Splitter,
  },
  data() {
    return {
      panes: [
        { size: '40%', containsSplitter: true, content: 'first' },
        { content: 'second' },
      ],
    };
  },
  methods: {
    onChange(event) {
      this.panes = event.newState;
    },
  },
};
</script>
```



### props <span class='code'>Readonly&lt;[SplitterProps]({% slug api_layout_splitterprops %})</span>
The props of the Splitter component.



