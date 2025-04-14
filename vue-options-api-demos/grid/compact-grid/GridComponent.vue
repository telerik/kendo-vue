<template>
  <Grid
    :style="{ height: '525px', margin: '8px' }"
    :size="size"
    :data-items="result"
    :columns="columns"
    :pageable="true"
    :skip="skip"
    :take="take"
    :total="total"
    @pagechange="pageChangeHandler"
  >
    <template v-slot:changeComponent="{ props }">
      <ChangeComponent v-bind="props"
    /></template>
    <template v-slot:changePercentageComponent="{ props }">
      <ChangePercentageComponent v-bind="props"
    /></template>

    <GridToolbar :size="size">
      <div>
        {{ size === "small" ? "Compact Size Grid." : "Default Size Grid" }}
      </div>
      <span class="k-toolbar-spacer"></span>
      <KButton :svg-icon="fileExcelIcon" @click="exportExcel">
        Export to Excel
      </KButton>
    </GridToolbar>
  </Grid>
</template>
<script>
import { Grid, GridToolbar } from "@progress/kendo-vue-grid";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { saveExcel } from "@progress/kendo-vue-excel-export";
import { fileExcelIcon } from "@progress/kendo-svg-icons";

import ChangeComponent from "./ChangeComponent.vue";
import ChangePercentageComponent from "./ChangePercentageComponent.vue";
import companyData from "./companyData.json";

export default {
  components: {
    Grid,
    GridToolbar,
    KButton,
    ChangeComponent,
    ChangePercentageComponent,
  },
  props: {
    size: { type: String, default: "medium" },
  },
  data: function () {
    return {
      fileExcelIcon,
      dataItems: companyData,
      columns: [
        {
          field: "symbol",
          title: "Name",
          width: "75px",
        },
        {
          field: "date",
          title: "Date",
          type: "date",
          width: "74px",
          format: "{0:dd MMM}",
        },
        {
          field: "chng",
          title: "Chng",
          width: "67px",
          cell: "changeComponent",
        },
        {
          field: "%Chng",
          title: "%Chng",
          width: "100px",
          cell: "changePercentageComponent",
        },
        {
          field: "close",
          title: "Close",
          type: "number",
          width: "93px",
          format: "{0:c2}",
        },
        {
          field: "open",
          title: "Open",
          width: "93px",
          format: "{0:c2}",
        },
        {
          field: "low",
          title: "DLow",
          width: "93px",
          format: "{0:c2}",
        },
        {
          field: "high",
          title: "DHigh",
          width: "93px",
          format: "{0:c2}",
        },
        {
          field: "volume",
          title: "Volume",
          width: "107px",
        },
      ],
      skip: 0,
      take: 15,
    };
  },
  computed: {
    result: {
      get: function () {
        return this.dataItems.slice(this.skip, this.take + this.skip);
      },
    },
    total() {
      return this.dataItems ? this.dataItems.length : 0;
    },
  },
  methods: {
    pageChangeHandler: function (event) {
      this.loader = false;
      this.skip = event.page.skip;
      this.take = event.page.take;
    },
    exportExcel() {
      saveExcel({
        data: this.dataItems,
        fileName: "myFile",
        columns: this.columns,
      });
    },
  },
};
</script>
<style>
.buttons {
  margin-right: 10px;
}
</style>
