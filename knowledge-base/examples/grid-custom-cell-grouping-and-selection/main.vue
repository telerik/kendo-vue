<template>
    <Grid ref="grid"
         :selected-field="selectedField"
          :cell-render="cellTemplate"
          :style="{height: '520px'}"
          :data-items="gridData"
          :resizable="true"
          :reorderable="true"
          :sortable="true"
          :pageable="gridPageable"
          :groupable="true"
          :group= "group"
          :take="take"
          :skip="skip"
          :expand-field="'expanded'"
          :columns="columns"
          @headerselectionchange="onHeaderSelectionChange"
          @rowclick="onRowClick"
          @datastatechange="dataStateChange"
          @expandchange="expandChange">
        <template v-slot:myTemplate="{props}">
            <custom :field="props.field"
                    :expanded="props.expanded"
                    :row-type="props.rowType"
                    :level="props.level"
                    :column-index="props.columnIndex"
                    :columns-count="props.columnsCount"
                    :data-item="props.dataItem"
                    :class-name="props.className"
                    @selectionchange="selectionChange"
                    @click="clickHandler(props.dataItem)" />
        </template>
    </Grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';
import CustomCell from './CustomCell';

export default {
    components: {
        'Grid': Grid,
        'custom': CustomCell
    },
    data: function () {
        return {
            selectedField: 'selected',
            cellTemplate: 'myTemplate',
            gridPageable: { pageSizes: true },
            products: this.createRandomData(1000),
            gridData: [],
            skip: 0,
            take: 10,
            group: [ { field: 'UnitsInStock' } ],
            expandedItems: [],
            staticColumns: [
                { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
                { field: 'ProductName', title: 'Product Name' },
                { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
                { field: 'UnitsInStock', title: 'Units In Stock' }
            ]
        };
    },
    created: function() {
        this.getData();
    },
     computed: {
        areAllSelected () {
            return this.products.findIndex(item => item.selected === false) === -1;
        },
        columns () {
            return [
                ...this.staticColumns,
                { field: 'selected', width: '50px', headerSelectionValue: this.areAllSelected },
            ]
        }
    },
    methods: {
        onHeaderSelectionChange (event) {
            let checked = event.event.target.checked;
            this.products = this.products.map((item) => { return {...item, selected: checked} });
            this.getData();
        },
        selectionChange (event) {
            event.dataItem[this.selectedField] = !event.dataItem[this.selectedField];
        },
        onRowClick (event) {
            event.dataItem[this.selectedField] = !event.dataItem[this.selectedField];
        },
        clickHandler(dataItem){
            if(dataItem){
                dataItem.expanded = dataItem.expanded === undefined ? false : !dataItem.expanded;
            }
            
        },
        getData: function () {
            this.gridData = process(this.products, {take: this.take, skip: this.skip, group: this.group});
        },
        createAppState: function(dataState) {
            this.group = dataState.group;
            this.take = dataState.take;
            this.skip = dataState.skip;
            this.getData();
        },
        dataStateChange: function (event) {
            this.createAppState(event.data);
        },
        expandChange: function (event) {
            if (event.dataItem) {
                event.dataItem[event.target.$props.expandField] = event.value;
            }
        },
        createRandomData(count) {
            const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk'];
            const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120];
            const units = [2, 7, 12, 25,  67, 233, 123, 53, 67, 89];

            return Array(count).fill({}).map((_, idx) => ({
                ProductID: idx + 1,
                ProductName: productNames[Math.floor(Math.random() * productNames.length)],
                UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
                UnitsInStock: units[Math.floor(Math.random() * units.length)],
                selected: false
            }));
        }
    }
};

</script>
