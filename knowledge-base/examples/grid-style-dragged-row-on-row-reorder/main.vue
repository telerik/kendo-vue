<template>
    <Grid 
          :data-items="items"
          :selected-field="selectedField"
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
import CustomCell from './CustomCell';

export default {
    components: {
        'Grid': Grid,
        'custom': CustomCell
    },
   data () {
        return {
            selectedField: 'selected',
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
          this.activeItem.selected = true;
        },
        updateRemote() {
          console.log('in drag end');
            this.activeItem = {};
          // Send request to remote to update the source order

            this.items  =  this.items.map(i => {
                i.selected = undefined;
                return i;
            })
        }
    },
    mounted() {
        this.items = this.createRandomData(10);
    }
};

</script>
<style>

</style>
