<template>
  <Grid
    ref="grid"
    :style="{ height: '440px' }"
    :data-items="gridData"
    :edit-field="'inEdit'"
    @itemchange="itemChange"
    :columns="columns"
  >
    <template v-slot:myTemplate="{ props }">
      <custom
        :data-item="props.dataItem"
        @edit="edit"
        @save="save"
        @remove="remove"
        @cancel="cancel"
      />
    </template>
    <template v-slot:statusCell="{ props }">
      <statusCell
        :data-item="props.dataItem"
        :field="props.field"
        :class-name="'statusColumn'"
        @activeChange="(e) => activeChange(e, props.dataItem)"
        @publicChange="(e) => publicChange(e, props.dataItem)"
        @hideChange="(e) => hideChange(e, props.dataItem)"
      />
    </template>
    <grid-toolbar>
      <kbutton title="Add new" :theme-color="'primary'" @click="insert">
        Add new
      </kbutton>
      <kbutton
        v-if="hasItemsInEdit"
        title="Cancel current changes"
        @click="cancelChanges"
      >
        Cancel current changes
      </kbutton>
    </grid-toolbar>
    <grid-norecords> There is no data available custom </grid-norecords>
  </Grid>
</template>
<script>
import { Grid, GridToolbar, GridNoRecords } from '@progress/kendo-vue-grid';
import { Button } from '@progress/kendo-vue-buttons';
import CommandCell from './CommandCell';
import StatusCell from './StatusCell';

var sampleProducts = [
  {
    ProductID: 1,
    ProductName: 'Chai',
    UnitsInStock: 39,
    Discontinued: false,
    FirstOrderedOn: new Date(1996, 8, 20),
    Status: {
      active: true,
      public: false,
      hide: false,
    },
  },
  {
    ProductID: 2,
    ProductName: 'Chang',
    UnitsInStock: 17,
    Discontinued: false,
    FirstOrderedOn: new Date(1996, 7, 12),
    Status: {
      active: true,
      public: false,
      hide: false,
    },
  },
  {
    ProductID: 3,
    ProductName: 'Aniseed Syrup',
    UnitsInStock: 13,
    Discontinued: false,
    FirstOrderedOn: new Date(1996, 8, 26),
    Status: {
      active: true,
      public: false,
      hide: false,
    },
  },
  {
    ProductID: 4,
    ProductName: "Chef Anton's Cajun Seasoning",
    UnitsInStock: 53,
    Discontinued: false,
    FirstOrderedOn: new Date(1996, 9, 19),
    Status: {
      active: true,
      public: false,
      hide: false,
    },
  },
];

export default {
  components: {
    Grid: Grid,
    'grid-toolbar': GridToolbar,
    'grid-norecords': GridNoRecords,
    custom: CommandCell,
    statusCell: StatusCell,
    kbutton: Button,
  },
  data: function () {
    return {
      gridData: sampleProducts.slice(0),
      updatedData: [],
      editID: null,
      group: [{ field: 'UnitsInStock' }],
      expandedItems: [],
      columns: [
        { field: 'ProductID', editable: false, title: 'ID', width: '50px' },
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
          width: '70px',
          editor: 'numeric',
        },
        {
          field: 'Status',
          title: 'Status',
          cell: 'statusCell',
          width: '120px',
        },
        { cell: 'myTemplate', width: '180px' },
      ],
    };
  },
  computed: {
    hasItemsInEdit() {
      return this.gridData.filter((p) => p.inEdit).length > 0;
    },
  },
  methods: {
    activeChange: function (e, dataItem) {
      const updatedData = this.gridData.slice();

      const item = this.update(updatedData, dataItem);
      item.Status.active = e.value;
      this.gridData = updatedData;
    },
    publicChange: function (e, dataItem) {
      const updatedData = this.gridData.slice();

      const item = this.update(updatedData, dataItem);
      item.Status.public = e.value;
      this.gridData = updatedData;
    },
    hideChange: function (e, dataItem) {
      const updatedData = this.gridData.slice();

      const item = this.update(updatedData, dataItem);
      item.Status.hide = e.value;
      this.gridData = updatedData;
    },
    ddChange: function (e, dataItem) {
      const updatedData = this.gridData.slice();

      const item = this.update(updatedData, dataItem);
      item.Discontinued = e.target.value;
      this.gridData = updatedData;
    },
    itemChange: function (e) {
      const updatedData = this.gridData.slice();

      const item = this.update(updatedData, e.dataItem);
      item[e.field] = e.value;
      this.gridData = updatedData;
    },
    insert() {
      const dataItem = { inEdit: true, Discontinued: false };
      const newproducts = this.gridData.slice();
      newproducts.unshift(dataItem);
      this.update(newproducts, dataItem);
      this.gridData = newproducts;
    },
    edit: function (e) {
      e.dataItem.inEdit = true;
    },
    save: function (e) {
      e.dataItem.inEdit = undefined;
      const data = this.gridData.slice();
      e.dataItem.ProductID = this.update(sampleProducts, e.dataItem).ProductID;
    },
    update(data, item, remove) {
      let updated;
      let itemProductID = item.ProductID;
      let index = data.findIndex(
        (p) =>
          JSON.stringify({ ...p }) === JSON.stringify(item) ||
          (itemProductID && p.ProductID === itemProductID)
      );
      if (index >= 0) {
        updated = Object.assign({}, item);
        data[index] = updated;
      } else {
        let id = 1;
        data.forEach((p) => {
          id = Math.max(p.ProductID + 1, id);
        });
        updated = Object.assign({}, item, { ProductID: id });
        data.unshift(updated);
        index = 0;
      }

      if (remove) {
        data = data.splice(index, 1);
      }
      return data[index];
    },
    cancel(e) {
      if (e.dataItem.ProductID) {
        e.dataItem.inEdit = undefined;
      } else {
        this.update(this.gridData, e.dataItem, true);
      }
    },
    remove(e) {
      e.dataItem.inEdit = undefined;
      this.update(this.gridData, e.dataItem, true);
      this.update(sampleProducts, e.dataItem, true);
      this.gridData = this.gridData.slice();
    },
    cancelChanges() {
      let editedItems = sampleProducts.filter((p) => p.inEdit === true);
      if (editedItems.length) {
        editedItems.forEach((item) => {
          item.inEdit = undefined;
        });
      }

      this.gridData = sampleProducts.slice();
    },
  },
};
</script>

<style>
.k-grid td.statusColumn {
  padding: 0px;
}
</style>
