<template>
    <div>
      <div class="example-config">
        <KButton @click="restoreColumns">Restore hidden columns</KButton>
      </div>
      <Grid
        :style="{ height: '280px' }"
        :data-items="items"
        :columns="columns"
        @hidecolumn="hidecolumn"
      >
        <template v-slot:myTemplate="{ props }">
          <custom
            :field="props.field"
            :title="props.title"
            @hidecolumn="hidecolumn"
          />
        </template>
      </Grid>
    </div>
  </template>
  <script>
  import { Grid } from '@progress/kendo-vue-grid';
  import { Button as KButton } from '@progress/kendo-vue-buttons';
  import Header from './Header.vue';

  export default {
    components: {
      Grid,
      custom: Header,
      KButton,
    },
    data: function () {
      return {
        columns: [
          {
            field: 'ProductID',
            title: 'ID',
            headerCell: 'myTemplate',
            width: '130px',
          },
          {
            field: 'ProductName',
            title: 'Product Name',
            width: '300px',
            headerCell: 'myTemplate',
          },
          {
            field: 'UnitPrice',
            title: 'Unit Price',
            headerCell: 'myTemplate',
          },
        ],
        items: [
          {
            ProductID: 1,
            ProductName: 'Chai',
            UnitPrice: 18.0,
          },
          {
            ProductID: 2,
            ProductName: 'Chang',
            UnitPrice: 19.0,
          },
          {
            ProductID: 3,
            ProductName: 'Aniseed Syrup',
            UnitPrice: 10.0,
          },
          {
            ProductID: 4,
            ProductName: "Chef Anton's Cajun Seasoning",
            UnitPrice: 22.0,
          },
        ],
      };
    },
    methods: {
      hidecolumn: function (field) {
        this.columns.map(function (column) {
          if (column.field === field) {
            column.hidden = true;
          }
        });
      },
      restoreColumns: function () {
        this.columns.map(function (column) {
          if (column.hidden) {
            column.hidden = false;
          }
        });
      },
    },
  };
  </script>
