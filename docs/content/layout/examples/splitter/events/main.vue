<template>
  <div>
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
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Splitter } from '@progress/kendo-vue-layout';
import Logger from './Logger.vue';
import './styles.css';

const events = ref([]);

const panes = ref([
    { size: '40%', containsSplitter: true, content: 'first' },
    { content: 'second' },
    { size: '30%', resizable: false, content: 'third' },
]);

const innerPanes = ref([
    {
        size: '20%',
        min: '20px',
        collapsible: true,
        content: 'left',
        collapsed: false,
    },
    { content: 'center' },
    {
        size: '30%',
        min: '20px',
        collapsible: true,
        content: 'right',
        collapsed: false,
    },
]);

const eventsList = computed(() => events.value);

function trackOuterChanges(event) {
    event.newState.forEach((pane, index) => {
        if (
            pane.collapsed !== panes.value[index].collapsed &&
      panes.value[index].collapsed !== undefined
        ) {
            events.value.unshift(
                "Pane '" +
          index +
          "' with a " +
          pane.orientation +
          ' orientation' +
          getExpandedCollapsedText(pane.collapsed)
            );
        } else if (
            pane.size !== panes.value[index].size &&
      panes.value[index].size !== undefined
        ) {
            events.value.unshift(
                "Outer pane '" +
          index +
          "' with a " +
          pane.orientation +
          ' orientation was resized'
            );
        }
    });
}

function trackInnerChanges(event) {
    event.newState.forEach((pane, index) => {
        if (
            pane.collapsed !== innerPanes.value[index].collapsed &&
      innerPanes.value[index].collapsed !== undefined
        ) {
            events.value.unshift(
                "Pane '" +
          index +
          "' with a " +
          pane.orientation +
          ' orientation' +
          getExpandedCollapsedText(pane.collapsed)
            );
        } else if (
            pane.size !== innerPanes.value[index].size &&
      innerPanes.value[index].size !== undefined
        ) {
            events.value.unshift(
                "Inner pane '" +
          index +
          "' with a " +
          pane.orientation +
          ' orientation was resized'
            );
        }
    });
}

function onChange(event) {
    trackOuterChanges(event);
    panes.value = event.newState;
}

function onInnerChange(event) {
    trackInnerChanges(event);
    innerPanes.value = event.newState;
}

function getExpandedCollapsedText(value) {
    return value ? ' was collapsed' : ' was expanded';
}
</script>
