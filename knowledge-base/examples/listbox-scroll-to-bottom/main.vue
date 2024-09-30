<template>
  <div>
    <div class="row justify-content-center">
      <div class="col" style="padding-right: 0">
        <h6>Employees</h6>
        <ListBox
          :style="{ height: '400px', width: '100%' }"
          ref="employeesListRef"
          :dataItems="employees"
          :text-field="'name'"
          :selectedField="SELECTED_FIELD"
          @itemclick="itemClick"
          :toolbar="'toolbar'"
          :draggable="true"
          @dragstart="handleDragStart"
          @drop="handleDrop"
        >
          <template v-slot:toolbar>
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
              :dataItems="employees"
              :dataConnected="developers"
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
          :dataItems="developers"
          :textField="'name'"
          :selectedField="SELECTED_FIELD"
          @itemclick="itemClick2"
          :draggable="true"
          @dragstart="handleDragStart"
          @drop="handleDrop"
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
  processListBoxDragAndDrop,
} from '@progress/kendo-vue-listbox';
const SELECTED_FIELD = 'selected';

export default {
  components: {
    ListBox,
    ListBoxToolbar,
  },
  data() {
    return {
      SELECTED_FIELD,
      employees: [
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
      ],
      developers: [
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
      ],
      draggedItem: null,
    };
  },
  methods: {
    itemClick(e) {
      this.handleItemClick(e, 'employees', 'developers');
    },
    itemClick2(e) {
      this.handleItemClick(e, 'developers', 'employees');
    },
    handleItemClick(event, data, connectedData) {
      this[data] = this[data].map((item) => {
        if (item.name === event.dataItem.name) {
          item[SELECTED_FIELD] = !item[SELECTED_FIELD];
        } else if (!event.ctrlKey) {
          item[SELECTED_FIELD] = false;
        }
        return item;
      });
      this[connectedData] = this[connectedData].map((item) => {
        item[SELECTED_FIELD] = false;
        return item;
      });
    },
    handleToolBarClick(e) {
      let toolName = e.toolName || '';
      let result = processListBoxData(
        this.employees,
        this.developers,
        toolName,
        SELECTED_FIELD
      );

      this.employees = result.listBoxOneData;
      this.developers = result.listBoxTwoData;

      this.$nextTick(() => {
        if (this.$refs.developersListRef) {
          const listBoxElement = this.$refs.developersListRef.$el;
          const listItems = listBoxElement.querySelectorAll('.k-list-item');
          if (listItems.length > 0) {
            listItems[listItems.length - 1].scrollIntoView({
              behavior: 'smooth',
            });
          }
        }
      });
    },
    handleDragStart(e) {
      this.draggedItem = e.dataItem;
    },
    handleDrop(e) {
      let result = processListBoxDragAndDrop(
        this.employees,
        this.developers,
        this.draggedItem,
        e.dataItem,
        'name'
      );

      this.employees = result.listBoxOneData;
      this.developers = result.listBoxTwoData;

      this.$nextTick(() => {
        if (this.$refs.developersListRef) {
          const listBoxElement = this.$refs.developersListRef.$el;
          const listItems = listBoxElement.querySelectorAll('.k-list-item');
          if (listItems.length > 0) {
            listItems[listItems.length - 1].scrollIntoView({
              behavior: 'smooth',
            });
          }
        }
      });
    },
  },
};
</script>

<style scoped>
.row {
  margin-bottom: 20px;
}
</style>
