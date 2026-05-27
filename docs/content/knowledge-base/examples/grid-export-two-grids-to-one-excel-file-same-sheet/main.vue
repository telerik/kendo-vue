<template>
  <KButton
    class="k-button k-primary"
    :title="'Export PDF'"
    @click="exportExcel"
  >
    Export the two Grids to Excel and save the data to one sheet
  </KButton>
  <br />
  <br />
  <Grid ref="grid1" :columns="columns" :data-items="categories" />
  <br />
  <br />
  <Grid ref="grid2" :columns="columnsGrid2" :data-items="grid2Data" />
</template>

<script setup>
import { ref } from 'vue';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Grid } from '@progress/kendo-vue-grid';
import { workbookOptions, toDataURL } from '@progress/kendo-vue-excel-export';
import { saveAs } from '@progress/kendo-file-saver';

const columns = [
    { field: 'CategoryID', filterable: false, title: 'ID', width: '50px' },
    { field: 'CategoryName', title: 'Category Name' },
    { field: 'Descriptions', title: 'Descriptions' },
];

const columnsGrid2 = [
    { field: 'ProductID', editable: false, title: 'ID', width: '80px' },
    { field: 'ProductName', title: 'Name' },
    {
        field: 'FirstOrderedOn',
        editor: 'date',
        title: 'First Ordered',
        format: '{0:d}',
    },
    {
        field: 'UnitsInStock',
        title: 'Units',
        width: '150px',
        editor: 'numeric',
    },
    { field: 'Discontinued', title: 'Discontinued', editor: 'boolean' },
];

const categories = ref([
    { CategoryID: 1, CategoryName: 'Beverages', Descriptions: 'Soft drinks, coffees, teas, beers, and ales' },
    { CategoryID: 2, CategoryName: 'Condiments', Descriptions: 'Sweet and savory sauces, relishes, spreads, and seasonings' },
    { CategoryID: 3, CategoryName: 'Confections', Descriptions: 'Desserts, candies, and sweet breads' },
    { CategoryID: 4, CategoryName: 'Dairy Products', Descriptions: 'Cheeses' },
    { CategoryID: 5, CategoryName: 'Grains/Cereals', Descriptions: 'Breads, crackers, pasta, and cereal' },
    { CategoryID: 6, CategoryName: 'Meat/Poultry', Descriptions: 'Prepared meats' },
    { CategoryID: 7, CategoryName: 'Produce', Descriptions: 'Dried fruit and bean curd' },
    { CategoryID: 8, CategoryName: 'Seafood', Descriptions: 'Seaweed and fish' },
]);

const grid2Data = ref([
    { ProductID: 1, ProductName: 'Chai', UnitsInStock: 39, Discontinued: false, FirstOrderedOn: new Date(1996, 8, 20) },
    { ProductID: 2, ProductName: 'Chang', UnitsInStock: 17, Discontinued: false, FirstOrderedOn: new Date(1996, 7, 12) },
    { ProductID: 3, ProductName: 'Aniseed Syrup', UnitsInStock: 13, Discontinued: false, FirstOrderedOn: new Date(1996, 8, 26) },
    { ProductID: 4, ProductName: 'Cajun Seasoning', UnitsInStock: 53, Discontinued: false, FirstOrderedOn: new Date(1996, 9, 19) },
    { ProductID: 5, ProductName: 'Orange', UnitsInStock: 51, Discontinued: false, FirstOrderedOn: new Date(1996, 9, 19) },
    { ProductID: 6, ProductName: 'Banana', UnitsInStock: 22, Discontinued: false, FirstOrderedOn: new Date(1996, 9, 19) },
    { ProductID: 7, ProductName: 'Apple', UnitsInStock: 16, Discontinued: false, FirstOrderedOn: new Date(1996, 9, 19) },
    { ProductID: 8, ProductName: 'Peach', UnitsInStock: 10, Discontinued: false, FirstOrderedOn: new Date(1996, 9, 19) },
]);

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

    rows.push({ cells: [{}, {}, {}] });
    rows.push({ cells: [{}, {}, {}] });
    rows.push({ cells: [{ value: 'Below is the content of the second Grid' }, {}, {}] });

    rows.push({
        cells: [
            { ...headerOptions, value: 'ID' },
            { ...headerOptions, value: 'Name' },
            { ...headerOptions, value: 'First Ordered' },
            { ...headerOptions, value: 'Units' },
            { ...headerOptions, value: 'Discontinued' },
        ],
    });

    grid2Data.value.forEach((category) => {
        rows.push({
            cells: [
                { value: category.ProductID },
                { value: category.ProductName },
                { value: category.FirstOrderedOn },
                { value: category.UnitsInStock },
                { value: category.Discontinued },
            ],
        });
    });

    toDataURL(options).then(saveFn);
}
</script>
