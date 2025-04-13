<template>
  <div class="container">
    <div class="row justify-content-between">
      <div class="col" style="padding-right: 0">
        <h6>To Do</h6>
        <ListBox
          :style="{ height: '350px', width: '100%' }"
          :dataItems="toDo"
          :text-field="'name'"
          :selectedField="SELECTED_FIELD"
          @itemclick="itemClick1"
          :toolbar="'toolbar'"
        >
          <template v-slot:toolbar>
            <ListBoxToolbar
              :tools="toolbarTools"
              :dataItems="toDo"
              :dataConnected="inDevelopment"
              @toolclick="handleToolBarClick1"
            />
          </template>
        </ListBox>
      </div>
      <div class="col" style="padding-right: 0; padding-left: 10px">
        <h6>In Development</h6>
        <ListBox
          :style="{ height: '350px', width: '100%' }"
          :dataItems="inDevelopment"
          :text-field="'name'"
          :selectedField="SELECTED_FIELD"
          @itemclick="itemClick2"
          :toolbar="'toolbar'"
        >
          <template v-slot:toolbar>
            <ListBoxToolbar
              :tools="toolbarTools"
              :dataItems="inDevelopment"
              :dataConnected="shipped"
              @toolclick="handleToolBarClick2"
            />
          </template>
        </ListBox>
      </div>
      <div class="col" style="padding-right: 0; padding-left: 10px">
        <h6>Shipped</h6>
        <ListBox
          :style="{ height: '350px', width: '100%' }"
          :dataItems="shipped"
          :text-field="'name'"
          :selectedField="SELECTED_FIELD"
          @itemclick="itemClick3"
        />
      </div>
    </div>
  </div>
</template>
<script>
import {
  ListBox,
  ListBoxToolbar,
  processListBoxData,
} from '@progress/kendo-vue-listbox';
const toDo = [
  { name: 'SpreadSheet', selected: false },
  { name: 'PivotGrid', selected: false },
];

const inDevelopment = [
  { name: 'TileLayout', selected: false },
  { name: 'MultiColumnComboBox', selected: false },
];

const shipped = [
  { name: 'Grid', selected: false },
  { name: 'Scheduler', selected: false },
];

const SELECTED_FIELD = 'selected';

const toolbarTools = [
  'moveUp',
  'moveDown',
  'transferTo',
  'transferFrom',
  'transferAllTo',
  'transferAllFrom',
  'remove',
];
export default {
  components: {
    ListBox,
    ListBoxToolbar,
  },
  data() {
    return {
      toolbarTools,
      SELECTED_FIELD,
      toDo,
      inDevelopment,
      shipped,
    };
  },
  methods: {
    itemClick1(e) {
      this.handleItemClick(e, 'toDo', 'inDevelopment', 'shipped');
    },
    itemClick2(e) {
      this.handleItemClick(e, 'inDevelopment', 'toDo', 'shipped');
    },
    itemClick3(e) {
      this.handleItemClick(e, 'shipped', 'inDevelopment', 'toDo');
    },
    handleItemClick(event, data, connectedData, secondConnectedData) {
      (this[data] = this[data].map((item) => {
        if (item.name === event.dataItem.name) {
          item[SELECTED_FIELD] = !item[SELECTED_FIELD];
        } else if (!event.event.ctrlKey) {
          item[SELECTED_FIELD] = false;
        }
        return item;
      })),
        (this[connectedData] = this[connectedData].map((item) => {
          item[SELECTED_FIELD] = false;
          return item;
        })),
        (this[secondConnectedData] = this[secondConnectedData].map((item) => {
          item[SELECTED_FIELD] = false;
          return item;
        }));
    },
    handleToolBarClick1(e) {
      this.toolBarClick(e, 'toDo', 'inDevelopment');
    },
    handleToolBarClick2(e) {
      this.toolBarClick(e, 'inDevelopment', 'shipped');
    },
    toolBarClick(e, from, to) {
      let toolName = e.toolName || '';
      let result = processListBoxData(
        this[from],
        this[to],
        toolName,
        SELECTED_FIELD
      );

      this[from] = result.listBoxOneData;
      this[to] = result.listBoxTwoData;
    },
  },
};
</script>
