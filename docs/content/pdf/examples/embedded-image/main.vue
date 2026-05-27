<template>
  <div>
    <div class="example-config">
      <KButton @click="exportDefaultResolution">Export PDF with default resolution</KButton>
      &nbsp;
      <KButton @click="export36DPI">Export PDF with 36 dpi</KButton>
    </div>
    <img
      ref="imageToExport"
      src="https://c2.staticflickr.com/2/1574/25734996011_637430f5d8_c.jpg"
      style="width:750px"
      alt="Landscape Image"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { savePDF } from '@progress/kendo-vue-pdf';
import { Button as KButton } from "@progress/kendo-vue-buttons";;

const imageToExport = ref(null);

function exportDefaultResolution() {
    savePDF(imageToExport.value);
}

function export36DPI() {
    savePDF(imageToExport.value, { imageResolution: 36 });
}
</script>
