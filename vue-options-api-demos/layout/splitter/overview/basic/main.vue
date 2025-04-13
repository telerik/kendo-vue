<template>
  <Splitter
    :style="{ height: '340px' }"
    :panes="panes"
    :orientation="'vertical'"
    @change="onChange"
  >
    <template v-slot:first>
      <Splitter :panes="innerPanes" @change="onInnerChange">
        <template v-slot:left>
          <div class="pane-content">
            <h3>Inner splitter / left pane</h3>
            <p>Resizable and collapsible.</p>
          </div>
        </template>
        <template v-slot:center>
          <div class="pane-content">
            <h3>Inner splitter / center pane</h3>
            <p>Resizable only.</p>
          </div>
        </template>
        <template v-slot:right>
          <div class="pane-content">
            <h3>Inner splitter / right pane</h3>
            <p>Resizable and collapsible.</p>
          </div>
        </template>
      </Splitter>
    </template>
    <template v-slot:second>
      <div class="pane-content">
        <h3>Outer splitter / Middle pane</h3>
        <p>Resizable only.</p>
      </div>
    </template>
    <template v-slot:third>
      <div class="pane-content">
        <h3>Outer splitter / Middle pane</h3>
        <p>Resizable only.</p>
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
        { size: '30%', resizable: false, content: 'third' },
      ],
      innerPanes: [
        { size: '20%', min: '20px', collapsible: true, content: 'left' },
        { content: 'center' },
        { size: '30%', min: '20px', collapsible: true, content: 'right' },
      ],
    };
  },
  methods: {
    onChange(event) {
      this.panes = event.newState;
    },
    onInnerChange(event) {
      this.innerPanes = event.newState;
    },
  },
};
</script>
