<template>
  <div>
    <div class="example-config">
      <kbutton @click="exportPDF">
        Export PDF
      </kbutton>
    </div>
    <pdfexport ref="contentToExport" margin="2cm" :paper-size="'A4'" :page-template="pageTemplate">
      <Content />
    </pdfexport>
  </div>
</template>

<script>
import { markRaw, h } from 'vue';
import { PDFExport } from "@progress/kendo-vue-pdf";
import Content from "./Content.vue";
import { Button } from '@progress/kendo-vue-buttons';

export default {
  components: {
    pdfexport: PDFExport,
    Content: Content,
      'kbutton': Button
  },
  data: function(){
    return {
      pageTemplate: markRaw({
                props: {
                    pageNum: Number,
                    totalPages: Number
                },
                render: function() {
                    return h('div',{
                        style: {position: 'absolute', top: '10px', left: '10px'}
                    },['Page ' + this.$props.pageNum + ' of ' + this.$props.totalPages])
                }
    })
    }
  },
  methods: {
    exportPDF: function() {
      this.$refs.contentToExport.save();
    }
  }
};
</script>
