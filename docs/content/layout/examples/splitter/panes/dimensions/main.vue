<template>
  <Splitter
    :style="{ height: '340px' }"
    :panes="horizontalPanes"
    orientation="horizontal"
    @change="onHorizontalChange"
  >
    <template #left>
      <div class="pane-content">
        <h3>Left pane</h3>
        <p>Resizable. Minimum width of 5%.</p>
      </div>
    </template>
    <template #center>
      <div class="pane-content">
        <h3>Center pane</h3>
        <p>Resizable only.</p>
      </div>
    </template>
    <template #right>
      <div class="pane-content">
        <h3>Right pane</h3>
        <p>Resizable.</p>
      </div>
    </template>
  </Splitter>
</template>

<script setup>
import { ref } from 'vue';
import { Splitter } from '@progress/kendo-vue-layout';
import './styles.css';

const horizontalPanes = ref([
    { size: '200px', min: '5%', content: 'left' },
    { content: 'center' },
    { size: '20%', content: 'right' },
]);

function onHorizontalChange(event) {
    horizontalPanes.value = event.newState;
}
</script>
