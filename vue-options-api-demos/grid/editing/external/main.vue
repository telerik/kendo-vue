<template>
 <div class="example-wrapper">
         <Grid ref="grid"
            :style="{height: '440px'}"
            :data-items="products"
            :columns="columns">
        <template v-slot:myTemplate="{props}">
            <custom :data-item="props.dataItem"
                    @edit="edit"
                    @remove="remove"/>
        </template>
        <grid-toolbar>
            <kbutton title="Add new"
                    :theme-color="'primary'"
                    @click='insert' >
                Add new
            </kbutton>
        </grid-toolbar>
        <grid-norecords>
            There is no data available custom
        </grid-norecords>
        </Grid>
        <dialog-container v-if="productInEdit" :data-item="productInEdit" @save="save" @cancel="cancel">
        </dialog-container>
    </div>
</template>
<script>
import { Grid, GridToolbar, GridNoRecords } from '@progress/kendo-vue-grid';
import { sampleProducts } from './data';
import DialogContainer from './DialogContainer.vue';
import CommandCell from './CommandCell.vue';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
        'Grid': Grid,
        'grid-toolbar': GridToolbar,
        'grid-norecords': GridNoRecords,
        'dialog-container': DialogContainer,
         'custom': CommandCell,
        'kbutton': Button
    },
    data: function () {
        return {
            products: sampleProducts.slice(0, 7),
            productInEdit: undefined,
            columns: [
                { field: 'ProductID', editable: false, title: 'ID', width: '80px' },
                { field: 'ProductName', title: 'Name' },
                { field: 'UnitsInStock', title: 'Units', filter: 'numeric', width: '150px', editor: 'numeric' },
                { field: "Discontinued" },
                { cell: 'myTemplate', width: '210px' }
            ]
        };
    },
    methods: {
       edit(dataItem) {
          this.productInEdit = this.cloneProduct(dataItem);
       },
       remove(dataItem) {
          this.products = this.products.filter(p => p.ProductID !== dataItem.ProductID);
      },
       save() {
        const dataItem = this.productInEdit;
        const products = this.products.slice();
        const isNewProduct = dataItem.ProductID === undefined;

        if (isNewProduct) {
            products.unshift(this.newProduct(dataItem));
        } else {
            const index = products.findIndex(p => p.ProductID === dataItem.ProductID);
            products.splice(index, 1, dataItem);
        }

        this.products= products;
        this.productInEdit= undefined;
      },
      cancel () {
          this.productInEdit= undefined;
      },
      insert () {
          this.productInEdit = { };
      },
      dialogTitle() {
          return `${this.productInEdit.ProductID === undefined ? 'Add' : 'Edit'} product`;
      },
      cloneProduct(product) {
          return Object.assign({}, product);
      },
      newProduct(source) {
          const id = this.products.reduce((acc, current) => Math.max(acc, current.ProductID || 0), 0) + 1;
          const newProduct = {
              ProductID: id,
              ProductName: '',
              UnitsInStock: 0,
              Discontinued: false
          };

          return Object.assign(newProduct, source);
      }
    }
};

</script>
