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
          :columns="columns">
        <template v-slot:myTemplate="{props}">
            <custom :data-item="props.dataItem"
                    @edit="edit"
                    @save="save"
                    @remove="remove"
                    @cancel="cancel"/>
        </template>
        <template v-slot:numericCell="{props}">
            <numericCell ref="numericCell" :data-item="props.dataItem"
                    :field="props.field"
                    :validRange="unitsFieldValueIsInRange"
                    :valueNotEmpty="unitsFieldHasValue"
                    @change="(e)=>validate(props.dataItem)"
                    />
        </template>
        <template v-slot:inputCell="{props}">
            <inputCell :data-item="props.dataItem"
                    :field="props.field"
                    :validLength="productNameFieldLengthaboveThree"
                    @change="(e)=>validate(props.dataItem)"
                    />
        </template>
        <template v-slot:dateCell="{props}">
            <dateCell :data-item="props.dataItem"
                    :field="props.field"
                    :dateInRange="firstOrderedOnDateBetweenRange"
                    @change="(e)=>validate(props.dataItem)"
                    />
        </template>
        <grid-toolbar>
            <kbutton title="Add new"
                    :theme-color="'primary'"
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
import sampleProducts from "./products.js";
import NumericCell from './NumericCell.vue';
import InputCell from './InputCell.vue';
import DatePickerCell from './DatePickerCell.vue';

import {unitsFieldHasValue, unitsFieldValueIsInRange, isLengthAboveThree ,isDateBetweenRange} from "./verificationFunctions.js";


export default {
    components: {
        'Grid': Grid,
        'grid-toolbar': GridToolbar,
        'grid-norecords': GridNoRecords,
        'custom': CommandCell,
        'numericCell': NumericCell,
        'inputCell': InputCell,
        'dateCell': DatePickerCell,
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
            total: 10,
            updatedData: [],
            editID: null,
            columns: [
                { field: 'ProductID', filterable: false, editable: false, title: 'ID', width: '80px' },
                { field: 'ProductName', title: 'Name',  width: '200px', cell: "inputCell" },
                { field: 'FirstOrderedOn', title: 'First Ordered',  width: '200px', cell: "dateCell" },
                { field: 'UnitsInStock', title: 'Units', width: '200px', cell: 'numericCell' },
                { cell: 'myTemplate', filterable: false }
            ],
            gridData: [],
            unitsFieldHasValue: true,
            unitsFieldValueIsInRange: true,
            productNameFieldLengthaboveThree: true,
            firstOrderedOnDateBetweenRange: true
        };
    },
    computed: {
        hasItemsInEdit() {
            return this.gridData.filter(p => p.inEdit).length > 0;
        }
    },
    created: function() {
        this.updatedData = sampleProducts;
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
        validate: function(dataItem){
            const unitsInStockValue = dataItem.UnitsInStock;
            const productNameValue = dataItem.ProductName;
            const orderDateValue = dataItem.FirstOrderedOn;

            this.unitsFieldHasValue = unitsFieldHasValue(unitsInStockValue);
            this.unitsFieldValueIsInRange = unitsFieldValueIsInRange(unitsInStockValue);
            this.productNameFieldLengthaboveThree =  isLengthAboveThree(productNameValue);
            this.firstOrderedOnDateBetweenRange = isDateBetweenRange(orderDateValue);

            return this.unitsFieldHasValue && this.unitsFieldValueIsInRange && this.productNameFieldLengthaboveThree && this.firstOrderedOnDateBetweenRange;
        },
        insert: function() {
            const dataItem = { inEdit: true };
            const newproducts = this.gridData.slice();
            this.gridData.splice(0, 0, dataItem)
        },
        edit: function (e) {
            let index = this.gridData.findIndex(p => p.ProductID === e.dataItem.ProductID);
            let updated = Object.assign({},this.gridData[index], {inEdit:true});
            this.gridData.splice(index, 1, updated);
        },
        save: function(e) {
            if(this.validate(e.dataItem)){
                let index = this.gridData.findIndex(p => p.ProductID === e.dataItem.ProductID);
                let item = this.gridData[index];
                let updated = Object.assign(this.update(this.gridData.slice(), item, false), {inEdit:undefined});
                this.gridData.splice(index, 1, updated);
                let updateDataIndex = this.updatedData.findIndex(p => p.ProductID === e.dataItem.ProductID);
                this.updatedData.splice(updateDataIndex, 1, updated);
            }
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
            this.gridData = this.gridData.slice();
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
        }
    }
};

</script>

<style scoped>
  .errorMessage{
    display: block;
    color: red;
  }

  .popup-content {
    color: #787878;
    background-color: #fcf7f8;
    border: 1px solid red;
    width: 180px;
  }
</style>
