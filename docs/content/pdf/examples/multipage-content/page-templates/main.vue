<template>
  <div>
    <div class="example-config">
      <KButton @click="exportPDF">Export PDF</KButton>
    </div>
    <PDFExport ref="contentToExport" margin="2cm" :paper-size="'A4'" :page-template="pageTemplate">
      <Content />
    </PDFExport>
  </div>
</template>

<script setup>
import { ref, markRaw, h } from 'vue';
import { PDFExport } from '@progress/kendo-vue-pdf';
import Content from './Content.vue';
import { Button as KButton } from "@progress/kendo-vue-buttons";;

const contentToExport = ref(null);

const pageTemplate = markRaw({
    props: {
        pageNum: Number,
        totalPages: Number,
    },
    render() {
        return h(
            'div',
            { style: { position: 'absolute', top: '10px', left: '10px' } },
            [`Page ${this.$props.pageNum} of ${this.$props.totalPages}`]
        );
    },
});

function exportPDF() {
    contentToExport.value.save();
}
</script>
