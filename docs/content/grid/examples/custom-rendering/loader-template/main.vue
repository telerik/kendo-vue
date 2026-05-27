<template>
  <div>
    <KButton @click="toggleLoader">
      {{ showLoader ? 'Hide Loader' : 'Show Loader' }}
    </KButton>
    <br />
    <br />
    <b>Choose loader type:</b>
    <RadioGroup
      :data-items="types"
      @change="onRadioGroupChange"
      :default-value="type"
      layout="horizontal"
    />
    <br />
    <Grid
      :style="{ height: '450px' }"
      :loader="'loader'"
      :show-loader="showLoader"
      :data-items="result"
      :pageable="{ buttonCount: 4, pageSizes: true }"
      :skip="skip"
      :take="take"
      :total="total"
      :columns="columns"
      @pagechange="pageChangeHandler"
      :navigatable="true"
    >
      <template #loader>
        <div class="k-loader-container k-loader-container-md k-loader-top">
          <div class="k-loader-container-overlay k-overlay-dark" />
          <div class="k-loader-container-inner">
            <div v-if="type === 'custom'">
              <iframe
                src="https://giphy.com/embed/l3nWhI38IWDofyDrW"
                width="180"
                height="180"
                frameborder="0"
                class="giphy-embed"
                allowfullscreen
              ></iframe>
            </div>
            <Loader v-else size="large" :type="type" />
          </div>
        </div>
      </template>
    </Grid>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Grid } from '@progress/kendo-vue-grid';
import { RadioGroup } from '@progress/kendo-vue-inputs';
import { Loader } from '@progress/kendo-vue-indicators';

const type = ref('converging-spinner');
const types = ref([
    { label: 'Pulsing', value: 'pulsing' },
    { label: 'Infinite Spinner', value: 'infinite-spinner' },
    { label: 'Converging Spinner', value: 'converging-spinner' },
    { label: 'Custom', value: 'custom' },
]);

const showLoader = ref(false);
const dataItems = ref([]);
const skip = ref(0);
const take = ref(10);

const columns = ref([
    { field: 'ProductID' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', title: 'Unit Price' },
]);

const result = computed(() =>
    dataItems.value.slice(skip.value, take.value + skip.value)
);

const total = computed(() => dataItems.value.length);

function onRadioGroupChange(e) {
    console.log(e.value)
    type.value = e.value;
}

function toggleLoader() {
    showLoader.value = !showLoader.value;
}

function pageChangeHandler(event) {
    skip.value = event.page.skip;
    take.value = event.page.take;
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
    return Array.from({ length: count }, (_, idx) => ({
        ProductID: idx + 1,
        ProductName: productNames[Math.floor(Math.random() * productNames.length)],
        UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
    }));
}

onMounted(() => {
    dataItems.value = createRandomData(1000);
});
</script>
