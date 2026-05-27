<template>
  <div>
    <div :style="{ margin: '-30px -30px 30px -30px' }">
      <div :style="{ display: 'flex', justifyContent: 'center' }">
        <span class="k-color-primary" :style="{ textTransform: 'uppercase', padding: '4px 0' }">
          Configurator
        </span>
      </div>
      <div class="example-config">
        <div class="row" :style="{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }">
          <div class="col-sm-3 col-md-3 example-col">
            <KLabel>Grid Mode:</KLabel>
            <div :style="{ marginTop: '8px' }">
              <label
                v-for="option in scrollModeOptions"
                :key="option.value"
                :style="{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  marginBottom: '4px'
                }"
              >
                <input
                  type="radio"
                  name="scrollMode"
                  :value="option.value"
                  :checked="scrollMode === option.value"
                  @change="scrollMode = option.value"
                  :style="{ marginRight: '8px' }"
                />
                {{ option.text }}
              </label>
            </div>
          </div>
          <div class="col-sm-3 col-md-3 example-col">
            <KLabel>Rows:</KLabel>
            <DropDownList
              :style="{ marginTop: '8px' }"
              :value="selectedRowOption"
              @change="handleRowChange"
              :data-items="rowOptions"
              :text-field="'text'"
              :data-item-key="'value'"
            />
          </div>
          <div class="col-sm-3 col-md-3 example-col">
            <KLabel>Columns:</KLabel>
            <DropDownList
              :style="{ marginTop: '8px' }"
              :value="selectedColumnOption"
              @change="handleColumnChange"
              :data-items="columnOptions"
              :text-field="'text'"
              :data-item-key="'value'"
            />
          </div>
        </div>
        <div class="row" :style="{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }">
          <div :style="{ color: '#666' }">
            Current data: {{ data.length.toLocaleString() }} rows × {{ colTotals }} columns ({{ scrollModeText }})
          </div>
        </div>
      </div>
    </div>

    <Grid
      v-if="data.length > 0"
      :style="{ height: '450px' }"
      :auto-process-data="scrollMode === 'paging'"
      :navigatable="true"
      :filterable="true"
      :sortable="true"
      :scrollable="scrollMode === 'virtual' || scrollMode === 'virtualPaging' ? 'virtual' : 'scrollable'"
      :pageable="scrollMode === 'paging' || scrollMode === 'virtualPaging'"
      :data-items="gridData"
      :page-size="100"
      :total="data.length"
      :skip="scrollMode === 'paging' ? undefined : page.skip"
      :take="scrollMode === 'paging' ? undefined : page.take"
      @pagechange="pageChange"
      :columns="cols"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import { getColumns, getRows } from './get-data';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { Label as KLabel } from '@progress/kendo-vue-labels';
import './styles.css';

interface PageState {
  skip: number;
  take: number;
}

const initialDataState: PageState = { skip: 0, take: 100 };

// Predefined row count options
const rowOptions = [
  { text: '100 rows', value: 100 },
  { text: '1,000 rows', value: 1000 },
  { text: '5,000 rows', value: 5000 },
  { text: '10,000 rows', value: 10000 },
  { text: '100,000 rows', value: 100000 }
];

// Predefined column count options
const columnOptions = [
  { text: '10 columns', value: 10 },
  { text: '20 columns', value: 20 },
  { text: '50 columns', value: 50 },
  { text: '100 columns', value: 100 },
  { text: '150 columns', value: 150 },
  { text: '200 columns', value: 200 }
];

// Scrolling mode options
const scrollModeOptions = [
  { text: 'Virtual Scrolling', value: 'virtual' },
  { text: 'Paging', value: 'paging' },
  { text: 'Virtual + Paging', value: 'virtualPaging' }
];

const page = ref<PageState>(initialDataState);
const data = ref<any[]>([]);
const rows = ref<number>(10000);
const colTotals = ref<number>(20);
const selectedRowOption = ref(rowOptions[1]);
const selectedColumnOption = ref(columnOptions[1]);
const cols = ref<{ field: string; format?: string; filter?: string; width?: string }[]>([]);
const scrollMode = ref<'virtual' | 'paging' | 'virtualPaging'>('virtual');

const scrollModeText = computed(() => {
  if (scrollMode.value === 'virtual') return 'Virtual Scrolling';
  if (scrollMode.value === 'paging') return 'Paging';
  return 'Virtual Scrolling + Paging';
});

const gridData = computed(() => {
  if (scrollMode.value === 'paging') {
    return data.value;
  }
  return data.value.slice(page.value.skip, page.value.skip + page.value.take);
});

function colFormat(c: any): string | undefined {
  switch (c.field) {
    case 'startDate':
      return '{0:dd/mm/yyyy}';
    case 'price':
      return '{0:n2}';
    default:
      return undefined;
  }
}

// Update rows when dropdown selection changes
watch(selectedRowOption, (newValue) => {
  rows.value = newValue.value;
});

// Update columns when dropdown selection changes
watch(selectedColumnOption, (newValue) => {
  colTotals.value = newValue.value;
});

// Generate data when rows or columns change
watch([rows, colTotals], () => {
  const generatedRows = getRows(rows.value, colTotals.value);
  const generatedColumns = getColumns(colTotals.value);
  data.value = generatedRows;
  cols.value = generatedColumns.map((col: any) => ({
    field: col.field,
    format: colFormat(col),
    filter: col.field === 'startDate' ? 'date' : undefined,
    width: '160px'
  }));
});

// Initialize data on mount
onMounted(() => {
  const generatedRows = getRows(rows.value, colTotals.value);
  const generatedColumns = getColumns(colTotals.value);
  data.value = generatedRows;
  cols.value = generatedColumns.map((col: any) => ({
    field: col.field,
    format: colFormat(col),
    filter: col.field === 'startDate' ? 'date' : undefined,
    width: '160px'
  }));
});

const pageChange = (event: any) => {
  page.value = event.page;
};

const handleRowChange = (event: any) => {
  selectedRowOption.value = event.value;
};

const handleColumnChange = (event: any) => {
  selectedColumnOption.value = event.value;
};
</script>
