<template>
  <div>
    <Grid
      ref="grid"
      :style="{ height: '470px' }"
      :data-items="gridData"
      :columns="columns"
    >
      <template v-slot:tickerTemplate="{ props }">
        <td>
          <ticker :data-item="props.dataItem" :field="props.field"></ticker>
        </td>
      </template>
      <template v-slot:priceTemplate="{ props }">
        <td class="text-center">
          <price :data-item="props.dataItem" :field="props.field"></price>
        </td>
      </template>
      <template v-slot:pricechangepercentageTemplate="{ props }">
        <td class="text-center">
          <pricechange
            :data-item="props.dataItem"
            :field="props.field"
          ></pricechange>
        </td>
      </template>
      <template v-slot:pricechangeTemplate="{ props }">
        <td class="text-center">
          <pricechange
            :data-item="props.dataItem"
            :field="props.field"
          ></pricechange>
        </td>
      </template>
      <template v-slot:highpriceTemplate="{ props }">
        <td class="text-center">
          <price :data-item="props.dataItem" :field="props.field"></price>
        </td>
      </template>
      <template v-slot:lowpriceTemplate="{ props }">
        <td class="text-center">
          <price :data-item="props.dataItem" :field="props.field"></price>
        </td>
      </template>
      <template v-slot:volumeTemplate="{ props }">
        <td class="text-center">
          <volume :data-item="props.dataItem" :field="props.field"></volume>
        </td>
      </template>
      <template v-slot:ratingTemplate="{ props }">
        <td class="text-center">
          <rating :data-item="props.dataItem" :field="props.field"></rating>
        </td>
      </template>
    </Grid>
  </div>
</template>

<script>
import { process } from '@progress/kendo-data-query';
import { Grid, GridToolbar } from '@progress/kendo-vue-grid';
import TickerComponent from './TickerComponent.vue';
import PriceComponent from './PriceComponent.vue';
import ChangePriceComponent from './ChangePriceComponent.vue';
import VolumeComponent from './VolumeComponent.vue';
import RatingComponent from './RatingComponent.vue';
import { DATA } from './financial-data.js';

const ADJUST_PADDING = 4;
const COLUMN_MIN = 4;
let minGridWidth = 0;

const columnsData = [
  {
    field: 'Ticker',
    minWidth: 140,
    cell: 'tickerTemplate',
  },
  {
    field: 'Price',
    title: 'LAST',
    minWidth: 120,
    cell: 'priceTemplate',
  },
  {
    field: 'Change(%)',
    title: 'CHG %',
    minWidth: 90,
    cell: 'pricechangepercentageTemplate',
  },
  {
    field: 'Change',
    title: 'CHG',
    minWidth: 90,
    cell: 'pricechangeTemplate',
  },
  {
    field: 'High(D)',
    title: 'High',
    minWidth: 110,
    cell: 'highpriceTemplate',
  },
  {
    field: 'Low(D)',
    title: 'LOW',
    minWidth: 110,
    cell: 'lowpriceTemplate',
  },
  {
    field: 'Volume',
    title: 'VOL',
    minWidth: 90,
    cell: 'volumeTemplate',
  },
  {
    title: 'RATING',
    cell: 'ratingTemplate',
    minWidth: 130,
  },
];

export default {
  name: 'App',
  components: {
    Grid: Grid,
    price: PriceComponent,
    pricechange: ChangePriceComponent,
    ticker: TickerComponent,
    volume: VolumeComponent,
    rating: RatingComponent,
  },
  props: {
    gridData: Array,
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
  data() {
    return {
      setMinWidth: false,
      gridCurrent: 0,
      columns: [],
    };
  },
  methods: {
    defineColumns() {
      this.columns = columnsData.map((column, index) => {
        return {
          field: column.field,
          title: column.title,
          width: this.setWidth(column.minWidth),
          cell: column.cell,
        };
      });
    },
    setWidth(minWidth) {
      let width = this.setMinWidth
        ? minWidth
        : minWidth + (this.gridCurrent - minGridWidth) / this.columns.length;
      width < COLUMN_MIN ? width : (width -= ADJUST_PADDING);
      return width;
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
  },
};
</script>

<style>
td.text-center {
  text-align: center;
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
