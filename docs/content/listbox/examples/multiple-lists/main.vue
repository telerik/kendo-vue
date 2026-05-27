<template>
  <div class="container">
    <div class="row justify-content-between">
      <div class="col" style="padding-right: 0">
        <h6>To Do</h6>
        <ListBox
          :style="{ height: '350px', width: '100%' }"
          :data-items="toDo"
          :text-field="'name'"
          :selected-field="SELECTED_FIELD"
          @itemclick="itemClick1"
          :toolbar="'toolbar'"
        >
          <template #toolbar>
            <ListBoxToolbar
              :tools="toolbarTools"
              :data-items="toDo"
              :data-connected="inDevelopment"
              @toolclick="handleToolBarClick1"
            />
          </template>
        </ListBox>
      </div>
      <div class="col" style="padding-right: 0; padding-left: 10px">
        <h6>In Development</h6>
        <ListBox
          :style="{ height: '350px', width: '100%' }"
          :data-items="inDevelopment"
          :text-field="'name'"
          :selected-field="SELECTED_FIELD"
          @itemclick="itemClick2"
          :toolbar="'toolbar'"
        >
          <template #toolbar>
            <ListBoxToolbar
              :tools="toolbarTools"
              :data-items="inDevelopment"
              :data-connected="shipped"
              @toolclick="handleToolBarClick2"
            />
          </template>
        </ListBox>
      </div>
      <div class="col" style="padding-right: 0; padding-left: 10px">
        <h6>Shipped</h6>
        <ListBox
          :style="{ height: '350px', width: '100%' }"
          :data-items="shipped"
          :text-field="'name'"
          :selected-field="SELECTED_FIELD"
          @itemclick="itemClick3"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ListBox, ListBoxToolbar, processListBoxData } from '@progress/kendo-vue-listbox';

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

const toDo = ref([
    { name: 'SpreadSheet', selected: false },
    { name: 'PivotGrid', selected: false },
]);

const inDevelopment = ref([
    { name: 'TileLayout', selected: false },
    { name: 'MultiColumnComboBox', selected: false },
]);

const shipped = ref([
    { name: 'Grid', selected: false },
    { name: 'Scheduler', selected: false },
]);

function handleItemClick(event, data, connectedData, secondConnectedData) {
    data.value = data.value.map((item) => {
        if (item.name === event.dataItem.name) {
            item[SELECTED_FIELD] = !item[SELECTED_FIELD];
        } else if (!event.event.ctrlKey) {
            item[SELECTED_FIELD] = false;
        }
        return item;
    });
    connectedData.value = connectedData.value.map((item) => {
        item[SELECTED_FIELD] = false;
        return item;
    });
    secondConnectedData.value = secondConnectedData.value.map((item) => {
        item[SELECTED_FIELD] = false;
        return item;
    });
}

function itemClick1(e) {
    handleItemClick(e, toDo, inDevelopment, shipped);
}

function itemClick2(e) {
    handleItemClick(e, inDevelopment, toDo, shipped);
}

function itemClick3(e) {
    handleItemClick(e, shipped, inDevelopment, toDo);
}

function toolBarClick(e, from, to) {
    const toolName = e.toolName || '';
    const result = processListBoxData(from.value, to.value, toolName, SELECTED_FIELD);

    from.value = result.listBoxOneData;
    to.value = result.listBoxTwoData;
}

function handleToolBarClick1(e) {
    toolBarClick(e, toDo, inDevelopment);
}

function handleToolBarClick2(e) {
    toolBarClick(e, inDevelopment, shipped);
}
</script>
