<template>
  <Splitter
    :style="{ height: '340px' }"
    :panes="panes"
    orientation="vertical"
    @change="onChange"
  >
    <template #first>
      <Splitter :panes="innerPanes" @change="onInnerChange">
        <template #left>
          <div class="pane-content">
            <h3>Inner splitter / left pane</h3>
            <p>Resizable and collapsible.</p>
          </div>
        </template>
        <template #center>
          <div class="pane-content">
            <h3>Inner splitter / center pane</h3>
            <p>Resizable only.</p>
          </div>
        </template>
        <template #right>
          <div class="pane-content">
            <h3>Inner splitter / right pane</h3>
            <p>Resizable and collapsible.</p>
          </div>
        </template>
      </Splitter>
    </template>
    <template #second>
      <div class="pane-content">
        <h3>Outer splitter / Middle pane</h3>
        <p>Resizable only.</p>
      </div>
    </template>
    <template #third>
      <div class="pane-content">
        <h3>Outer splitter / Middle pane</h3>
        <p>Resizable only.</p>
      </div>
    </template>
  </Splitter>
</template>

<script setup>
import { ref } from 'vue';
import { Splitter } from '@progress/kendo-vue-layout';
import './styles.css';

const panes = ref([
    { size: '40%', containsSplitter: true, content: 'first' },
    { content: 'second' },
    { size: '30%', resizable: false, content: 'third' },
]);

const innerPanes = ref([
    { size: '20%', min: '20px', collapsible: true, content: 'left' },
    { content: 'center' },
    { size: '30%', min: '20px', collapsible: true, content: 'right' },
]);

function onChange(event) {
    panes.value = event.newState;
}

function onInnerChange(event) {
    innerPanes.value = event.newState;
}
</script>
