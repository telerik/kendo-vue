<template>
        <grid
            :data-items="data"
            :columns="columns"
            :editField="'inEdit'"
            :scrollable="'none'"
            @itemchange="itemChange"
            >
        </grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';

export default {
    components: {
        'grid': Grid
    },
    data: function () {
        return {
            columns: [
                { field: 'ProductName', title: 'Product Name', editable: false },
                { field: 'UnitPrice', title: 'Price', editor: "numeric" },
                { field: 'UnitsOnOrder', title: 'Units On Order', editor: "numeric" },
                { title: "Total value", cell: this.cellWithBackGround}
            ],
            data: null,
            initialData: [
                            {
                                ProductID: 1,
                                ProductName: "Tea",
                                UnitPrice: 18,
                                UnitsOnOrder: 20,
                                inEdit: true,
                            },
                            {
                                ProductID: 2,
                                ProductName: "Coffee",
                                UnitPrice: 10,
                                UnitsOnOrder: 55,
                                inEdit: true,
                            }
                        ]
        };
    },
    mounted: function(){
        this.data = this.initialData;
    },
    methods: {
        itemChange: function(event){
            const field = event.field || "";
            event.dataItem[field] = event.value;
            let newData = this.data.map((item) => {
                if (item.ProductID === event.dataItem.ProductID) {
                    item[field] = event.value;
                }

                return item;
            });
            this.data = newData;
        },
        cellWithBackGround : function (h, tdElement , props, listeners ) {
            const product = props.dataItem.UnitPrice * props.dataItem.UnitsOnOrder;
            
            if (product < 400) {
                return h('td', 
                        {
                            style:{"background-color": "rgb(55, 180, 0,0.32)"}
                        }, 
                        [product]);
            }

            return h('td', 
                        {
                            style:{"background-color": "rgb(243, 23, 0, 0.32)"}
                        }, 
                        [product, h('span', {}, ' Maximum exceeded')]);
        }
    }
};

</script>
