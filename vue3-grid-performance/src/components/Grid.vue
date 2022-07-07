<template>
  <div>
    <Grid ref="grid" :style="{ height: '650px', width: '1300px' }" :data-items="processedData" :columns="columns"
      :column-menu="showColumnMenu" :groupable="groupable" :group="group"
      :column-virtualization="enableColumnVirtualization" :scrollable="'virtual'" :skip="skip" :take="take"
      :total="processedData.length" @datastatechange="onDataStateChange" :data-item-key="'ID'"
      :key="enableColumnVirtualization" :row-height="40">
      <template v-slot:priceTemplate="{ props }">
        <td class="text-center">
          <price :data-item="props.dataItem" :field="props.field"></price>
        </td>
      </template>
      <template v-slot:pricechangepercentageTemplate="{ props }">
        <td class="text-right">
          <pricechange :data-item="props.dataItem" :field="props.field"></pricechange>
        </td>
      </template>
      <template v-slot:pricechangeTemplate="{ props }">
        <td class="text-right">
          <pricechange :data-item="props.dataItem" :field="props.field"></pricechange>
        </td>
      </template>
      <template v-slot:chartTemplate="{ }">
        <td class="text-center">
          <chart />
        </td>
      </template>
    </Grid>
  </div>
</template>

<script>
import { Grid } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';
import PriceComponent from './PriceComponent.vue';
import ChangePriceComponent from './ChangePriceComponent.vue';
import ChartComponent from './ChartComponent.vue';

const columnsData = [
  {
    field: 'Stock',
    width: 110,
  },
  {
    field: 'Open Price',
    width: 120,
    filter: 'numeric',
    format: '{0:c4}'
  },
  {
    field: 'Price',
    title: 'LAST',
    width: 130,
    cell: 'priceTemplate',
    filter: 'numeric',

  },
  {
    field: 'Change',
    width: 90,
    cell: 'pricechangeTemplate',
    filter: 'numeric',
    className: "numeric change"
  },
  {
    field: 'Change(%)',
    width: 90,
    cell: 'pricechangepercentageTemplate',
    filter: 'numeric',
    className: "numeric change"

  },
  {
    field: 'Buy',
    width: 110,
    filter: 'numeric',
    format: '{0:c4}'
  },
  {
    field: 'Sell',
    width: 110,
    filter: 'numeric',
    format: '{0:c4}'
  },
  {
    field: 'Spread',
    width: 110,
    filter: 'numeric',
    format: '{0:c4}'
  },
  {
    field: 'Volume',
    width: 110,
    filter: 'numeric',
    format: '{0:c4}'
  },
  {
    field: 'High(D)',
    width: 110,
    filter: 'numeric',
    format: '{0:c4}'
  },
  {
    field: 'Low(D)',
    width: 110,
    filter: 'numeric',
    format: '{0:c4}'
  },
  {
    field: 'High(Y)',
    width: 110,
    filter: 'numeric',
    format: '{0:c4}'
  },
  {
    field: 'Low(Y)',
    width: 110,
    filter: 'numeric',
    format: '{0:c4}'
  },
  {
    field: 'Start(Y)',
    width: 110,
    filter: 'numeric',
    format: '{0:c4}'
  },
  {
    field: 'Chart',
    width: 60,
    className: 'text-center',
    cell: "chartTemplate"
  },
  { field: 'Country', width: 110 },
  { field: 'City', width: 100 },
  { field: 'Category', width: 120 },
  { field: 'Type', width: 100 },
  { field: 'Settlement', width: 100 },
  { field: 'Industry', width: 100, filterable: false },
  { field: 'Sector', width: 120, filterable: false, resizable: true },
  { field: 'SubSector', width: 100, filterable: false },
  { field: 'SectorType', width: 90, filterable: false },
  { field: 'SecurityCode', width: 170, filterable: false, resizable: true },
  { field: 'FullName', width: 60, filterable: false },
  { field: 'FitchRating', width: 60, filterable: false },
  { field: 'DBRSRating', width: 60, filterable: false },
  { field: 'Address', width: 90, filterable: false },
  { field: 'Currency', width: 60, filterable: false },
  { field: 'SecurityCode', width: 120, filterable: false },
  { field: 'SectorCode', width: 80, filterable: false },
  { field: 'Phone', width: 100, filterable: false },
  { field: 'Ticker', width: 60, filterable: false },
  { field: 'Cpn', width: 80, filterable: false },
  { field: 'Maturity', width: 120, filterable: false },
  { field: 'KRD_10YR', width: 110, filterable: false },
  { field: 'CUSIP', width: 90, filterable: false },
  { field: 'KRD_5YR', width: 50, filterable: false },
  { field: 'KRD_1YR', width: 80, filterable: false },
  { field: 'Industry', width: 100, filterable: false },
  { field: 'Sector', width: 120, filterable: false, resizable: true },
  { field: 'SubSector', width: 100, filterable: false },
  { field: 'SectorType', width: 90, filterable: false },
  { field: 'SecurityCode', width: 170, filterable: false, resizable: true },
  { field: 'FullName', width: 60, filterable: false },
  { field: 'FitchRating', width: 60, filterable: false },
  { field: 'DBRSRating', width: 60, filterable: false },
  { field: 'Address', width: 90, filterable: false },
  { field: 'Currency', width: 60, filterable: false },
  { field: 'SecurityCode', width: 120, filterable: false },
  { field: 'SectorCode', width: 80, filterable: false },
  { field: 'Phone', width: 100, filterable: false },
  { field: 'Ticker', width: 60, filterable: false },
  { field: 'Cpn', width: 80, filterable: false },
  { field: 'Maturity', width: 120, filterable: false },
  { field: 'KRD_10YR', width: 110, filterable: false },
  { field: 'CUSIP', width: 90, filterable: false },
  { field: 'KRD_5YR', width: 50, filterable: false },
  { field: 'KRD_1YR', width: 80, filterable: false },
  { field: 'Industry', width: 100, filterable: false },
  { field: 'Sector', width: 120, filterable: false, resizable: true },
  { field: 'SubSector', width: 100, filterable: false },
  { field: 'SectorType', width: 90, filterable: false },
  { field: 'SecurityCode', width: 170, filterable: false, resizable: true },
  { field: 'FullName', width: 60, filterable: false },
  { field: 'FitchRating', width: 60, filterable: false },
  { field: 'DBRSRating', width: 60, filterable: false },
  { field: 'Address', width: 90, filterable: false },
  { field: 'Currency', width: 60, filterable: false },
  { field: 'SecurityCode', width: 120, filterable: false },
  { field: 'SectorCode', width: 80, filterable: false },
  { field: 'Phone', width: 100, filterable: false },
  { field: 'Ticker', width: 60, filterable: false },
  { field: 'Cpn', width: 80, filterable: false },
  { field: 'Maturity', width: 120, filterable: false },
  { field: 'KRD_10YR', width: 110, filterable: false },
  { field: 'CUSIP', width: 90, filterable: false },
  { field: 'KRD_5YR', width: 50, filterable: false },
  { field: 'KRD_1YR', width: 80, filterable: false },
  { field: 'Industry', width: 100, filterable: false },
  { field: 'Sector', width: 120, filterable: false, resizable: true },
  { field: 'SubSector', width: 100, filterable: false },
  { field: 'SectorType', width: 90, filterable: false },
  { field: 'SecurityCode', width: 170, filterable: false, resizable: true },
  { field: 'FullName', width: 60, filterable: false },
  { field: 'FitchRating', width: 60, filterable: false },
  { field: 'DBRSRating', width: 60, filterable: false },
  { field: 'Address', width: 90, filterable: false },
  { field: 'Currency', width: 60, filterable: false },
  { field: 'SecurityCode', width: 120, filterable: false },
  { field: 'SectorCode', width: 80, filterable: false },
  { field: 'Phone', width: 100, filterable: false },
  { field: 'Ticker', width: 60, filterable: false },
  { field: 'Cpn', width: 80, filterable: false },
  { field: 'Maturity', width: 120, filterable: false },
  { field: 'KRD_10YR', width: 110, filterable: false },
  { field: 'CUSIP', width: 90, filterable: false },
  { field: 'KRD_5YR', width: 50, filterable: false },
  { field: 'KRD_1YR', width: 80, filterable: false },
  { field: 'Industry', width: 100, filterable: false },
  { field: 'Sector', width: 120, filterable: false, resizable: true },
  { field: 'SubSector', width: 100, filterable: false },
  { field: 'SectorType', width: 90, filterable: false },
  { field: 'SecurityCode', width: 170, filterable: false, resizable: true },
  { field: 'FullName', width: 60, filterable: false },
  { field: 'FitchRating', width: 60, filterable: false },
  { field: 'DBRSRating', width: 60, filterable: false },
  { field: 'Address', width: 90, filterable: false },
  { field: 'Currency', width: 60, filterable: false },
  { field: 'SecurityCode', width: 120, filterable: false },
  { field: 'SectorCode', width: 80, filterable: false },
  { field: 'Phone', width: 100, filterable: false },
  { field: 'Ticker', width: 60, filterable: false },
  { field: 'Cpn', width: 80, filterable: false },
  { field: 'Maturity', width: 120, filterable: false },
  { field: 'KRD_10YR', width: 110, filterable: false },
  { field: 'CUSIP', width: 90, filterable: false },
  { field: 'KRD_5YR', width: 50, filterable: false },
  { field: 'KRD_1YR', width: 80, filterable: false },
];

export default {
  name: 'App',
  components: {
    Grid: Grid,
    price: PriceComponent,
    pricechange: ChangePriceComponent,
    chart: ChartComponent
  },
  props: {
    gridData: Array,
    showColumnMenu: Boolean,
    groupable: Boolean,
    enableColumnVirtualization: Boolean
  },
  mounted() {
    this.columns = columnsData;
    this.processedData = this.processData();
  },
  watch: {
    gridData() {
      this.processedData = this.processData();
    }
  },
  data() {
    return {
      columns: [],
      skip: 0,
      take: 25,
      group: [],
      processedData: []
    };
  },
  methods: {
    pageChange(event) {
      this.skip = event.page.skip;
      this.take = event.page.take;
    },
    onDataStateChange(event) {
      console.log("DataStateChange")
      this.createAppState(event.data);
    },
    createAppState(dataState) {
      this.group = dataState.group;
      this.take = dataState.take;
      this.skip = dataState.skip;
      this.processedData = this.processData();
    },
    processData() {
      return process(this.gridData, {
        take: this.take,
        skip: this.skip,
        group: this.group,
      });
    }
  },
};
</script>

<style>
td.text-center {
  text-align: center;
}

td.text-right {
  text-align: right;
}

.red {
  color: #d9534f;
}

.green {
  color: #37b400;
}

.text-bold {
  font-weight: 600;
}
</style>
