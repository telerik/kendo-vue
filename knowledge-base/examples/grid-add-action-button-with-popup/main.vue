<template>
 <Grid ref="grid"
          :style="{height: '500px'}"
          :data-items="gridData"
          :edit-field="'inEdit'"
          :sortable="true"
          :take="take"
          :skip="skip"
          :total="total"
          :row-render="cellFunction"
          :columns="columns">
        <template v-slot:myTemplate="{props}">
            <custom :data-item="props.dataItem" 
                    @actionselect="actionSelected"
                    />
        </template>
        <grid-norecords>
            There is no data available custom
        </grid-norecords>
    </Grid>
</template>
<script>
import { Grid, GridNoRecords } from '@progress/kendo-vue-grid';
import ActionCell from './ActionCell';

export default {
    components: {
        'Grid': Grid,
        'grid-norecords': GridNoRecords,
        'custom': ActionCell
    },
    data: function () {
        return {
            filter: null,
            sort: null,
            gridData: [],
            skip: 0,
            take: 10,
            total: 10,
            updatedData: [],
            editID: null,
            columns: [
                { field: 'ProductID', filterable: false, editable: false, title: 'ID', width: '80px' },
                { field: 'ProductName', title: 'Name' },
                { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
                { field: 'UnitsInStock', title: 'Units', filter: 'numeric', width: '120px', editor: 'numeric' },
                { field: 'Ready', title: 'Ready for shipping', filter: 'numeric', width: '170px', editor: 'numeric' },
                { title: 'Change status',cell: 'myTemplate', filterable: false, width: '125px' }
            ],
            gridData: []
        };
    },
    created: function() {
        this.gridData = this.createRandomData(this.total);
    },
    methods: {
        actionSelected(e){
            e.action === "accept" ? e.dataItem.Ready = true : e.dataItem.Ready = false;
        },
        createRandomData(count) {
            const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk'];
            const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120];
            const units = [2, 7, 12, 25,  67, 233, 123, 53, 67, 89];
            const trueFalse = [true, false];

            return Array(count).fill({}).map((_, idx) => ({
                ProductID: idx + 1,
                ProductName: productNames[Math.floor(Math.random() * productNames.length)],
                UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
                UnitsInStock: units[Math.floor(Math.random() * units.length)],
                Ready: trueFalse[Math.floor(Math.random() * trueFalse.length)]
            }));
        },
        cellFunction: function (h, trElement , defaultSlots, props ) {
            const available = props.dataItem.Ready;
            const green = {
                backgroundColor: "rgb(55, 180, 0,0.32)",
            };
            const red = {
                backgroundColor: "rgb(243, 23, 0, 0.32)",
            };
            const trProps = {
                style: available ? green : red,
            };
   
            return h(
                'tr',
                trProps,
                defaultSlots);
        }
    }
};

</script>
