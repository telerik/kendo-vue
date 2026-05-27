<template>
  <Splitter
    :style="{ height: '340px' }"
    :panes="horizontalPanes"
    orientation="horizontal"
    @change="onHorizontalChange"
  >
    <template #sideBar>
      <div class="pane-content">
        <h3>Sidebar content</h3>
        <p>Collapsible. Non-resizable. Size of 200px.</p>
      </div>
    </template>
    <template #mainContent>
      <div class="pane-content">
        <h3>Main content</h3>
      </div>
    </template>
  </Splitter>
</template>

<script setup>
import { ref } from 'vue';
import { Splitter } from '@progress/kendo-vue-layout';
import './styles.css';

const horizontalPanes = ref([
    {
        size: '200px',
        collapsible: true,
        resizable: false,
        content: 'sideBar',
    },
    { content: 'mainContent' },
]);

function onHorizontalChange(event) {
    horizontalPanes.value = event.newState;
}
</script>
