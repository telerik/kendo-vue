<template>
  <Splitter
    :style="{ height: '340px' }"
    :panes="horizontalPanes"
    :orientation="'horizontal'"
    @change="onHorizontalChange"
  >
    <template v-slot:sideBar>
      <div class="pane-content">
        <h3>Sidebar content</h3>
        <p>Collapsible. Non-resizable. Size of 200px.</p>
      </div>
    </template>
    <template v-slot:mainContent>
      <div class="pane-content">
        <h3>Main content</h3>
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
      horizontalPanes: [
        {
          size: '200px',
          collapsible: true,
          resizable: false,
          content: 'sideBar',
        },
        { content: 'mainContent' },
      ],
    };
  },
  methods: {
    onHorizontalChange(event) {
      this.horizontalPanes = event.newState;
    },
  },
};
</script>
