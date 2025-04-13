<template>
  <div class="row">
    <div class="col m-3">
      <NumericTextBox
        v-if="!loader"
        v-model="numberOfColumns"
        :min="1"
        :label="'Number of columns'"
        :style="{ width: '250px' }"
      ></NumericTextBox>
      <div>Loading columns from a remote service</div>
    </div>
  </div>
  <Grid
    :style="{ height: '440px', width: '700px' }"
    :data-items="data"
    :columns="columns"
    :loader="loader"
  >
  </Grid>
</template>
<script>
import { NumericTextBox } from "@progress/kendo-vue-inputs";
import { Grid } from "@progress/kendo-vue-grid";

export default {
  components: {
    Grid,
    NumericTextBox,
  },
  data: function () {
    return {
      dataItems: [],
      data: [],
      numberOfColumns: 3,
      numberOfRows: 10,
    };
  },
  created() {
    this.data = this.getData();
  },
  computed: {
    columns() {
      const columns = [
        {
          field: "id",
          width: "150px",
        },
      ];
      for (let c = 1; c < this.numberOfColumns; c++) {
        columns.push({
          field: "Field-" + c.toString(),
          width: "150px",
        });
      }
      return columns;
    },
  },
  watch: {
    numberOfColumns() {
      this.loader = true;
      setTimeout(() => {
        this.data = this.getData();
        this.loader = false;
      }, 1000);
    },
  },
  methods: {
    getData() {
      const page = [];
      for (let r = 1; r <= this.numberOfRows; r++) {
        const row = {
          id: r,
        };
        for (let c = 1; c <= this.numberOfColumns; c++) {
          row["Field-" + c] = "R" + r + ":C" + c;
        }
        page.push(row);
      }
      return page;
    },
  },
};
</script>
