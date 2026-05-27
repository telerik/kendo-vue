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
              layout="horizontal"
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
          <Checkbox label="Show info" v-model="pagerInfo" />
        </div>
        <div class="col-md-12">
          <Checkbox label="Show page sizes" v-model="pagerSizes" />
        </div>
        <div class="col-md-12">
          <Checkbox
            label="Show previous / next buttons"
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
      :show-loader="showLoader"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { NumericTextBox, RadioGroup, Checkbox } from '@progress/kendo-vue-inputs';

const showLoader = ref(false);
const dataItems = ref([]);
const pagerType = ref('numeric');
const pagerButtons = ref(5);
const pagerInfo = ref(true);
const pagerSizes = ref(true);
const pagePrevNext = ref(true);
const skip = ref(0);
const take = ref(10);
const pageSize = ref(10);

const columns = [
    { field: 'ProductID' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', title: 'Unit Price' },
];

const pagerTypes = [
    { label: 'Numeric', value: 'numeric' },
    { label: 'Input', value: 'input' },
];

const pageable = computed(() => ({
    buttonCount: pagerButtons.value,
    info: pagerInfo.value,
    type: pagerType.value,
    pageSizes: pagerSizes.value ? [10, 15, 20, 'all'] : undefined,
    previousNext: pagePrevNext.value,
}));

const items = computed(() => dataItems.value.slice(skip.value, take.value + skip.value));
const total = computed(() => (dataItems.value ? dataItems.value.length : 0));

function pageChangeHandler(event) {
    showLoader.value = true;
    setTimeout(() => {
        showLoader.value = false;
        skip.value = event.page.skip;
        take.value = event.event.value === 'all' ? 1000 : event.page.take;
    }, 300);
}

function createRandomData(count) {
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
            ProductName: productNames[Math.floor(Math.random() * productNames.length)],
            UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
        }));
}

onMounted(() => {
    dataItems.value = createRandomData(1000);
});
</script>
