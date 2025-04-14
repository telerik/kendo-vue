<template>
  <div>
    <div class="example-config row">
      <div class="col-md-6">
        <dl>
          <dt>Pager type:</dt>
          <dd>
            <RadioGroup
              :data-items="pagerTypes"
              v-model="pagerType"
              :layout="'horizontal'"
            />
          </dd>
        </dl>
        <dl>
          <dt>Max. number of buttons:</dt>
          <dd>
            <NumericTextBox
              class="k-textbox"
              :style="{ width: '200px' }"
              v-model="pagerButtons"
            />
          </dd>
        </dl>
      </div>
      <div class="col-md-6 row">
        <div class="col-md-12">
          <Checkbox :label="'Show info'" v-model="pagerInfo" />
        </div>
        <div class="col-md-12">
          <Checkbox :label="'Show page sizes'" v-model="pagerSizes" />
        </div>
        <div class="col-md-12">
          <Checkbox
            :label="'Show previous / next buttons'"
            v-model="pagePrevNext"
          />
        </div>
      </div>
    </div>
    <Grid
      :style="{ height: '340px' }"
      :data-items="items"
      :skip="skip"
      :take="take"
      :total="total"
      :pageable="pageable"
      :page-size="pageSize"
      @pagechange="pageChangeHandler"
      :columns="columns"
      :loader="loader"
    >
    </Grid>
  </div>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import {
  NumericTextBox,
  RadioGroup,
  Checkbox,
} from '@progress/kendo-vue-inputs';

export default {
  components: {
    Grid: Grid,
    NumericTextBox,
    RadioGroup,
    Checkbox,
  },
  data: function () {
    return {
      loader: false,
      dataItems: [],
      pagerType: 'numeric',
      pagerButtons: 5,
      pagerInfo: true,
      pagerSizes: true,
      pagePrevNext: true,
      skip: 0,
      take: 10,
      pageSize: 10,
      pageSizeValue: 10,
      columns: [
        { field: 'ProductID' },
        { field: 'ProductName', title: 'Product Name' },
        { field: 'UnitPrice', title: 'Unit Price' },
      ],
      pagerTypes: [
        {
          label: 'Numeric',
          value: 'numeric',
        },
        {
          label: 'Input',
          value: 'input',
        },
      ],
    };
  },
  computed: {
    pageable() {
      return {
        buttonCount: this.pagerButtons,
        info: this.pagerInfo,
        type: this.pagerType,
        pageSizes: this.pagerSizes ? [10, 15, 20, 'all'] : undefined,
        previousNext: this.pagePrevNext,
        pageSizeValue: this.pageSizeValue,
      };
    },
    items: {
      get: function () {
        return this.dataItems.slice(this.skip, this.take + this.skip);
      },
    },
    total() {
      return this.dataItems ? this.dataItems.length : 0;
    },
  },
  methods: {
    pageChangeHandler: function (event) {
      this.loader = true;
      // The idea behind using the following setTimeout method is to
      // demonstrate how we can show a loader while fetching data.
      // In a real-life scenarios with remote data binding, the 'loader'
      // property should be updated before making a server request
      // and after the request completes.
      setTimeout(() => {
        this.loader = false;
        this.skip = event.page.skip;
        this.take = event.event.value === 'all' ? 1000 : event.page.take;

        this.pageSizeValue = event.event.value;
      }, 300);
    },
    createRandomData(count) {
      const productNames = [
        'Chai',
        'Chang',
        'Syrup',
        'Apple',
        'Orange',
        'Banana',
        'Lemon',
        'Pineapple',
        'Tea',
        'Milk',
      ];
      const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120];

      return Array(count)
        .fill({})
        .map((_, idx) => ({
          ProductID: idx + 1,
          ProductName:
            productNames[Math.floor(Math.random() * productNames.length)],
          UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
        }));
    },
  },
  mounted() {
    this.dataItems = this.createRandomData(1000);
  },
};
</script>
