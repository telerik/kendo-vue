<template>
  <div> 
    <Chart :key="id" :transitions="false">
      <ChartTitle :text="title" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem>
          <ChartCategoryAxisTitle :text="category" />
        </ChartCategoryAxisItem>
      </ChartCategoryAxis>
      <ChartSeries>
         <ChartSeriesItem
          v-for="field in fields"
          :key="id+field.fieldName"
          :type="type"
          :data-items="datasetProcessed"
          :field="field.fieldName"
          :category-field="category"
        ></ChartSeriesItem>
      </ChartSeries>
    </Chart>
     Duration: {{datasetProcessed}}
  </div>
</template>
<script lang="ts">
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartCategoryAxisTitle,
} from "@progress/kendo-vue-charts";
import "hammerjs";
import { process } from "@progress/kendo-data-query";
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
    table: {
      type: Array,
      required: true,
    },
    multiTable: {
      type: Boolean,
      required: false,
    },
    type: {
      type: String,
      required: true,
    },
    fields: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
    dataProcessOptions: {
      type: Object,
      required: false,
    },
  },
  components: {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartCategoryAxisTitle,
  },
  computed: {
    datasetProcessed() {
      return !this.dataProcessOptions
          ? this.table
          : process(this.table, this.dataProcessOptions).data;
    }
  },
};
</script>
