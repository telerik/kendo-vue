<template>
  <Grid
    :style="{ height: '320px' }"
    :data-items="[]"
    :columns="columns"
    :pageable="true"
    :skip="0"
    :take="5"
  >
    <GridNoRecords> Test </GridNoRecords>
  </Grid>
</template>

<script setup>
import { Grid, GridNoRecords } from "@progress/kendo-vue-grid";

const columns = [
  { field: "ProductID", title: "ID", width: "80px" },
  { field: "ProductName", title: "Name" },
];
</script>
