<template>
  <div>
    <div class="example-config">
      <kbutton @click="exportDefaultResolution">
        Export PDF
      </kbutton>
    </div>
    <pdfexport :avoidLinks="true" :paper-size="'A4'" margin="2cm" ref="contentToExport">
      This is
      <a href="http://www.telerik.com/kendo-vue-ui/">a non-clickable link</a>.
    </pdfexport>
  </div>
</template>
<script>
import { PDFExport } from "@progress/kendo-vue-pdf";
import { Button } from '@progress/kendo-vue-buttons';

export default {
  components: {
    pdfexport: PDFExport,
      'kbutton': Button
  },
  methods: {
    exportDefaultResolution: function() {
      this.$refs.contentToExport.save();
    }
  }
};
</script>