<template>
  <div class="k-rtl" dir="rtl">
    <pager
      :total="100"
      :page-sizes="[5, 7, 10]"
      :previous-next="true"
      :skip="skip"
      :take="take"
      @pagechange="pageChange"
    >
    </pager>

    <kFilter
      :fields="fields"
      :value="filter"
      @change="onFilterChange"
      :default-group-filter="defaultGroupFilter"
    >
    </kFilter>
  </div>
</template>

<script>
import { Pager, Filter, Operators } from "@progress/kendo-vue-data-tools";

export default {
  components: {
    pager: Pager,
    kFilter: Filter,
  },
  data: function () {
    return {
      skip: 0,
      take: 7,
      dataResult: [],
      defaultGroupFilter: {
        logic: "and",
        filters: [],
      },
      filter: {
        logic: "and",
        filters: [
          {
            field: "ProductName",
            operator: "contains",
            value: "Vue",
          },
        ],
      },
      fields: [
        {
          name: "ProductName",
          label: "Product Name",
          filter: "text",
          operators: Operators.text,
        },
        {
          name: "UnitPrice",
          label: "Unit Price",
          filter: "numeric",
          operators: Operators.numeric,
        },
        {
          name: "FirstOrderedOn",
          label: "First Ordered On",
          filter: "date",
          operators: Operators.date,
        },
        {
          name: "Discontinued",
          label: "Discontinued",
          filter: "boolean",
          operators: Operators.boolean,
        },
      ],
    };
  },
  methods: {
    pageChange: function (event) {
      this.take = event.take;
      this.skip = event.skip;
    },
    onFilterChange(event) {
      if (event.filter !== null) {
        this.filter = event.filter;
      } else {
        this.filter = this.defaultGroupFilter;
      }
    },
  },
};
</script>

<style scoped>
  .k-filter{
    text-align: right;
    display: initial;
  }
</style>