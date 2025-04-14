<template>
 <Grid ref="grid"
          :style="{height: '440px'}"
          :data-items="gridData"
          :edit-field="'inEdit'"
          :sortable="true"
          :pageable="pageable"
          :take="take"
          :skip="skip"
          :total="total"
          @itemchange="itemChange"
          @datastatechange="dataStateChange"
          :columns="columns"
          :navigatable="true">
        <template v-slot:myTemplate="{props}">
            <custom v-bind="props"
                    @edit="edit"
                    @save="save"
                    @remove="remove"
                    @cancel="cancel"/>
        </template>
        <grid-toolbar>
            <kbutton title="Add new"
                    @click='insert' >
                Add new
            </kbutton>
            <kbutton v-if="hasItemsInEdit"
                    title="Cancel current changes"
                    @click="cancelChanges">
                    Cancel current changes
            </kbutton>
        </grid-toolbar>
        <grid-norecords>
            There is no data available custom
        </grid-norecords>
    </Grid>
</template>
<script>
import { Grid, GridToolbar, GridNoRecords } from '@progress/kendo-vue-grid';
import { Button } from '@progress/kendo-vue-buttons';
import { process } from '@progress/kendo-data-query';
import CommandCell from './CommandCell.vue';

export default {
    components: {
        'Grid': Grid,
        'grid-toolbar': GridToolbar,
        'grid-norecords': GridNoRecords,
        'custom': CommandCell,
        'kbutton': Button
    },
    data: function () {
        return {
            filter: null,
            sort: null,
            pageable: true,
            gridData: [],
            skip: 0,
            take: 10,
            total: 100,
            updatedData: [],
            editID: null,
            columns: [
                { field: 'ProductID', filterable: false, editable: false, title: 'ID', width: '80px' },
                { field: 'ProductName', title: 'Name' },
                { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
                { field: 'UnitsInStock', title: 'Units', filter: 'numeric', width: '200px', editor: 'numeric' },
                { field: 'Discontinued', title: 'Discontinued', editor:'boolean' },
                { cell: 'myTemplate', filterable: false, width: '210px' }
            ],
            gridData: []
        };
    },
    computed: {
        hasItemsInEdit() {
            return this.gridData.filter(p => p.inEdit).length > 0;
        }
    },
    created: function() {
        this.updatedData = this.createRandomData(this.total);
        this.getData();
    },
    methods: {
        itemChange: function (e) {
            if (e.dataItem.ProductID) {
              let index = this.gridData.findIndex(p => p.ProductID === e.dataItem.ProductID);
              let updated = Object.assign({},this.gridData[index], {[e.field]:e.value});
              this.gridData.splice(index, 1, updated);
            } else {
              e.dataItem[e.field] = e.value;
            }
        },
        insert() {
            const dataItem = { inEdit: true };
            this.gridData.splice(0, 0, dataItem)
        },
        edit: function (e) {
            let index = this.gridData.findIndex(p => p.ProductID === e.dataItem.ProductID);
            let updated = Object.assign({},this.gridData[index], {inEdit:true});
            this.gridData.splice(index, 1, updated);
        },
        save: function(e) {
            let index = this.gridData.findIndex(p => p.ProductID === e.dataItem.ProductID);
            let item = this.gridData[index];
            let updated = Object.assign(this.update(this.gridData.slice(), item, false), {inEdit:undefined});
            this.gridData.splice(index, 1, updated);
            let updateDataIndex = this.updatedData.findIndex(p => p.ProductID === e.dataItem.ProductID);
            this.updatedData.splice(updateDataIndex, 1, updated);
        },
        update(data, item, remove) {
            let updated;
            let index = data.findIndex(p => item.ProductID && p.ProductID === item.ProductID);
            if (index >= 0) {
                updated = Object.assign({}, item);
                data[index] = updated;
            } else {
                let id = 1;
                this.updatedData.forEach(p => { if (p.ProductID) { id = Math.max(p.ProductID + 1, id); } });
                updated = Object.assign({}, item, { ProductID: id });
                data.unshift(updated);
                index = 0;
            }

            if (remove) {
                data = data.splice(index, 1);
            }
            return data[index];
        },
        cancel(e) {
            if (e.dataItem.ProductID) {
                let index = this.gridData.findIndex(p => p.ProductID === e.dataItem.ProductID);
                let updateDataIndex = this.updatedData.findIndex(p => p.ProductID === e.dataItem.ProductID);
                let updated = Object.assign(this.updatedData[updateDataIndex], {'inEdit': undefined});
                this.gridData.splice(index, 1, updated);
            } else {
              let index = this.gridData.findIndex(p => JSON.stringify(e.dataItem) === JSON.stringify(p));

              this.gridData.splice(index, 1);
            }
        },
        remove(e) {
            e.dataItem.inEdit = undefined;
            this.update(this.gridData, e.dataItem, true);
            this.update(this.updatedData, e.dataItem, true);
        },
        cancelChanges () {
             let editedItems = this.updatedData.filter(p => p.inEdit === true);
             if(editedItems.length){
                editedItems.forEach(
                    item => {
                       item.inEdit = undefined;
                     });
             }
            this.getData();
        },
         getData: function () {
            this.gridData = process(
              this.updatedData,
             {
               take: this.take,
               skip: this.skip,
               sort: this.sort,
               filter: this.filter
            }).data;

           this.total = process(
              this.updatedData,
             {
               filter: this.filter
            }).total;
        },
        createAppState: function(dataState) {
            this.take = dataState.take;
            this.skip = dataState.skip;
            this.filter = dataState.filter;
            this.sort = dataState.sort;
            this.getData();
        },
        dataStateChange: function (event) {
            this.createAppState(event.data);
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
                Discontinued: trueFalse[Math.floor(Math.random() * trueFalse.length)]
            }));
        }
    }
};

</script>
