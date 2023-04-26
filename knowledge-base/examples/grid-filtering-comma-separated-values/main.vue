<template>
    <Grid
      :data-items="products"
      :filterable="true"
      :filter="filter"
      @filterchange="filterChange"
      :columns="columns"
      :filter-cell-render="filterRender"
    >
      <template v-slot:filterSlotTemplate="{ props, methods }">
        <div>
          Filter Slot:
          <KInput
            :style="{ width: '180px' }"
            :value="inputValue"
            @input="onInput"
          />
          <KButton :style="{ 'margin-left': '15px' }" @click="onReset"
            >Clear</KButton
          >
        </div>
      </template>
    </Grid>
  </template>
  <script>
  import { Grid } from '@progress/kendo-vue-grid';
  import { Input } from '@progress/kendo-vue-inputs';
  import { Button } from '@progress/kendo-vue-buttons';
  import { filterBy } from '@progress/kendo-data-query';
  import { sampleProducts } from './products';
  
  export default {
    components: {
      Grid,
      KInput: Input,
      KButton: Button,
    },
    data: function () {
      return {
        filter: {
          logic: 'and',
          filters: [],
        },
        columns: [
          { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
          {
            field: 'ProductName',
            title: 'Product Name',
          },
          {
            field: 'UnitsInStock',
            filterCell: 'filterSlotTemplate',
            width: '350px',
            title: 'UnitsInStock',
          },
          { field: 'UnitPrice', filter: 'numeric', title: 'UnitPrice' },
          { field: 'Discontinued', filter: 'boolean', title: 'Discontinued' },
        ],
        inputValue: null,
      };
    },
    computed: {
      products: function () {
        return filterBy(sampleProducts, this.filter);
      },
    },
    methods: {
      filterChange: function (ev) {
        this.filter = ev.filter;
      },
      filterRender: function (h, defaultRendering, props, change) {
        return defaultRendering;
      },
      onReset() {
        this.inputValue = '';
        this.filter = {
          logic: 'and',
          filters: [],
        };
      },
      onInput(ev) {
        this.inputValue = ev.target.value;
  
        if (this.inputValue.length === 0) {
          setTimeout(() => {
            this.filter = {
              logic: 'and',
              filters: [],
            };
          });
        }
        let newFilter = [...this.filter.filters].filter(
          (filter) => filter.field !== 'UnitsInStock'
        );
  
        const commaSeparatedValues = ev.target.value.split(',');
  
        const equalFilters = [];
        const rangeFilters = [];
        commaSeparatedValues.forEach((ev) => {
          if (Number(ev)) {
            equalFilters.push({
              field: 'UnitsInStock',
              operator: 'eq',
              value: ev,
            });
          } else {
            const rangeValues = ev.split('-');
  
            if (rangeValues[0] !== '') {
              rangeFilters.push({
                field: 'UnitsInStock',
                operator: 'gte',
                value: Number(rangeValues[0]),
              });
              rangeFilters.push({
                field: 'UnitsInStock',
                operator: 'lte',
                value: Number(rangeValues[1]),
              });
            }
          }
        });
  
        const newFilterDefinitions = [];
        if (rangeFilters.length !== 0) {
          newFilterDefinitions.push({
            logic: 'and',
            filters: [...rangeFilters],
          });
        }
  
        if (equalFilters.length !== 0) {
          newFilterDefinitions.push(...equalFilters);
        }
  
        newFilter.push({
          field: 'UnitsInStock',
          logic: 'or',
          filters: newFilterDefinitions,
        });
  
        this.filter.filters = newFilter;
      },
    },
  };
  </script>
  