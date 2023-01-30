<template>
<div>
        <button @click="toggleLoader">toggleloader</button> {{loader}}
 <Grid :style="{height: '450px'}"
          :loader="loader"
          :data-items="result"
          :pageable="{ buttonCount: 4, pageSizes: true }"
          :skip= "skip"
          :take="take"
          :total="total"
          :columns = "columns"
          @pagechange="pageChangeHandler"
          :navigatable="true">
         <template v-slot:loader>
           <div class="k-loader-container k-loader-container-md k-loader-top">
                <div class="k-loader-container-overlay k-overlay-dark" />
                <div class="k-loader-container-inner">
                    <Loader 
                        :size="'large'"/>
                </div>
            </div>
        </template>
    </Grid>
     <Grid
      :loader="true"
      :scrollable="'none'"
      :data-items="result"
      :columns="columns"
    >
    </Grid>
    </div>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import { Loader } from '@progress/kendo-vue-indicators';

export default {
    components: {
        'Grid': Grid,
        Loader
    },
     data: function () {
        return {
            loader: false,
            dataItems: [],
            skip: 0,
            take: 10,
            columns: [
                { field: 'ProductID'},
                { field: 'ProductName', title: 'Product Name' },
                { field: 'UnitPrice', title: 'Unit Price' }
            ]
        };
    },
    computed: {
        result: {
            get: function() {
                return this.dataItems.slice(this.skip, this.take + this.skip);
            }
        },
        total () {
            return this.dataItems ? this.dataItems.length : 0;
        }
    },
    methods: {
        toggleLoader() {
            this.loader = this.loader ? false : 'loader';
        },
        pageChangeHandler: function(event) {
            this.skip = event.page.skip;
            this.take = event.page.take;
        },
        createRandomData(count) {
            const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk'];
            const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120]

            return Array(count).fill({}).map((_, idx) => ({
                ProductID: idx + 1,
                ProductName: productNames[Math.floor(Math.random() * productNames.length)],
                UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)]
            }));
        }
    },
    mounted() {
        this.dataItems = this.createRandomData(1000);
    }
};

</script>
