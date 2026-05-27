<template>
  <div>
    <div class="example-config">
      <KButton @click="exportPDF">Export PDF</KButton>
    </div>
    <PDFExport ref="contentToExport" :margin="'2cm'" :paper-size="'A4'" :keep-together="'.prevent-split'">
      <Content />
    </PDFExport>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PDFExport } from '@progress/kendo-vue-pdf';
import Content from './Content.vue';
import { Button as KButton } from "@progress/kendo-vue-buttons";;

const contentToExport = ref(null);

function exportPDF() {
    contentToExport.value.save();
}
</script>
