<template>
  <Grid ref="grid"
           :data-items="gridData"
           :edit-field="'inEdit'"
           @rowclick="rowClick"
           @cellclick="cellClick"
           :row-render="cellFunction"
           @itemchange="itemChange"
           :columns="columns">
         <toolbar>
             <kbutton title="Save Changes"
                     @click="saveChanges"
                     :disabled="(!changes)">
                 Save Changes
             </kbutton>
             <kbutton title="Cancel Changes"
                     @click="cancelChanges"
                     :disabled="(!changes)">
                 Cancel Changes
             </kbutton>
         </toolbar>
     </Grid>
 </template>
 <script>
 import { Grid, GridToolbar } from '@progress/kendo-vue-grid';
 import { Button } from '@progress/kendo-vue-buttons';
 var sampleProducts = [{
     "ProductID": 1,
     "ProductName": "Chai",
     "UnitsInStock": 39,
     "Discontinued": false,
     "FirstOrderedOn": new Date(1996, 8, 20)
 },{
     "ProductID": 2,
     "ProductName": "Chang",
     "UnitsInStock": 17,
     "Discontinued": false,
     "FirstOrderedOn": new Date(1996, 7, 12)
 },{
     "ProductID": 3,
     "ProductName": "Aniseed Syrup",
     "UnitsInStock": 13,
     "Discontinued": false,
     "FirstOrderedOn": new Date(1996, 8, 26)
 },{
     "ProductID": 4,
     "ProductName": "Chef Anton's Cajun Seasoning",
     "UnitsInStock": 53,
     "Discontinued": false,
     "FirstOrderedOn": new Date(1996, 9, 19)
 }];
 
 export default {
     components: {
         'Grid': Grid,
         'toolbar': GridToolbar,
       'kbutton': Button
     },
     data: function () {
         return {
             editItem: undefined,
             changes: false,
             updatedData: [],
             editID: null,
             editField: undefined,
             group: [ { field: 'UnitsInStock' } ],
             expandedItems: [],
             columns: [
                 { field: 'ProductID', editable: false, title: 'ID', width: '80px' },
                 { field: 'ProductName', title: 'Name' },
                 { field: 'FirstOrderedOn', editor: 'date', title: 'First Ordered', format: '{0:d}' },
                 { field: 'UnitsInStock', title: 'Units',  width: '150px', editor: 'numeric' },
                 { field: 'Discontinued', title: 'Discontinued',  editor: 'boolean' }
             ],
             gridData: sampleProducts.map((product) => Object.assign({}, product))
         };
     },
     methods: {
         cloneProduct(product) {
             return Object.assign({}, product);
         },
         saveChanges() {
             sampleProducts.splice(0, sampleProducts.length, ...this.gridData);
             this.gridData = sampleProducts.map((product) => Object.assign({}, product));
             this.editField = undefined;
             this.changes = false;
         },
         cancelChanges() {
 
             this.gridData = sampleProducts.map((product) => Object.assign({}, product));
             this.changes = false;
         },
         cellFunction: function (h, trElement , defaultSlots, props ) {
           console.log('rowrender')
             if (!props.dataItem.inEdit) {
                 return trElement;
             }
 
             return h(
                 'tr',
                 { on: {
                     mousedown: () => this.exitEdit(props.dataItem)
                 }},
                 defaultSlots);
         },
         exitEdit: function (dataItem) {
             if (dataItem.inEdit) {
                 return;
             }
             this.gridData.forEach((d) => {
                 if (d.inEdit) {
                     d.inEdit = undefined;
                 }
              });
             this.gridData = this.gridData;
             this.editField = undefined;
         },
         itemChange: function (e) {
             e.dataItem[e.field] = e.value;
             this.changes = true;
         },
         rowClick: function (e) {
             this.gridData.forEach((d) => {
                 if (d.inEdit) {
                     if (e.dataItem !== d) {
                         d.inEdit = undefined;
                     }
                 }
              });
             this.gridData = this.gridData;
         },
         cellClick: function (e) {
             if (e.dataItem.inEdit && e.field === this.editField) {
                 return;
             }
             this.editField = e.field;
             this.gridData = this.gridData;
 
             e.dataItem.inEdit = e.field;
         }
     }
 };
 
 </script>