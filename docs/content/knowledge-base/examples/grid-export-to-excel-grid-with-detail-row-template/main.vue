<template>
  <Grid
    ref="grid"
    :style="{ height: '550px' }"
    :columns="columns"
    :data-items="categories"
    :detail="cellTemplate"
    @expandchange="expandChange"
    :expand-field="'expanded'"
  >
    <GridToolbar>
      <KButton
        class="k-button k-primary"
        :title="'Export PDF'"
        @click="exportExcel"
      >
        Export to Excel
      </KButton>
    </GridToolbar>
    <template #myTemplate="{ props }">
      <DetailComponent :data-item="props.dataItem" />
    </template>
  </Grid>
</template>

<script setup>
import { ref } from 'vue';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Grid, GridToolbar } from '@progress/kendo-vue-grid';
import { products } from './products';
import DetailComponent from './DetailComponent.vue';
import { workbookOptions, toDataURL } from '@progress/kendo-vue-excel-export';
import { saveAs } from '@progress/kendo-file-saver';

const cellTemplate = 'myTemplate';

const columns = [
    { field: 'CategoryID', filterable: false, title: 'ID', width: '50px' },
    { field: 'CategoryName', title: 'Category Name' },
    { field: 'Descriptions', title: 'Descriptions' },
];

const categories = ref([
    {
        CategoryID: 1,
        CategoryName: 'Beverages',
        Descriptions: 'Soft drinks, coffees, teas, beers, and ales',
    },
    {
        CategoryID: 2,
        CategoryName: 'Condiments',
        Descriptions:
      'Sweet and savory sauces, relishes, spreads, and seasonings',
    },
    {
        CategoryID: 3,
        CategoryName: 'Confections',
        Descriptions: 'Desserts, candies, and sweet breads',
    },
    {
        CategoryID: 4,
        CategoryName: 'Dairy Products',
        Descriptions: 'Cheeses',
    },
    {
        CategoryID: 5,
        CategoryName: 'Grains/Cereals',
        Descriptions: 'Breads, crackers, pasta, and cereal',
    },
    {
        CategoryID: 6,
        CategoryName: 'Meat/Poultry',
        Descriptions: 'Prepared meats',
    },
    {
        CategoryID: 7,
        CategoryName: 'Produce',
        Descriptions: 'Dried fruit and bean curd',
    },
    {
        CategoryID: 8,
        CategoryName: 'Seafood',
        Descriptions: 'Seaweed and fish',
    },
]);

function expandChange(event) {
    event.dataItem[event.target.$props.expandField] = event.value;
}

function exportExcel() {
    customSaveExcel({
        data: categories.value,
        fileName: 'myFile',
        columns,
    });
}

function customSaveExcel(exportOptions) {
    const saveFn = (dataURL) => saveAs(dataURL, exportOptions.fileName);

    const options = workbookOptions(exportOptions);
    const rows = options.sheets[0].rows;
    const headerOptions = rows[0].cells[0];

    categories.value.forEach((category) => {
        const currentCategoryProducts = products.filter(
            (item) => item.CategoryID === category.CategoryID
        );

        const currentRowIndex = rows.findIndex(
            (el) => el.cells[0].value === currentCategoryProducts[0]?.CategoryID
        );

        // Add the Detail tables' data
        currentCategoryProducts.reverse().forEach((product) => {
            rows.splice(currentRowIndex + 1, 0, {
                cells: [
                    {},
                    { value: product.ProductID },
                    { value: product.ProductName },
                    { value: product.UnitPrice },
                    { value: product.UnitsInStock },
                ],
            });
        });

        // Apply color to the headers of the Detail tables
        rows.splice(currentRowIndex + 1, 0, {
            cells: [
                {},
                { ...headerOptions, value: 'Product ID' },
                { ...headerOptions, value: 'Product Name' },
                { ...headerOptions, value: 'Unit Price' },
                { ...headerOptions, value: 'Units In Stock' },
            ],
        });
    });

    toDataURL(options).then(saveFn);
}
</script>
