<template>
  <div>
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
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>

<script>
import { Splitter } from '@progress/kendo-vue-layout';
import Logger from './Logger.vue';
import './styles.css';

export default {
  components: {
    Splitter,
    Logger,
  },
  computed: {
    eventsList() {
      return this.events;
    },
  },
  data: function () {
    return {
      events: [],
      panes: [
        { size: '40%', containsSplitter: true, content: 'first' },
        { content: 'second' },
        { size: '30%', resizable: false, content: 'third' },
      ],
      innerPanes: [
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
      ],
    };
  },
  methods: {
    trackOuterChanges(event) {
      event.newState.forEach((pane, index) => {
        if (
          pane.collapsed !== this.panes[index].collapsed &&
          this.panes[index].collapsed !== undefined
        ) {
          this.events.unshift(
            "Pane '" +
              index +
              "' with a " +
              pane.orientation +
              ' orientation' +
              this.getExpandedCollapsedText(pane.collapsed)
          );
        } else if (
          pane.size !== this.panes[index].size &&
          this.panes[index].size !== undefined
        ) {
          this.events.unshift(
            "Outer pane '" +
              index +
              "' with a " +
              pane.orientation +
              ' orientation was resized'
          );
        }
      });
    },
    trackInnerChanges(event) {
      event.newState.forEach((pane, index) => {
        if (
          pane.collapsed !== this.innerPanes[index].collapsed &&
          this.innerPanes[index].collapsed !== undefined
        ) {
          this.events.unshift(
            "Pane '" +
              index +
              "' with a " +
              pane.orientation +
              ' orientation' +
              this.getExpandedCollapsedText(pane.collapsed)
          );
        } else if (
          pane.size !== this.innerPanes[index].size &&
          this.innerPanes[index].size !== undefined
        ) {
          this.events.unshift(
            "Inner pane '" +
              index +
              "' with a " +
              pane.orientation +
              ' orientation was resized'
          );
        }
      });
    },
    onChange(event) {
      this.trackOuterChanges(event);
      this.panes = event.newState;
    },
    onInnerChange(event) {
      this.trackInnerChanges(event);
      this.innerPanes = event.newState;
    },
    getExpandedCollapsedText(value) {
      return value ? ' was collapsed' : ' was expanded';
    },
  },
};
</script>
