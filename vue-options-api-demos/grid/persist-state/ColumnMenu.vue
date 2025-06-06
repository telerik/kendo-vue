<template>
    <div>
      <GridColumnMenuSort
        :column="column"
        :sortable="sortable"
        :sort="sort"
        @closemenu="closeMenu"
        @sortchange="sortChange"
      />
      <GridColumnMenuFilter
        :column="column"
        :filterable="filterable"
        :filter="filter"
        @filterfocus="handleFocus"
        @closemenu="closeMenu"
        @expandchange="expandChange"
        @filterchange="filterChange"
      />
      <GridColumnMenuItemGroup>
        <GridColumnMenuItem
          :title="'Columns'"
          :icon-class="'k-i-columns'"
          @menuitemclick="onMenuItemClick"
        />
        <GridColumnMenuItemContent :show="columnsExpanded">
          <div class="k-column-list-wrapper">
            <form @submit="onSubmit" @reset="onReset">
              <div class="k-column-list">
                <div
                  :key="idx"
                  class="k-column-list-item"
                  v-for="(column, idx) in currentColumns"
                >
                  <span>
                    <input
                      :id="'column-visiblity-show-' + idx"
                      :class="'k-checkbox k-checkbox-md k-rounded-md'"
                      :type="'checkbox'"
                      :readOnly="true"
                      :disabled="!column.hidden && oneVisibleColumn"
                      :checked="!column.hidden"
                      @click="onToggleColumn(idx)"
                    />
                    <label
                      :for="'column-visiblity-show-' + idx"
                      :class="'k-checkbox-label'"
                      :style="{ userSelect: 'none' }"
                    >
                      {{ column.title }} - {{ idx }}
                    </label>
                  </span>
                </div>
              </div>
              <div class="k-columnmenu-actions">
                <kbutton type="reset">Reset</kbutton>
                <kbutton :theme-color="'primary'">Save</kbutton>
              </div>
            </form>
          </div>
        </GridColumnMenuItemContent>
      </GridColumnMenuItemGroup>
      <GridColumnMenuItemGroup>
        <GridColumnMenuItemContent :show="true">
          <div class="k-column-list-wrapper">
            <div class="k-column-list">
              <div
                @click="columnLockUnlock(true)"
                :class="['k-column-list-item', $props.locked ? 'k-disabled' : '']"
              >
                <span class="k-icon k-i-lock" /> Lock Column
              </div>
              <div
                @click="columnLockUnlock(false)"
                :class="[
                  'k-column-list-item',
                  !$props.locked ? 'k-disabled' : '',
                ]"
              >
                <span class="k-icon k-i-unlock" /> Unlock Column
              </div>
            </div>
          </div>
        </GridColumnMenuItemContent>
      </GridColumnMenuItemGroup>
    </div>
  </template>
  <script>
  import {
    GridColumnMenuFilter,
    GridColumnMenuSort,
    GridColumnMenuItemGroup,
    GridColumnMenuItemContent,
    GridColumnMenuItem,
  } from '@progress/kendo-vue-grid';
  import { Button } from '@progress/kendo-vue-buttons';

  export default {
    props: {
      column: Object,
      sortable: [Boolean, Object],
      sort: {
        type: Array,
      },
      filter: Object,
      filterable: Boolean,
      locked: Boolean,
      columns: Array,
    },
    data() {
      return {
        currentColumns: [],
        columnsExpanded: false,
        filterExpanded: false,
      };
    },
    created() {
      this.$data.currentColumns = this.$props.columns;
    },
    components: {
      GridColumnMenuSort: GridColumnMenuSort,
      GridColumnMenuFilter: GridColumnMenuFilter,
      GridColumnMenuItemGroup: GridColumnMenuItemGroup,
      GridColumnMenuItemContent: GridColumnMenuItemContent,
      GridColumnMenuItem: GridColumnMenuItem,
      kbutton: Button,
    },
    computed: {
      oneVisibleColumn() {
        return this.currentColumns.filter((c) => !c.hidden).length === 1;
      },
    },
    methods: {
      handleFocus(e) {
        this.$emit('contentfocus', e);
      },
      onToggleColumn(id) {
        this.currentColumns = this.currentColumns.map((column, idx) => {
          return idx === id ? { ...column, hidden: !column.hidden } : column;
        });
      },
      onReset(event) {
        event.preventDefault();
        const allColumns = this.$props.columns.map((col) => {
          return {
            ...col,
            hidden: false,
          };
        });

        this.currentColumns = allColumns;
        this.onSubmit();
      },
      onSubmit(event) {
        if (event) {
          event.preventDefault();
        }
        this.$emit('columnssubmit', this.currentColumns);
        this.$emit('closemenu');
      },
      onMenuItemClick() {
        const value = !this.columnsExpanded;
        this.columnsExpanded = value;
        this.filterExpanded = value ? false : this.filterExpanded;
      },
      onFilterExpandChange(value) {
        this.filterExpanded = value;
        this.columnsExpanded = value ? false : this.columnsExpanded;
      },
      expandChange() {
        this.$emit('expandchange');
      },
      closeMenu() {
        this.$emit('closemenu');
      },
      filterChange(newDescriptor, e) {
        this.$emit('filterchange', newDescriptor);
      },
      sortChange(newDescriptor, e) {
        this.$emit('sortchange', newDescriptor);
      },
      columnLockUnlock(state) {
        this.$emit('lockchange', state);
        this.$emit('closemenu');
      },
      columnShowHide(state) {
        this.$emit('visibilitychange', state);
      },
    },
  };
  </script>
