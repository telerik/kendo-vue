<template>
  <div>
    <!-- Instructions -->
    <div
      :style="{
        marginBottom: '20px',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #dee2e6',
        borderRadius: '4px'
      }"
    >
      <h4 :style="{ margin: '0 0 10px 0', color: '#495057' }">Performance Test Instructions</h4>
      <p :style="{ margin: '0 0 10px 0', color: '#6c757d' }">
        This demo tests Grid performance with large datasets. Follow these steps:
      </p>
      <ol :style="{ margin: '0', paddingLeft: '20px', color: '#6c757d' }">
        <li>
          <strong>First:</strong> Click "Generate 1,000,000 Rows" to create the dataset in memory
        </li>
        <li>
          <strong>Then:</strong> Click "Load 1,000,000 Rows" to load the data into the Grid
        </li>
      </ol>
    </div>
    <div
      v-if="showMotivationalMessage && data.length >= 1000000"
      :style="{
        margin: '20px 0',
        padding: '20px',
        backgroundColor: '#d4edda',
        border: '2px solid #c3e6cb',
        borderRadius: '8px',
        textAlign: 'center'
      }"
    >
      <p :style="{ margin: '0', color: '#155724', fontSize: '1.1em' }">
        <strong>Wow!</strong> You have just loaded <strong>{{ data.length.toLocaleString() }}</strong>
        records in the Grid and you barely blinked!
      </p>
    </div>

    <!-- Performance Test Buttons -->
    <div :style="{ marginBottom: '20px', display: 'flex', gap: '10px', alignItems: 'center' }">
      <KButton
        :theme-color="'primary'"
        @click="generateMillionRows"
        :disabled="generating"
        :style="{ minWidth: '200px' }"
      >
        {{ generating ? 'Generating...' : 'Generate 1,000,000 Rows' }}
      </KButton>
      <KButton
        :theme-color="'success'"
        @click="loadGeneratedData"
        :disabled="loading || !generatedData"
        :style="{ minWidth: '200px' }"
      >
        {{ loading ? 'Loading...' : 'Load 1,000,000 Rows' }}
      </KButton>
      <span v-if="generatedData" :style="{ color: '#28a745', fontSize: '0.9em' }">
        ✓ {{ generatedData.length.toLocaleString() }} rows ready
      </span>
    </div>

    <hr />
    <br />
    <Grid
      :style="{ height: '450px' }"
      :auto-process-data="true"
      :navigatable="true"
      :scrollable="'virtual'"
      :data-items="processedData"
      @pagechange="pageChange"
      :row-height="15"
      :columns="cols"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, computed } from 'vue';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Grid } from '@progress/kendo-vue-grid';
import { getColumns, getRows, generateLargeDataset } from './get-data';
import { process } from '@progress/kendo-data-query';

interface PageState {
  skip: number;
  take: number;
}

const initialDataState: PageState = { skip: 0, take: 20 };

const page = ref<PageState>(initialDataState);
const data = shallowRef<any[]>([]);
const cols = ref<{ field: string; format?: string; filter?: string; width?: string }[]>([]);
const loading = ref<boolean>(false);
const generating = ref<boolean>(false);
const generatedData = shallowRef<any[] | null>(null);
const lastGenerationTime = ref<number | null>(null);
const showMotivationalMessage = ref<boolean>(false);

// Initialize with default data
const generatedRows = getRows(1000, 10);
const generatedColumns = getColumns(10);
data.value = generatedRows;
cols.value = generatedColumns.map((col: any) => ({
  field: col.field,
  format: colFormat(col),
  filter: col.field === 'startDate' ? 'date' : undefined,
  width: '160px'
}));

const processedData = computed(() => {
  const result = process(data.value, {});
  return result.data.map((item: any) => ({ ...item }));
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

const pageChange = (event: any) => {
  page.value = event.page;
};

const generateMillionRows = async () => {
  generating.value = true;
  showMotivationalMessage.value = false;
  try {
    setTimeout(() => {
      const result = generateLargeDataset(1000000);
      generatedData.value = result.data;
      lastGenerationTime.value = result.generationTime;
      generating.value = false;
    }, 100);
  } catch (error) {
    console.error('Error generating data:', error);
    generating.value = false;
    alert('Error generating data. Please try again.');
  }
};

const loadGeneratedData = () => {
  if (!generatedData.value) {
    alert('Please generate data first by clicking the "Generate 1,000,000 Rows" button.');
    return;
  }

  loading.value = true;
  const startTime = performance.now();

  setTimeout(() => {
    const largeDataColumns = [
      { field: 'id' },
      { field: 'name' },
      { field: 'price' },
      { field: 'startDate' },
      { field: 'unitsInStock' },
      { field: 'discontinued' },
      { field: 'description' },
      { field: 'column-7' },
      { field: 'column-8' },
      { field: 'column-9' }
    ];

    data.value = generatedData.value!;
    cols.value = largeDataColumns.map((col: any) => ({
      field: col.field,
      format: colFormat(col),
      filter: col.field === 'startDate' ? 'date' : undefined,
      width: '160px'
    }));
    const endTime = performance.now();
    const loadTime = Math.round(endTime - startTime);

    loading.value = false;
    showMotivationalMessage.value = true;
  }, 100);
};
</script>
