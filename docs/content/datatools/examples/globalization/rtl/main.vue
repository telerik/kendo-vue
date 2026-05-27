<template>
  <div class="k-rtl" dir="rtl">
    <Pager
      :total="100"
      :page-sizes="[5, 7, 10]"
      :previous-next="true"
      :skip="skip"
      :take="take"
      @pagechange="pageChange"
    />
    <Filter
      :fields="fields"
      :value="filter"
      @change="onFilterChange"
      :default-group-filter="defaultGroupFilter"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Pager, Filter, Operators } from "@progress/kendo-vue-data-tools";

const skip = ref(0);
const take = ref(7);
const defaultGroupFilter = ref({
    logic: "and",
    filters: [],
});
const filter = ref({
    logic: "and",
    filters: [
        {
            field: "ProductName",
            operator: "contains",
            value: "Vue",
        },
    ],
});
const fields = ref([
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
]);

function pageChange(event) {
    take.value = event.take;
    skip.value = event.skip;
}

function onFilterChange(event) {
    filter.value = event.filter || defaultGroupFilter.value;
}
</script>

<style scoped>
.k-filter {
  text-align: right;
  display: initial;
}
</style>
