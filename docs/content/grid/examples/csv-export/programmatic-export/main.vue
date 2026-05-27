<template>
  <div>
    <Grid
      ref="gridRef"
      :style="{ height: '400px' }"
      :data-items="products"
      :csv="{ fileName: 'products-export.csv' }"
      :columns="columns"
    >
      <GridToolbar>
        <KButton :theme-color="'primary'" @click="handleSaveAsCsv" :disabled="isExporting">
          {{ isExporting ? 'Exporting...' : 'Download CSV' }}
        </KButton>
        <KButton :theme-color="'secondary'" @click="handleGetBlob">
          Upload to Server
        </KButton>
        <KButton @click="handlePreviewCsv">Preview CSV</KButton>
        <span v-if="uploadStatus" :style="{ marginLeft: '10px', color: '#28a745' }">{{ uploadStatus }}</span>
      </GridToolbar>
    </Grid>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Grid, GridToolbar } from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import products from './gd-products';

const gridRef = ref<any>(null);
const uploadStatus = ref('');
const isExporting = ref(false);

const columns = [
  { field: 'ProductID', title: 'ID', width: '80px' },
  { field: 'ProductName', title: 'Product Name', width: '300px' },
  { field: 'Category.CategoryName', title: 'Category' },
  { field: 'UnitPrice', title: 'Unit Price' },
  { field: 'UnitsInStock', title: 'In Stock' },
];

const handleSaveAsCsv = () => {
  isExporting.value = true;
  try {
    gridRef.value?.exportAsCsv();
  } finally {
    isExporting.value = false;
  }
};

const handleGetBlob = async () => {
  const blob = gridRef.value?.getCsvBlob();
  if (blob) {
    uploadStatus.value = 'Uploading...';
    await new Promise((resolve) => setTimeout(resolve, 1000));
    uploadStatus.value = `Upload complete! File size: ${(blob.size / 1024).toFixed(2)} KB`;
    setTimeout(() => (uploadStatus.value = ''), 3000);
  }
};

const handlePreviewCsv = async () => {
  const blob = gridRef.value?.getCsvBlob();
  if (blob) {
    const content = await blob.text();
    const preview = content.substring(0, 500);
    uploadStatus.value = `Preview: ${preview}${content.length > 500 ? '...' : ''}`;
    setTimeout(() => (uploadStatus.value = ''), 5000);
  }
};
</script>
