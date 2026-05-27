<template>
  <div>
    <div class="row justify-content-center">
      <div class="col" style="padding-right: 0">
        <h6>Employees</h6>
        <ListBox
          :style="{ height: '400px', width: '100%' }"
          ref="employeesListRef"
          :data-items="employees"
          :text-field="'name'"
          :selected-field="SELECTED_FIELD"
          @itemclick="itemClick"
          :toolbar="'toolbar'"
          :draggable="true"
          @dragstart="handleDragStart"
          @drop="handleDrop"
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
          ref="developersListRef"
          :style="{ height: '400px', width: '100%' }"
          :data-items="developers"
          :text-field="'name'"
          :selected-field="SELECTED_FIELD"
          @itemclick="itemClick2"
          :draggable="true"
          @dragstart="handleDragStart"
          @drop="handleDrop"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { ListBox, ListBoxToolbar, processListBoxData, processListBoxDragAndDrop } from '@progress/kendo-vue-listbox';

const developersListRef = ref(null);
const SELECTED_FIELD = 'selected';

const employees = ref([
    { name: 'Steven White', selected: true },
    { name: 'Nancy King', selected: false },
    { name: 'Nancy Davolio', selected: false },
    { name: 'Robert Davolio', selected: false },
    { name: 'Michael Leverling', selected: false },
    { name: 'Andrew Callahan', selected: false },
    { name: 'Laura Callahan', selected: false },
    { name: 'Anne Dodsworth', selected: false },
    { name: 'Janet Leverling', selected: false },
    { name: 'Margaret Peacock', selected: false },
    { name: 'Paul Henley', selected: false },
    { name: 'Lisa Davidson', selected: false },
    { name: 'Samuel Hartman', selected: false },
    { name: 'Eugene Perry', selected: false },
    { name: 'Emma Brown', selected: false },
    { name: 'Sophia Hart', selected: false },
]);

const developers = ref([
    { name: 'John Smith', selected: false },
    { name: 'Alice Johnson', selected: false },
    { name: 'James Williams', selected: false },
    { name: 'Patricia Brown', selected: false },
    { name: 'Linda Taylor', selected: false },
    { name: 'Barbara Thomas', selected: false },
    { name: 'Paul Wilson', selected: false },
    { name: 'Christopher Lewis', selected: false },
    { name: 'Dorothy Lee', selected: false },
    { name: 'David Harris', selected: false },
]);

const draggedItem = ref(null);

function itemClick(e) {
    handleItemClick(e, employees, developers);
}

function itemClick2(e) {
    handleItemClick(e, developers, employees);
}

function handleItemClick(event, data, connectedData) {
    data.value = data.value.map((item) => {
        if (item.name === event.dataItem.name) {
            item[SELECTED_FIELD] = !item[SELECTED_FIELD];
        } else if (!event.ctrlKey) {
            item[SELECTED_FIELD] = false;
        }
        return item;
    });
    connectedData.value = connectedData.value.map((item) => {
        item[SELECTED_FIELD] = false;
        return item;
    });
}

function handleToolBarClick(e) {
    const toolName = e.toolName || '';
    const result = processListBoxData(employees.value, developers.value, toolName, SELECTED_FIELD);

    employees.value = result.listBoxOneData;
    developers.value = result.listBoxTwoData;

    nextTick(() => {
        const listBoxElement = developersListRef.value?.$el;
        const listItems = listBoxElement?.querySelectorAll('.k-list-item');
        if (listItems?.length > 0) {
            listItems[listItems.length - 1].scrollIntoView({ behavior: 'smooth' });
        }
    });
}

function handleDragStart(e) {
    draggedItem.value = e.dataItem;
}

function handleDrop(e) {
    const result = processListBoxDragAndDrop(
        employees.value,
        developers.value,
        draggedItem.value,
        e.dataItem,
        'name'
    );

    employees.value = result.listBoxOneData;
    developers.value = result.listBoxTwoData;

    nextTick(() => {
        const listBoxElement = developersListRef.value?.$el;
        const listItems = listBoxElement?.querySelectorAll('.k-list-item');
        if (listItems?.length > 0) {
            listItems[listItems.length - 1].scrollIntoView({ behavior: 'smooth' });
        }
    });
}
</script>

<style>
.row {
  margin-bottom: 20px;
}
</style>
