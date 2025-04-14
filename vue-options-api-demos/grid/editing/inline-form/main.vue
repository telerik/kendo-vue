<template>
  <Grid
    ref="grid"
    :style="{ height: '440px' }"
    :data-items="gridData"
    :edit-field="'inEdit'"
    @itemchange="itemChange"
    :columns="columns"
  >
    <template v-slot:myTemplate="{ props }">
      <custom
        :data-item="props.dataItem"
        :allow-save="nameValidState"
        @edit="edit"
        @save="save"
        @remove="remove"
        @cancel="cancel"
      />
    </template>
    <template v-slot:myNameCell="{ props }">
      <namecell
        ref="namecell"
        :data-item="props.dataItem"
        :field="props.field"
        @change="(e) => nameChange(e, props.dataItem)"
        @valid="updateNameValidState"
      />
    </template>
    <grid-toolbar>
      <kbutton title="Add new" :theme-color="'primary'" @click="insert">
        Add new
      </kbutton>
      <kbutton
        v-if="hasItemsInEdit"
        title="Cancel current changes"
        @click="cancelChanges"
      >
        Cancel current changes
      </kbutton>
    </grid-toolbar>
    <grid-norecords> There is no data available custom </grid-norecords>
  </Grid>
</template>
<script>
import { Grid, GridToolbar, GridNoRecords } from '@progress/kendo-vue-grid';
import { Button } from '@progress/kendo-vue-buttons';
import CommandCell from './CommandCell.vue';
import NameCell from './NameCell.vue';
import { isLengthAboveThree } from './verificationFunctions.js';

var sampleProducts = [
  {
    ProductID: 1,
    ProductName: 'Chai',
  },
  {
    ProductID: 2,
    ProductName: 'Chang',
  },
  {
    ProductID: 3,
    ProductName: 'Aniseed Syrup',
  },
  {
    ProductID: 4,
    ProductName: "Chef Anton's Cajun Seasoning",
  },
];

export default {
  components: {
    Grid: Grid,
    'grid-toolbar': GridToolbar,
    'grid-norecords': GridNoRecords,
    custom: CommandCell,
    namecell: NameCell,
    kbutton: Button,
  },
  data: function () {
    return {
      gridData: sampleProducts.slice(0),
      updatedData: [],
      editID: null,
      group: [{ field: 'UnitsInStock' }],
      expandedItems: [],
      columns: [
        { field: 'ProductID', editable: false, title: 'ID', width: '80px' },
        { field: 'ProductName', title: 'Name', cell: 'myNameCell' },
        { cell: 'myTemplate', width: '210px' },
      ],
      nameValidState: true,
      initialDataItem: undefined,
    };
  },
  computed: {
    hasItemsInEdit() {
      return this.gridData.filter((p) => p.inEdit).length > 0;
    },
  },
  methods: {
    nameChange(e, dataItem) {
      if (this.nameValidState) {
        const updatedData = this.gridData.slice();

        const item = this.update(updatedData, dataItem, false);
        item.ProductName = e.target.value;
        this.gridData = updatedData;
      }
    },
    validate(dataItem) {
      const productNameValue = dataItem.ProductName;

      this.productNameFieldLengthaboveThree =
        isLengthAboveThree(productNameValue);

      return this.productNameFieldLengthaboveThree;
    },
    itemChange(e) {
      const updatedData = this.gridData.slice();

      const item = this.update(updatedData, e.dataItem, false);
      item[e.field] = e.value;
      this.gridData = updatedData;
    },
    insert() {
      const updatedData = this.gridData.slice();
      const dataItem = { inEdit: true, Discontinued: false, isNew: true };
      const item = this.update(updatedData, dataItem, false);
      const newproducts = this.gridData.slice();
      newproducts.unshift(item);
      this.update(newproducts, item, false);
      this.gridData = newproducts;
    },
    edit(e) {
      this.initialDataItem = { ...e.dataItem };
      e.dataItem.inEdit = true;
    },
    save(e) {
      if (this.validate(e.dataItem)) {
        let index = this.gridData.findIndex(
          (p) => p.ProductID === e.dataItem.ProductID
        );
        let item = this.gridData[index];
        let updated = Object.assign(
          this.update(this.gridData.slice(), item, false),
          { inEdit: undefined }
        );
        this.gridData.splice(index, 1, updated);
        let updateDataIndex = this.updatedData.findIndex(
          (p) => p.ProductID === e.dataItem.ProductID
        );
        this.updatedData.splice(updateDataIndex, 1, updated);
      }
    },
    update(data, item, remove) {
      let updated;
      let itemProductID = item.ProductID;
      let index = data.findIndex(
        (p) =>
          JSON.stringify({ ...p }) === JSON.stringify(item) ||
          (itemProductID && p.ProductID === itemProductID)
      );
      if (index >= 0) {
        updated = Object.assign({}, item);
        data[index] = updated;
      } else {
        let id = 1;
        data.forEach((p) => {
          id = Math.max(p.ProductID + 1, id);
        });
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
      if (!e.isNew && this.initialDataItem) {
        e.dataItem.inEdit = undefined;
        this.gridData.shift();
        this.newEntry = false;
        this.update(this.gridData, this.initialDataItem, false);
      } else {
        this.update(this.gridData, e.dataItem, true);
      }
    },
    remove(e) {
      e.dataItem.inEdit = undefined;
      this.update(this.gridData, e.dataItem, true);
      this.update(sampleProducts, e.dataItem, true);
      this.gridData = this.gridData.slice();
    },
    cancelChanges() {
      let editedItems = sampleProducts.filter((p) => p.inEdit === true);
      if (editedItems.length) {
        editedItems.forEach((item) => {
          item.inEdit = undefined;
        });
      }

      this.gridData = sampleProducts.slice();
    },
    updateNameValidState(value) {
      this.nameValidState = value;
    },
  },
};
</script>
