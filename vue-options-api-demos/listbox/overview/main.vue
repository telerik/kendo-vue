<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col" style="padding-right: 0">
          <h6>Employees</h6>
          <ListBox
            :style="{ height: '400px', width: '100%' }"
            :dataItems="employees"
            :text-field="'name'"
            :selectedField="SELECTED_FIELD"
            @itemclick="itemClick"
            :toolbar="'toolbar'"
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
            :style="{ height: '400px', width: '100%' }"
            :dataItems="developers"
            :textField="'name'"
            :selectedField="SELECTED_FIELD"
            @itemclick="itemClick2"
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
  const SELECTED_FIELD = 'selected';
  import { data } from './data';
  export default {
    components: {
      ListBox,
      ListBoxToolbar,
    },
    data() {
      return {
        SELECTED_FIELD,
        employees: data,
        developers: [],
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
      },
    },
  };
  </script>
  