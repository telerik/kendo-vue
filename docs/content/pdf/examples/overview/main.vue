<template>
  <div>
    <div class="example-config">
      <KButton @click="exportPDFWithComponent">Export with component</KButton>
      &nbsp;
      <KButton @click="exportPDFWithMethod">Export with method</KButton>
      <br />
      <br />
      <span>
        Select sport activity:
        <DropDownList
          :style="{ width: '230px' }"
          v-model="selectedSport"
          :data-items="sports"
          :default-item="'Select sport ...'"
        />
      </span>
    </div>

    <PDFExport ref="PdfExport">
      <div id="exportContent" ref="container">
        <h3 class="text-center">Weekend personal planning</h3>
        <hr class="k-hr" />
        <Grid
          :data-items="items"
          :skip="skip"
          :take="take"
          :total="total"
          :pageable="pageable"
          :page-size="pageSize"
          @pagechange="pageChangeHandler"
          :columns="columns"
        />
        <br />
        <span style="font-weight: bold">Planned sport for the weekend:</span>
        {{ selectedSport }}
      </div>
    </PDFExport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { PDFExport, savePDF } from '@progress/kendo-vue-pdf';
import { Grid } from '@progress/kendo-vue-grid';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { Button as KButton } from "@progress/kendo-vue-buttons";;

const selectedSport = ref('');
const sports = ['Basketball', 'Football', 'Tennis', 'Volleyball'];
const skip = ref(0);
const take = ref(10);
const pageSize = ref(10);
const products = ref(createRandomData(1000));

const pageable = {
    buttonCount: 5,
    info: true,
    type: 'numeric',
    pageSizes: true,
    previousNext: true,
};

const columns = [
    { field: 'ProductID' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', title: 'Unit Price' },
];

const items = computed(() => products.value.slice(skip.value, take.value + skip.value));
const total = computed(() => products.value.length);

function exportPDFWithComponent() {
    PdfExport.value.save(items.value);
}

function exportPDFWithMethod() {
    savePDF(container.value, {
        paperSize: 'auto',
        margin: 40,
        fileName: `Report for `,
    });
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

    return Array(count)
        .fill({})
        .map((_, idx) => ({
            ProductID: idx + 1,
            ProductName: productNames[Math.floor(Math.random() * productNames.length)],
            UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
        }));
}

const PdfExport = ref(null);
const container = ref(null);
</script>
