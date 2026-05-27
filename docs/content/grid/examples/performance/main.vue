<template>
  <div class="row">
    <div class="col m-3">
      <KButton @click="loadItems">Load 100 000 items</KButton>
    </div>
  </div>
  <div class="row">
    <div class="col m-3">
      Virtual Scrolling
      <Switch @change="handleSwitchChange" :on-label="''" :off-label="''" />
      Paging
    </div>
  </div>
  <Grid
    :key="isPagingOn"
    :style="{ height: '440px', width: '700px' }"
    :scrollable="isPagingOn ? 'scrollable' : 'virtual'"
    :column-virtualization="true"
    :skip="skip"
    :take="take"
    :total="numberOfRows"
    :data-items="items"
    :columns="columns"
    :row-height="40"
    :pageable="isPagingOn ? pagerSettings : false"
    @pagechange="pageChange"
    :sortable="true"
    @sortchange="sortChange"
    :sort="sort"
    @cellclick="cellClick"
    @rowclick="rowClick"
    :page-size="10"
    :edit-field="'inEdit'"
    :data-item-key="'id'"
    @itemchange="itemChange"
  />
</template>

<script setup>
import { ref } from 'vue';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Switch } from '@progress/kendo-vue-inputs';
import { Grid } from '@progress/kendo-vue-grid';
import { orderBy } from '@progress/kendo-data-query';

const dataItems = ref([]);
const data = ref([]);
const numberOfColumns = 100;
const numberOfRows = 100000;
const pagerSettings = {
    info: true,
    type: 'input',
    previousNext: true,
};
const columns = ref(createColumns());
const skip = ref(0);
const take = ref(20);
const isPagingOn = ref(false);
const sort = ref([]);
const items = ref([]);

function createColumns() {
    const cols = [
        {
            field: 'id',
            width: '150px',
            editable: false,
            locked: true,
        },
    ];
    for (let c = 1; c <= numberOfColumns; c++) {
        cols.push({
            field: 'Field-' + c.toString(),
            width: '150px',
        });
    }
    return cols;
}

function getData() {
    const page = [];
    for (let r = 1; r <= numberOfRows; r++) {
        const row = { id: r };
        for (let c = 1; c <= numberOfColumns; c++) {
            row['Field-' + c] = 'R' + r + ':C' + c;
        }
        page.push(row);
    }
    return page;
}

data.value = getData();

function loadItems() {
    dataItems.value = data.value;
    items.value = dataItems.value.slice(skip.value, skip.value + take.value);
}

function pageChange(event) {
    skip.value = event.page.skip;
    take.value = event.page.take;
    items.value = dataItems.value.slice(skip.value, skip.value + take.value);
}

function handleSwitchChange(e) {
    isPagingOn.value = e.value;
}

function sortChange(e) {
    dataItems.value = orderBy(data.value, e.sort);
    items.value = dataItems.value.slice(skip.value, skip.value + take.value);
    sort.value = e.sort;
}

function cellClick(e) {
    if (e.dataItem.inEdit && e.field === 'inEdit') {
        return;
    }
    e.dataItem.inEdit = e.field;
}

function rowClick(e) {
    items.value.forEach((d) => {
        if (d.inEdit && e.dataItem !== d) {
            d.inEdit = undefined;
        }
    });
}

function itemChange(e) {
    e.dataItem[e.field] = e.value;
}
</script>
