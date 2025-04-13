<template>
  <Grid
    ref="grid"
    :style="{ height: '640px' }"
    :data-items="gridData"
    :edit-field="'inEdit'"
    :sortable="true"
    :sort="sort"
    :pageable="pageable"
    :take="take"
    :skip="skip"
    :total="total"
    :loader="loader"
    @itemchange="itemChange"
    @datastatechange="dataStateChange"
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
import { process, toODataString } from '@progress/kendo-data-query';
import CommandCell from './CommandCell.vue';

export default {
  components: {
    Grid: Grid,
    'grid-toolbar': GridToolbar,
    'grid-norecords': GridNoRecords,
    custom: CommandCell,
    kbutton: Button,
  },
  data: function () {
    return {
      baseUrl: 'https://demos.telerik.com/kendo-ui/service-v4/odata/Products',
      init: { method: 'GET', accept: 'application/json', headers: {} },
      filter: null,
      sort: null,
      pageable: true,
      gridData: [],
      skip: 0,
      take: 10,
      total: 0,
      updatedData: [],
      editID: null,
      columns: [
        { field: 'ProductID', editable: false, width: 60, title: 'id' },
        { field: 'ProductName' },
        {
          field: 'UnitPrice',
          title: 'Unit Price',
          editor: 'numeric',
          format: '{0:c}',
          width: 120,
        },
        {
          field: 'UnitsInStock',
          title: 'Units In Stock',
          editor: 'numeric',
          width: 120,
        },
        { field: 'Discontinued', width: 120, editor: 'boolean' },
        { cell: 'myTemplate', filterable: false, width: '210px' },
      ],
      gridData: [],
      loader: false,
    };
  },
  computed: {
    hasItemsInEdit() {
      return this.gridData.filter((p) => p.inEdit).length > 0;
    },
    dataState() {
      return {
        sort: this.sort,
        skip: this.skip,
        take: this.take,
      };
    },
  },
  created: function () {
    this.getData();
  },
  methods: {
    updateService(action = '', item) {
      const that = this;
      const idIfNeeded =
        action === 'DELETE' || action === 'PUT' ? `(${item.ProductID})` : '';
      const url = this.baseUrl + idIfNeeded;
      const body =
        action === 'POST' || action === 'PUT'
          ? JSON.stringify({
              ProductID: item.ProductID,
              ProductName: item.ProductName,
              QuantityPerUnit: item.QuantityPerUnit,
              Discontinued: item.Discontinued,
              UnitPrice: item.UnitPrice,
              UnitsInStock: item.UnitsInStock,
            })
          : {};
      fetch(url, {
        method: action,
        accept: 'application/json',
        headers: {
          'Content-type': 'application/json',
        },
        body: body,
      }).then((response) => {
        if (response.ok) {
          that.getData();
        } else {
          alert('request failed');
        }
      });
    },
    itemChange: function (e) {
      if (e.dataItem.ProductID) {
        let index = this.gridData.findIndex(
          (p) => p.ProductID === e.dataItem.ProductID
        );
        let updated = Object.assign({}, this.gridData[index], {
          [e.field]: e.value,
        });
        this.gridData.splice(index, 1, updated);
      } else {
        e.dataItem[e.field] = e.value;
      }
    },
    insert() {
      const dataItem = { inEdit: true };
      this.gridData.splice(0, 0, dataItem);
    },
    edit: function (e) {
      let index = this.gridData.findIndex(
        (p) => p.ProductID === e.dataItem.ProductID
      );
      let updated = Object.assign({}, this.gridData[index], { inEdit: true });
      this.gridData.splice(index, 1, updated);
    },
    save: function (e) {
      let index = this.gridData.findIndex(
        (p) => p.ProductID === e.dataItem.ProductID
      );
      let item = this.gridData[index];
      this.updateService(item.ProductID ? 'PUT' : 'POST', item);
    },
    update(data, item, remove) {
      let updated;
      let index = data.findIndex(
        (p) => item.ProductID && p.ProductID === item.ProductID
      );
      if (index >= 0) {
        updated = Object.assign({}, item);
        data[index] = updated;
      } else {
        let id = 1;
        this.updatedData.forEach((p) => {
          if (p.ProductID) {
            id = Math.max(p.ProductID + 1, id);
          }
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
        let index = this.gridData.findIndex(
          (p) => p.ProductID === e.dataItem.ProductID
        );
        let updateDataIndex = this.updatedData.findIndex(
          (p) => p.ProductID === e.dataItem.ProductID
        );
        let updated = Object.assign(this.updatedData[updateDataIndex], {
          inEdit: undefined,
        });
        this.gridData.splice(index, 1, { ...updated });
      } else {
        let index = this.gridData.findIndex(
          (p) => JSON.stringify(e.dataItem) === JSON.stringify(p)
        );

        this.gridData.splice(index, 1);
      }
    },
    remove(e) {
      e.dataItem.inEdit = undefined;
      this.updateService('DELETE', e.dataItem);
    },
    cancelChanges() {
      this.getData();
    },
    getData: function (initial) {
      const that = this;
      this.loader = true;

      fetch(
        this.baseUrl + '?' + toODataString(this.dataState) + '&$count=true',
        this.init
      )
        .then((response) => response.json())
        .then((json) => {
          const total = json['@odata.count'];
          const data = json['value'];
          that.total = total;
          that.updatedData = [...data];
          that.gridData = data;
          this.loader = false;
        });
    },
    createAppState: function (dataState) {
      this.take = dataState.take;
      this.skip = dataState.skip;
      this.filter = dataState.filter;
      this.sort = dataState.sort;
      this.getData();
    },
    dataStateChange: function (event) {
      this.createAppState(event.data);
    },
  },
};
</script>
