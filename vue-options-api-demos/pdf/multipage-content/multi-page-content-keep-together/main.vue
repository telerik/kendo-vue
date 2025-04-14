<template>
  <div>
    <div class="example-config">
      <kbutton @click="exportPDF">
        Export PDF
      </kbutton>
    </div>
    <pdfexport ref="contentToExport" :margin="'2cm'" :paper-size="'A4'" :keepTogether="'.prevent-split'">
      <Content />
    </pdfexport>
  </div>
</template>

<script>
import { PDFExport } from "@progress/kendo-vue-pdf";
import Content from "./Content.vue";
import { Button } from '@progress/kendo-vue-buttons';

export default {
  components: {
    pdfexport: PDFExport,
    Content: Content,
      'kbutton': Button
  },
  methods: {
    exportPDF: function() {
      this.$refs.contentToExport.save();
    }
  }
};
</script>
