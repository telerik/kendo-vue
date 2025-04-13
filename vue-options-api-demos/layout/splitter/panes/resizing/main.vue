<template>
  <Splitter
    :style="{ height: '340px' }"
    :panes="horizontalPanes"
    :orientation="'horizontal'"
    @change="onHorizontalChange"
  >
    <template v-slot:left>
      <div class="pane-content">
        <h3>Left pane</h3>
        <p>Resizable. Default size of 200px.</p>
      </div>
    </template>
    <template v-slot:center>
      <div class="pane-content">
        <h3>Center pane</h3>
        <p>Resizable only.</p>
      </div>
    </template>
    <template v-slot:right>
      <div class="pane-content">
        <h3>Right pane</h3>
        <p>Non-resizable. Size of 20%.</p>
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
        { size: '200px', content: 'left' },
        { content: 'center' },
        { size: '20%', resizable: false, content: 'right' },
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
