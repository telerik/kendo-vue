<template>
  <Grid
    ref="grid"
    :style="{ height: '440px' }"
    :data-items="gridData"
    :row-height="rowHeight"
    :cell-render="'cellRenderTemplate'"
    :columns="columns"
  >
    <template v-slot:cellRenderTemplate="{ props }">
      <td
        v-if="props.dataItem.locked || props.field === 'locked'"
        :style="[
          {
            top: getTop(props.dataItem) + 'px',
            bottom: getBottom(props.dataItem) + 'px',
            'text-align': centerText(props.field),
          },
        ]"
        :class="classNames(props.dataItem, props.className)"
        @click="handleLockRowChange(props.dataItem) && props.field === 'locked'"
      >
        <SvgIcon
          v-if="props.dataItem.locked && props.field === 'locked'"
          :icon="pinIcon"
        />
        <SvgIcon
          v-else-if="!props.dataItem.locked && props.field === 'locked'"
          :icon="unpinIcon"
        />
        <span v-else> {{ getNestedValue(props.field, props.dataItem) }} </span>
      </td>
      <td v-else>
        {{ getNestedValue(props.field, props.dataItem) }}
      </td>
    </template>
  </Grid>
</template>
<script>
import { Grid, GridToolbar, GridNoRecords } from '@progress/kendo-vue-grid';
import { SvgIcon } from '@progress/kendo-vue-common';
import { pinIcon, unpinIcon } from '@progress/kendo-svg-icons';
import products from './products.json';
import { Button } from '@progress/kendo-vue-buttons';
import { process } from '@progress/kendo-data-query';
import { filterBy } from '@progress/kendo-data-query';
const ADJUST_PADDING = 4;
const COLUMN_MIN = 4;
let minGridWidth = 0;
const columnsData = [
  { field: 'locked', filterable: false, minWidth: 50 },
  {
    field: 'ProductID',
    filterable: false,
    editable: false,
    title: 'ID',
    minWidth: 45,
  },
  { field: 'ProductName', title: 'Name', minWidth: 350 },
  {
    field: 'UnitPrice',
    filter: 'numeric',
    title: 'Unit Price',
    minWidth: 120,
  },
  {
    field: 'UnitsInStock',
    title: 'Units',
    filter: 'numeric',
    minWidth: 100,
    editor: 'numeric',
  },
  {
    field: 'Discontinued',
    title: 'Discontinued',
    editor: 'boolean',
    minWidth: 150,
  },
];
const filterDescriptorLocked = {
  logic: 'and',
  filters: [
    {
      field: 'locked',
      operator: 'eq',
      value: true,
    },
  ],
};
export default {
  components: {
    Grid: Grid,
    'grid-toolbar': GridToolbar,
    'grid-norecords': GridNoRecords,
    kbutton: Button,
    SvgIcon,
  },
  mounted() {
    this.grid = document.querySelector('.k-grid');
    window.addEventListener('resize', this.handleResize);
    columnsData.map((item) => {
      return (minGridWidth += item.minWidth);
    });
    this.gridCurrent = this.grid.offsetWidth;
    this.setMinWidth = this.grid.offsetWidth < minGridWidth;
    this.defineColumns();
  },
  data: function () {
    return {
      gridData: [],
      allLockedRows: [],
      rowHeight: 50,
      columns: [],
      setMinWidth: false,
      gridCurrent: 0,
      gridData: products,
      pinIcon,
      unpinIcon,
    };
  },
  methods: {
    handleLockRowChange(dataItem) {
      let itemIndex = this.gridData.findIndex(
        (item) => item.ProductID === dataItem.ProductID
      );
      let newData = [...this.gridData];
      newData[itemIndex].locked = !newData[itemIndex].locked;
      this.gridData = newData;
      this.allLockedRows = filterBy(newData, filterDescriptorLocked);
    },
    getNestedValue(fieldName, dataItem) {
      const path = fieldName.split('.');
      let data = dataItem;
      path.forEach((p) => {
        data = data ? data[p] : undefined;
      });
      return data;
    },
    getTop(dataItem) {
      const indexOfLockedItem = this.allLockedRows.findIndex(
        (item) => dataItem.ProductID === item.ProductID
      );
      return indexOfLockedItem * this.rowHeight;
    },
    getBottom(dataItem) {
      const indexOfLockedItem = this.allLockedRows.findIndex(
        (item) => dataItem.ProductID === item.ProductID
      );
      const numberOfLockedRows = this.allLockedRows.length;
      return (numberOfLockedRows - indexOfLockedItem - 1) * this.rowHeight;
    },
    classNames(dataItem, className) {
      return dataItem.locked ? className + ' k-grid-row-sticky' : className;
    },
    centerText(field) {
      return field === 'locked' ? 'center' : '';
    },
    defineColumns() {
      this.columns = columnsData.map((column, index) => {
        return {
          field: column.field,
          title: column.title,
          width: this.setWidth(column.minWidth),
        };
      });
    },
    handleResize() {
      if (this.grid.offsetWidth < minGridWidth && !this.setMinWidth) {
        this.setMinWidth = true;
      } else if (this.grid.offsetWidth > minGridWidth) {
        this.gridCurrent = this.grid.offsetWidth;
        this.setMinWidth = false;
      }
      this.defineColumns();
    },
    setWidth(minWidth) {
      let width = this.setMinWidth
        ? minWidth
        : minWidth + (this.gridCurrent - minGridWidth) / this.columns.length;
      width < COLUMN_MIN ? width : (width -= ADJUST_PADDING);
      return width;
    },
  },
};
</script>
