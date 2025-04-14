<template>
 <Grid style="height: 440px;"
          :data-items="items"
          :columns="columns"
          :total="total"
          :row-height="40"
          :skip="skip"
          :scrollable="'virtual'"
          @pagechange="pageChange">
    </Grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';

export default {
    components: {
        'Grid': Grid
    },
     mounted() {
        // request the first page on initial load
        this.requestData(0);
    },
    data: function () {
        return {
            tempSkip: 0,
            requestInProgress: false,
            pageSize: 20,
            baseUrl: 'https://demos.telerik.com/kendo-ui/service-v4/odata/Orders?$count=true&$top=60&$skip=',
            init: { method: 'GET', accept: 'application/json', headers: {} },
            orders: [],
            items: [],
            total: 0,
            skip: 0,
            columns: [
                { field: 'Index', title: 'Index', width: '70px'},
                { field: 'OrderID', title: 'Order Id', width: '100px'},
                { field: 'ShipCountry', title: 'Ship Country'},
                { field: 'ShipName', title: 'Ship Name'}
            ]
        };
    },
    methods: {
        pageChange(event) {
            this.requestIfNeeded(event.page.skip);
            this.skip = event.page.skip;
            this.items = this.orders.slice(this.skip, this.skip + 20);
        },

        requestIfNeeded(skip) {
            for (let i = skip; i < skip + this.pageSize && i < this.orders.length; i++) {
                if (this.orders[i].OrderID === undefined) {

                    this.requestData(skip);
                    return;
                }
            }
        },

        requestData(skipParameter) {
            if (this.requestInProgress) {

                return;
            }
            this.requestInProgress = true;
            var that = this;
            const skip = Math.max(skipParameter - this.pageSize, 0);

            fetch(this.baseUrl + skip, this.init)
                .then(response => response.json())
                .then(json => {
                    that.requestInProgress = false;

                    const total = json['@odata.count'];
                    const data = json['value'];
                    const orders = new Array(total).fill().map((e, i) => ({ Index: i }));

                    data.forEach((order, i) => {
                        orders[i + skip] = { Index: i + skip, ...order };
                    });

                    that.requestIfNeeded(that.skip);
                    that.orders = orders;
                    that.items = that.orders.slice(that.skip, that.skip + 20);
                    that.total = total;
                });
        }
    }
};

</script>
