<script lang="ts" setup>
import DropDownList from './KendoDropDownList.vue';
import Grid from './KendoGrid.vue';
import Window from './KendoWindow.vue';

const rowData = ref({});
const category = ref();

const onRowClick = (event: any) => {
  rowData.value = event;
}

const onCloseWindow = (event: any) => {
  rowData.value = { windowVisible: false };
}

const onCategoryChange = (event: any) => {
  category.value = event.category;
}
</script>

<template>
  <div>
    <h1>Hello Kendo UI for Vue with Nuxt 3!</h1>
    <DropDownList @change="onCategoryChange" />
    <Grid @row-click="onRowClick" :category="category" />
    <Window :row-data="rowData" @close-window="onCloseWindow" />
  </div>
</template>

<style scoped>

</style>
