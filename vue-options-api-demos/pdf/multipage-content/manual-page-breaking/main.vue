<template>
  <div>
    <div class="example-config">
      <kbutton @click="exportPDF">
        Export PDF
      </kbutton>
    </div>
    <pdfexport ref="contentToExport" forcePageBreak=".page-break" :paper-size="'A4'">
      <div style="width: '595px' , height: '420px'">
        <h3>Page 1</h3>
        <p>
          Aliquam at nisl quis est adipiscing bibendum. Nam malesuada eros facilisis arcu vulputate at aliquam nunc
          tempor. In commodo scelerisque enim, eget sodales lorem condimentum rutrum. Phasellus sem metus, ultricies at
          commodo in, tristique non est. Morbi vel mauris eget mauris commodo elementum. Nam eget libero lacus, ut
          sollicitudin ante. Nam odio quam, suscipit a fringilla eget, dignissim nec arcu. Donec tristique arcu ut
          sapien elementum pellentesque.
        </p>

        <h3 class="page-break">Page 2</h3>
        <p>
          Aliquam at nisl quis est adipiscing bibendum. Nam malesuada eros facilisis arcu vulputate at aliquam nunc
          tempor. In commodo scelerisque enim, eget sodales lorem condimentum rutrum. Phasellus sem metus, ultricies at
          commodo in, tristique non est. Morbi vel mauris eget mauris commodo elementum. Nam eget libero lacus, ut
          sollicitudin ante. Nam odio quam, suscipit a fringilla eget, dignissim nec arcu. Donec tristique arcu ut
          sapien elementum pellentesque.
        </p>
      </div>
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
    exportPDF: function() {
      this.$refs.contentToExport.save();
    }
  }
};
</script>