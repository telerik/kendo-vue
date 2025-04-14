<template>
  <div class="row">
    <div class="col m-3">
      <Button @click="loadItems">Load 100 000 items</Button>
    </div>
  </div>
  <div class="row">
    <div class="col m-3">
      Virtual Scrolling
      <Switch @change="handleSwitchChange" :on-label="''" :off-label="''" />
      Paging
    </div>
  </div>
  <Grid
    :key="isPagingOn"
    :style="{ height: '440px', width: '700px' }"
    :scrollable="isPagingOn ? 'scrollable' : 'virtual'"
    :column-virtualization="true"
    :skip="skip"
    :take="take"
    :total="numberOfRows"
    :data-items="items"
    :columns="columns"
    :row-height="40"
    :pageable="isPagingOn ? pagerSettings : false"
    @pagechange="pageChange"
    :sortable="true"
    @sortchange="sortChange"
    :sort="sort"
    @cellclick="cellClick"
    @rowclick="rowClick"
    :page-size="10"
    :edit-field="'inEdit'"
    :data-item-key="'id'"
    @itemchange="itemChange"
  >
  </Grid>
</template>
<script>
import { Button } from '@progress/kendo-vue-buttons';
import { Switch } from '@progress/kendo-vue-inputs';
import { Grid } from '@progress/kendo-vue-grid';
import { orderBy } from '@progress/kendo-data-query';

export default {
  components: {
    Grid,
    Button,
    Switch,
  },
  data: function () {
    return {
      dataItems: [],
      data: [],
      numberOfColumns: 100,
      numberOfRows: 100000,
      pagerSettings: {
        info: true,
        type: 'input',
        previousNext: true,
      },
      columns: [],
      skip: 0,
      take: 20,
      isPagingOn: false,
      sort: [],
      items: [],
    };
  },
  created: function () {
    this.columns = this.createColumns();
    this.data = this.getData();
  },
  methods: {
    itemChange: function (e) {
      e.dataItem[e.field] = e.value;
    },
    cellClick: function (e) {
      if (e.dataItem.inEdit && e.field === this.editField) {
        return;
      }
      this.editField = e.field;

      e.dataItem.inEdit = e.field;
    },
    rowClick: function (e) {
      this.items.forEach((d) => {
        if (d.inEdit) {
          if (e.dataItem !== d) {
            d.inEdit = undefined;
          }
        }
      });
    },
    loadItems() {
      this.dataItems = this.data;
      this.items = this.dataItems.slice(this.skip, this.skip + this.take);
    },
    createColumns() {
      const columns = [
        {
          field: 'id',
          width: '150px',
          editable: false,
          locked: true,
        },
      ];
      for (let c = 1; c <= this.numberOfColumns; c++) {
        columns.push({
          field: 'Field-' + c.toString(),
          width: '150px',
        });
      }
      return columns;
    },
    pageChange(event) {
      this.skip = event.page.skip;
      this.take = event.page.take;
      this.items = this.dataItems.slice(this.skip, this.skip + this.take);
    },
    handleSwitchChange(e) {
      this.isPagingOn = e.value;
    },
    sortChange(e) {
      this.dataItems = orderBy(this.data, e.sort);
      this.items = this.dataItems.slice(this.skip, this.skip + this.take);

      this.sort = e.sort;
    },
    getData() {
      const page = [];
      for (let r = 1; r <= this.numberOfRows; r++) {
        const row = {
          id: r,
        };
        for (let c = 1; c <= this.numberOfColumns; c++) {
          row['Field-' + c] = 'R' + r + ':C' + c;
        }
        page.push(row);
      }
      return page;
    },
  },
};
</script>
