<template>
    <Grid :data-items="items" :columns="columns">
        <template v-slot:myTemplate="{ props }">
            <custom
                :data-item="props.dataItem"
                @dragover="reorder"
                @dragstart="setActive"
                @dragend="updateRemote"
            />
        </template>
    </Grid>
    <br />
    <br />
    <br />
    <Grid :data-items="items2" :columns="columns">
        <template v-slot:myTemplate="{ props }">
            <custom
                :data-item="props.dataItem"
                @dragover="reorder2"
                @dragstart="setActive"
                @dragend="updateRemote"
            />
        </template>
        <grid-norecords @dragover="addRecordToEmptyGrid">
            <div>Drop the item here</div>
        </grid-norecords>
    </Grid>
</template>
<script>
import { Grid, GridNoRecords } from '@progress/kendo-vue-grid';
import CustomCell from './CustomCell';

export default {
    components: {
        Grid: Grid,
        custom: CustomCell,
        'grid-norecords': GridNoRecords,
    },
    data() {
        return {
            items: [],
            items2: [],
            columns: [
                {
                    field: 'Drag',
                    title: '',
                    cell: 'myTemplate',
                    width: '80px',
                    title: 'Reorder',
                },
                { field: 'ProductID' },
                { field: 'ProductName', title: 'Product Name' },
                { field: 'UnitPrice', title: 'Unit Price' },
            ],
            activeItem: null,
        };
    },
    methods: {
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
        reorder(dataItem) {
            let that = this;

            if (that.activeItem === dataItem) {
                return;
            }

            let reorderedData = this.items.slice();
            let reorderedDataItemsArr = this.items2.slice();
            let prevIndex = reorderedData.findIndex((p) => p === that.activeItem);
            let nextIndex = reorderedData.findIndex((p) => p === dataItem);

            if (prevIndex !== -1) {
                reorderedData.splice(prevIndex, 1);
                reorderedData.splice(nextIndex, 0, this.activeItem);
            } else {
                reorderedData.push(this.activeItem);
                const itemsArrAcriveElementIndex = reorderedDataItemsArr.findIndex(
                    (p) => p === that.activeItem
                );
                reorderedDataItemsArr.splice(itemsArrAcriveElementIndex, 1);
            }
            that.items = reorderedData;
            that.items2 = reorderedDataItemsArr;
        },
        reorder2(dataItem) {
            let that = this;

            if (that.activeItem === dataItem) {
                return;
            }

            let reorderedData = this.items2.slice();
            let reorderedDataItemsArr = this.items.slice();
            let prevIndex = reorderedData.findIndex((p) => p === that.activeItem);
            let nextIndex = reorderedData.findIndex((p) => p === dataItem);

            if (prevIndex !== -1) {
                reorderedData.splice(prevIndex, 1);
                reorderedData.splice(nextIndex, 0, this.activeItem);
            } else {
                reorderedData.push(this.activeItem);
                const itemsArrAcriveElementIndex = reorderedDataItemsArr.findIndex(
                    (p) => p === that.activeItem
                );
                reorderedDataItemsArr.splice(itemsArrAcriveElementIndex, 1);
            }
            that.items2 = reorderedData;
            that.items = reorderedDataItemsArr;
        },
        setActive(dataItem) {
            this.activeItem = dataItem;
        },
        updateRemote() {
            console.log(
                'Drag end. Send request to remote to update the source order'
            );

            // Send request to remote to update the source order
        },
        addRecordToEmptyGrid: function (dataItem) {
            const that = this;
            this.items2.push(this.activeItem);

            let reorderedDataItemsArr = this.items.slice();
            const itemsArrAcriveElementIndex = reorderedDataItemsArr.findIndex(
                (p) => p === that.activeItem
            );
            reorderedDataItemsArr.splice(itemsArrAcriveElementIndex, 1);
            this.items = reorderedDataItemsArr;
        },
    },
    mounted() {
        this.items = this.createRandomData(10);
        this.items2 = [];
    },
};
</script>
