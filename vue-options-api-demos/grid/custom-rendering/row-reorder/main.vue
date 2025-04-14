<template>
    <Grid
          :data-items="items"
          :columns="columns">
    <template v-slot:myTemplate="{props}">
        <custom  :data-item="props.dataItem"
                @dragover="reorder"
                @dragstart="setActive"
                @dragend="updateRemote"/>
    </template>
   </Grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import CustomCell from './CustomCell.vue';

export default {
    components: {
        'Grid': Grid,
        'custom': CustomCell
    },
   data () {
        return {
            items: [],
            columns: [
                { field: 'ProductID', title: '', cell: 'myTemplate', width: '80px', title: 'Reorder' },
                { field: 'ProductID'},
                { field: 'ProductName', title: 'Product Name' },
                { field: 'UnitPrice', title: 'Unit Price' }
            ],
            activeItem: null
        };
    },
    methods: {
        createRandomData(count) {
            const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk'];
            const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120]

            return Array(count).fill({}).map((_, idx) => ({
                ProductID: idx + 1,
                ProductName: productNames[Math.floor(Math.random() * productNames.length)],
                UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)]
            }));
        },
        reorder(dataItem) {
          let that = this;

          if (that.activeItem === dataItem) {
              return;
          }

          let reorderedData = this.items.slice();
          let prevIndex = reorderedData.findIndex(p => (p === that.activeItem));
          let nextIndex = reorderedData.findIndex(p => (p === dataItem));
          reorderedData.splice(prevIndex, 1);
          reorderedData.splice(nextIndex, 0, this.activeItem);

          that.items = reorderedData;
        },
        setActive(dataItem) {
          this.activeItem = dataItem;
        },
        updateRemote() {
          console.log('in drag end');

          // Send request to remote to update the source order
        }
    },
    mounted() {
        this.items = this.createRandomData(10);
    }
};

</script>
