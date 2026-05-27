<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col" style="padding-right: 0">
        <h6>Employees</h6>
        <ListBox
          :style="{ height: '400px', width: '100%' }"
          :data-items="employees"
          :text-field="'name'"
          :selected-field="SELECTED_FIELD"
          @itemclick="itemClick"
          :toolbar="'toolbar'"
        >
          <template #toolbar>
            <ListBoxToolbar
              :tools="[
                'moveUp',
                'moveDown',
                'transferTo',
                'transferFrom',
                'transferAllTo',
                'transferAllFrom',
                'remove',
              ]"
              :data-items="employees"
              :data-connected="developers"
              @toolclick="handleToolBarClick"
            />
          </template>
        </ListBox>
      </div>
      <div class="col" style="padding-right: 0; padding-left: 9px">
        <h6>Developers</h6>
        <ListBox
          :style="{ height: '400px', width: '100%' }"
          :data-items="developers"
          :text-field="'name'"
          :selected-field="SELECTED_FIELD"
          @itemclick="itemClick2"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ListBox, ListBoxToolbar, processListBoxData } from '@progress/kendo-vue-listbox';
import { data } from './data';

const SELECTED_FIELD = 'selected';
const employees = ref(data);
const developers = ref([]);

function handleItemClick(event, data, connectedData) {
    data.value = data.value.map((item) => {
        if (item.name === event.dataItem.name) {
            item[SELECTED_FIELD] = !item[SELECTED_FIELD];
        } else if (!event.event.ctrlKey && !event.event.metaKey) {
            item[SELECTED_FIELD] = false;
        }
        return item;
    });
    connectedData.value = connectedData.value.map((item) => {
        item[SELECTED_FIELD] = false;
        return item;
    });
}

function itemClick(e) {
    handleItemClick(e, employees, developers);
}

function itemClick2(e) {
    handleItemClick(e, developers, employees);
}

function handleToolBarClick(e) {
    const toolName = e.toolName || '';
    const result = processListBoxData(employees.value, developers.value, toolName, SELECTED_FIELD);

    employees.value = result.listBoxOneData;
    developers.value = result.listBoxTwoData;
}
</script>
