<template>
  <grid :style="{ height: '280px' }" :data-items="items" :columns="columns">
    <template v-slot:headerTemplate="{ props }">
      <span
        v-if="!getColumnItem(props).headerInEdit"
        @dblclick="(e) => customHandler(e, props)"
        >{{ props.title }}</span
      >
      <span v-else
        ><k-input
          @blur="onBlur(props)"
          @input="(e) => onInput(e, props)"
          type="text"
          :value="props.title"
      /></span>
    </template>
  </grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import { Input } from '@progress/kendo-vue-inputs';

export default {
  components: {
    grid: Grid,
    'k-input': Input,
  },
  data: function () {
    return {
      unitPriceTitle: 'Unit price',
      columns: [
        {
          field: 'ProductID',
          title: 'Product ID',
          headerCell: 'headerTemplate',
          headerInEdit: false,
        },
        {
          field: 'ProductName',
          title: 'Product Name',
          headerCell: 'headerTemplate',
          headerInEdit: false,
        },
        {
          field: 'UnitPrice',
          title: 'Unit Price',
          headerCell: 'headerTemplate',
          headerInEdit: false,
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
    customHandler: function (e, props) {
      const item = this.getColumnItem(props);
      item.headerInEdit = true;
    },
    onBlur: function (props) {
      const item = this.getColumnItem(props);
      item.headerInEdit = false;
    },
    onInput: function (e, props) {
      const item = this.getColumnItem(props);
      item.title = e.value;
    },
    getColumnItem(props) {
      return this.columns.find((el) => el.title === props.title);
    },
  },
};
</script>
