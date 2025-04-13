<template>
  <p style="font-weight: 600">Horizontal orientation:</p>
  <Splitter
    :style="{ height: '340px' }"
    :panes="horizontalPanes"
    :orientation="'horizontal'"
    @change="onHorizontalChange"
  >
    <template v-slot:left>
      <div class="pane-content">
        <h3>Left pane</h3>
        <p>Resizable and collapsible.</p>
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
        <p>Resizable and collapsible.</p>
      </div>
    </template>
  </Splitter>
  <br />
  <p style="font-weight: 600">Vertical orientation:</p>
  <Splitter
    :style="{ height: '340px' }"
    :panes="verticalPanes"
    :orientation="'vertical'"
    @change="onVerticalChange"
  >
    <template v-slot:top>
      <div class="pane-content">
        <h3>Top pane</h3>
        <p>Resizable and collapsible.</p>
      </div>
    </template>
    <template v-slot:center>
      <div class="pane-content">
        <h3>Center pane</h3>
        <p>Resizable only.</p>
      </div>
    </template>
    <template v-slot:bottom>
      <div class="pane-content">
        <h3>Bottom pane</h3>
        <p>Resizable and collapsible.</p>
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
        { size: '30%', content: 'left', collapsible: true },
        { content: 'center' },
        { size: '30%', collapsible: true, content: 'right' },
      ],
      verticalPanes: [
        { size: '20%', min: '20px', collapsible: true, content: 'top' },
        { content: 'center' },
        { size: '30%', min: '20px', collapsible: true, content: 'bottom' },
      ],
    };
  },
  methods: {
    onHorizontalChange(event) {
      this.horizontalPanes = event.newState;
    },
    onVerticalChange(event) {
      this.verticalPanes = event.newState;
    },
  },
};
</script>
