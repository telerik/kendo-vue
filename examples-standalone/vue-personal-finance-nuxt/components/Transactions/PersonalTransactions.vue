<template>
  <Card class="k-p-4 k-gap-4 k-rounded-lg k-gap-3.5">
    <div class="k-d-grid k-gap-4">
      <div
        :style="{
          fontSize: '20px',
          letterSpacing: 'wide',
          fontWeight: '500',
        }"
      >
        Transactions
      </div>
    </div>
    <Grid
      ref="grid"
      :data-items="gridData"
      :columns="columns"
      :sortable="true"
      :sort="sort"
      :selectable="true"
      :selected-field="selectedField"
      :take="take"
      :skip="skip"
      :group="group"
      :groupable="true"
      :pageable="gridPageable"
      :filter="filter"
      :column-menu="columnMenu"
      @datastatechange="dataStateChange"
      @selectionchange="onSelectionChange"
      @headerselectionchange="onHeaderSelectionChange"
    >
      <GridToolbar>
        <KButton
          :style="{ backgroundColor: '#616161' }"
          :title="'Export Excel'"
          :svg-icon="fileExcelIcon"
          @click="excelExport"
        >
          Export to Excel
        </KButton>
      </GridToolbar>
      <template #statusBadge="{ props }">
        <CustomCell :cell-data="props">
          <StatusBadge :data-item="props.dataItem" />
        </CustomCell>
      </template>
      <template #amountCell="{ props }">
        <CustomCell :cell-data="props">
          {{ displayCurrencyValue(props.dataItem.amount, currency) }}
        </CustomCell>
      </template>
    </Grid>
  </Card>
</template>
<script setup>
import { computed, onBeforeMount, ref, inject } from "vue";
import { Card } from "@progress/kendo-vue-layout";
import { Grid, GridToolbar } from "@progress/kendo-vue-grid";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { fileExcelIcon, filePdfIcon } from "@progress/kendo-svg-icons";
import { process } from "@progress/kendo-data-query";
import { saveExcel } from "@progress/kendo-vue-excel-export";
import { gridTransactions } from "../data/transactions";
import StatusBadge from "@/components/common/StatusBadge.vue";
import CustomCell from "@/components/common/CustomCell.vue";
import { displayCurrencyValue } from "@/utils/currency-converter";

const currency = inject("currency");
const emit = defineEmits(["selectionChange"]);

const columns = computed(() => {
    return [
        {
            field: "selected",
            width: "60px",
            columnMenu: false,
        },
        {
            title: "Date",
            field: "dateOfPurchase",
            width: "150px",
            format: "{0:MM/dd/yyyy}",
        },
        {
            title: "Amount",
            field: "amount",
            width: "150px",
            cell: "amountCell",
        },
        {
            title: "Merchant",
            field: "merchant",
            width: "150px",
        },
        {
            title: "Status",
            field: "orderStatus",
            width: "129px",
            cell: "statusBadge",
        },
    ];
});

const group = ref([]);
const take = ref(11);
const skip = ref(0);
const sort = ref([]);
const filter = ref(null);
const columnMenu = ref(true);

const selectedField = ref("selected");
const gridPageable = ref({
    buttonCount: 4,
    info: false,
    type: "numeric",
    pageSizes: [11, 22],
    previousNext: true,
});
const gridData = ref([]);
const transactions = ref([]);

const getData = async (data) => {
    return process(data, {
        group: group.value,
        take: take.value,
        skip: skip.value,
        sort: sort.value,
        filter: filter.value,
    });
};

onBeforeMount(async () => {
    transactions.value = gridTransactions;
    gridData.value = await getData(gridTransactions);
    gridData.value.data[0].selected = true;
});

const createAppState = async (dataState) => {
    group.value = dataState.group;
    take.value = dataState.take;
    skip.value = dataState.skip;
    sort.value = dataState.sort;
    filter.value = dataState.filter;

    gridData.value = await getData(transactions.value);
};

const dataStateChange = (event) => {
    createAppState(event.data);
};

const onSelectionChange = (event) => {
    gridData.value.data = gridData.value.data.map((item) => {
        if (item.id === event.dataItem.id) {
            return { ...item, selected: true };
        }
        return {...item, selected: false};
    });

    emit("selectionChange", event.dataItem);
};

const onHeaderSelectionChange = (event) => {
    
    const checked = event.event.target.checked;
    transactions.value = transactions.value.map((item) => {
        return { ...item, selected: checked };
    });

    gridData.value.data = gridData.value.data.map((item) => {
        return { ...item, selected: checked };
    });
};

const excelExport = () => {
    const columnsToExport = [...columns.value];
    columnsToExport.splice(0, 1);
    saveExcel({
        data: gridData.value.data,
        group: group.value,
        fileName: 'Transactions',
        columns: columnsToExport,
    });
};

const exportPDF = () => {
    const tempSort = sort.value;
    sort.value = null;
    nextTick(() => {
        columnMenu.value = false;
        gridPdfExport.value.save(
            process(gridData.value.data, { skip: skip.value, take: take.value })
        );
        columnMenu.value = true;
        sort.value = tempSort;
    });
};
</script>
