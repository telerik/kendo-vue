<template>
  <Grid
    ref="grid"
    :data-items="gridData"
    :edit-field="'inEdit'"
    @rowclick="rowClick"
    @cellclick="cellClick"
    @itemchange="itemChange"
    :columns="columns"
  >
    <toolbar>
      <KButton title="Save Changes" @click="saveChanges" :disabled="!changes">
        Save Changes
      </KButton>
      <KButton
        title="Cancel Changes"
        @click="cancelChanges"
        :disabled="!changes"
      >
        Cancel Changes
      </KButton>
    </toolbar>
  </Grid>
</template>
<script>
import { Grid, GridToolbar } from "@progress/kendo-vue-grid";
import { Button as KButton } from "@progress/kendo-vue-buttons";
var sampleProducts = [
  {
    ProductID: 1,
    ProductName: "Chai",
    UnitsInStock: 39,
    Discontinued: false,
    FirstOrderedOn: new Date(1996, 8, 20),
  },
  {
    ProductID: 2,
    ProductName: "Chang",
    UnitsInStock: 17,
    Discontinued: false,
    FirstOrderedOn: new Date(1996, 7, 12),
  },
  {
    ProductID: 3,
    ProductName: "Aniseed Syrup",
    UnitsInStock: 13,
    Discontinued: false,
    FirstOrderedOn: new Date(1996, 8, 26),
  },
  {
    ProductID: 4,
    ProductName: "Chef Anton's Cajun Seasoning",
    UnitsInStock: 53,
    Discontinued: false,
    FirstOrderedOn: new Date(1996, 9, 19),
  },
];

export default {
  components: {
    Grid: Grid,
    toolbar: GridToolbar,
    KButton,
  },
  mounted() {
    const that = this;
    document.body.addEventListener("click", function (e) {
      document
        .querySelector(".k-grid-container")
        .querySelector("." + e.target.classList[0]) !== null
        ? ""
        : that.exitEdit(undefined, true);
    });
  },
  data: function () {
    return {
      editItem: undefined,
      changes: false,
      updatedData: [],
      editID: null,
      editField: undefined,
      group: [{ field: "UnitsInStock" }],
      expandedItems: [],
      columns: [
        { field: "ProductID", editable: false, title: "ID", width: "80px" },
        { field: "ProductName", title: "Name" },
        {
          field: "FirstOrderedOn",
          editor: "date",
          title: "First Ordered",
          format: "{0:d}",
        },
        {
          field: "UnitsInStock",
          title: "Units",
          width: "150px",
          editor: "numeric",
        },
        { field: "Discontinued", title: "Discontinued", editor: "boolean" },
      ],
      gridData: sampleProducts.map((product) => Object.assign({}, product)),
    };
  },
  methods: {
    cloneProduct(product) {
      return Object.assign({}, product);
    },
    saveChanges() {
      sampleProducts.splice(0, sampleProducts.length, ...this.gridData);
      this.gridData = sampleProducts.map((product) =>
        Object.assign({}, product)
      );
      this.editField = undefined;
      this.changes = false;
      this.exitEdit(undefined, true);
    },
    cancelChanges() {
      this.gridData = sampleProducts.map((product) =>
        Object.assign({}, product)
      );
      this.changes = false;
      this.exitEdit(undefined, true);
    },
    exitEdit: function (dataItem, exitEdit) {
      if (!exitEdit && dataItem.inEdit) {
        return;
      }
      this.gridData.forEach((d) => {
        if (d.inEdit) {
          d.inEdit = undefined;
        }
      });
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
    },
    cellClick: function (e) {
      if (e.dataItem.inEdit && e.field === this.editField) {
        return;
      }

      this.exitEdit(e.dataItem, true);
      this.editField = e.field;
      e.dataItem.inEdit = e.field;
    },
  },
};
</script>
