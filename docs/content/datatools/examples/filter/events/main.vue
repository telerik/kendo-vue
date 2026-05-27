<template>
  <div>
    <Filter
      :fields="fields"
      :value="filter"
      @change="onFilterChange"
      :default-group-filter="defaultGroupFilter"
    />
    <br />
    <div class="example-config">
      <h5>{{ title }}</h5>
      <ul class="event-log">
        <li v-for="(event, index) in events" :key="index">{{ event }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Filter, Operators } from "@progress/kendo-vue-data-tools";

const title = ref("Event log");
const events = ref([]);
const defaultGroupFilter = {
    logic: "and",
    filters: [],
};
const filter = ref({
    logic: "and",
    filters: [
        { field: "ProductName", operator: "contains", value: "an" },
        { field: "UnitPrice", operator: "neq", value: 22 },
    ],
});

const fields = [
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
];

const onFilterChange = (event) => {
    if (event.filter !== null) {
        filter.value = event.filter;
        log("filterChange");
    } else {
        filter.value = defaultGroupFilter;
    }
};

const log = (event) => {
    events.value.unshift(`Event: ${event} was triggered`);
};
</script>
