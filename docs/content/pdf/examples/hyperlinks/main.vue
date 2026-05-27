<template>
  <div>
    <div class="example-config">
      <KButton @click="exportDefaultResolution">Export PDF</KButton>
    </div>
    <PDFExport :avoid-links="true" :paper-size="'A4'" margin="2cm" ref="contentToExport">
      This is
      <a href="http://www.telerik.com/kendo-vue-ui/">a non-clickable link</a>.
    </PDFExport>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PDFExport } from '@progress/kendo-vue-pdf';
import { Button as KButton } from "@progress/kendo-vue-buttons";;

const contentToExport = ref(null);

function exportDefaultResolution() {
    contentToExport.value.save();
}
</script>
