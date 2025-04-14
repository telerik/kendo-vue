<template>
  <Grid
    ref="grid"
    :style="{ height: '320px' }"
    :data-items="result"
    :edit-field="'inEdit'"
    :sortable="true"
    :sort="sort"
    :filterable="true"
    :filter="filter"
    :pageable="true"
    :skip="skip"
    :take="take"
    @rowclick="rowClick"
    @sortchange="sortChangeHandler"
    @filterchange="filterChangeHandler"
    @pagechange="pageChangeHandler"
    @itemchange="itemChange"
    :columns="columns"
  >
    <grid-toolbar>
      <div @click="closeEdit">
        <kbutton title="Add new" :theme-color="'primary'" @click="addRecord">
          Add new
        </kbutton>
      </div>
    </grid-toolbar>
  </Grid>
</template>
<script>
import { Grid, GridToolbar } from '@progress/kendo-vue-grid';
import { Button } from '@progress/kendo-vue-buttons';
import { process } from '@progress/kendo-data-query';

export default {
  components: {
    Grid: Grid,
    'grid-toolbar': GridToolbar,
    kbutton: Button,
  },
  data: function () {
    return {
      updatedData: [],
      editID: null,
      sort: null,
      filter: null,
      skip: 0,
      take: 3,
      columns: [
        { field: 'ProductID', editable: false, title: 'ID', width: '80px' },
        { field: 'ProductName', title: 'Name' },
        {
          field: 'FirstOrderedOn',
          editor: 'date',
          title: 'First Ordered',
          format: '{0:d}',
        },
        {
          field: 'UnitsInStock',
          title: 'Units',
          width: '150px',
          editor: 'numeric',
        },
        { field: 'Discontinued', title: 'Discontinued', editor: 'boolean' },
      ],
      gridData: [
        {
          ProductID: 1,
          ProductName: 'Chai',
          UnitsInStock: 39,
          Discontinued: false,
          FirstOrderedOn: new Date(1996, 8, 20),
        },
        {
          ProductID: 2,
          ProductName: 'Chang',
          UnitsInStock: 17,
          Discontinued: false,
          FirstOrderedOn: new Date(1996, 7, 12),
        },
        {
          ProductID: 3,
          ProductName: 'Aniseed Syrup',
          UnitsInStock: 13,
          Discontinued: false,
          FirstOrderedOn: new Date(1996, 8, 26),
        },
        {
          ProductID: 4,
          ProductName: "Cajun Seasoning",
          UnitsInStock: 53,
          Discontinued: false,
          FirstOrderedOn: new Date(1996, 9, 19),
        },
        {
          ProductID: 5,
          ProductName: 'Orange',
          UnitsInStock: 51,
          Discontinued: false,
          FirstOrderedOn: new Date(1996, 9, 19),
        },
        {
          ProductID: 6,
          ProductName: 'Banana',
          UnitsInStock: 22,
          Discontinued: false,
          FirstOrderedOn: new Date(1996, 9, 19),
        },
        {
          ProductID: 7,
          ProductName: 'Apple',
          UnitsInStock: 16,
          Discontinued: false,
          FirstOrderedOn: new Date(1996, 9, 19),
        },
        {
          ProductID: 8,
          ProductName: 'Peach',
          UnitsInStock: 10,
          Discontinued: false,
          FirstOrderedOn: new Date(1996, 9, 19),
        },
      ],
    };
  },
  computed: {
    getData() {
      return this.gridData.map((item) =>
        Object.assign({ inEdit: item.ProductID === this.editID }, item)
      );
    },
    result: {
      get: function () {
        return process(this.gridData, {
          sort: this.sort,
          filter: this.filter,
          take: this.take,
          skip: this.skip,
        });
      },
    },
  },
  methods: {
    itemChange: function (e) {
      const data = this.gridData.slice();
      const index = data.findIndex((d) => d.ProductID === e.dataItem.ProductID);
      data[index] = { ...data[index], [e.field]: e.value };
      this.gridData = data;
      if (event.dataItem) {
        event.dataItem[e.field] = e.value;
      }
    },
    rowClick: function (e) {
      this.gridData.map((item) => (item.inEdit = false));
      this.editID = e.dataItem.ProductID;
      e.dataItem.inEdit = true;
    },
    closeEdit(e) {
      if (e.target === e.currentTarget) {
        this.editID = null;
      }
    },
    addRecord() {
      const newRecord = { ProductID: this.gridData.length + 1 };
      const data = this.gridData.slice();
      data.unshift(newRecord);
      this.gridData = data;
      this.editID = newRecord.ProductID;
    },
    sortChangeHandler(event) {
      this.sort = event.sort;
    },
    filterChangeHandler(event) {
      this.filter = event.filter;
    },
    pageChangeHandler(event) {
      this.take = event.page.take;
      this.skip = event.page.skip;
    },
  },
};
</script>
