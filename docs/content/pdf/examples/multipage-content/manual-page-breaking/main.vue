<template>
  <div>
    <div class="example-config">
      <KButton @click="exportPDF">Export PDF</KButton>
    </div>
    <PDFExport ref="contentToExport" force-page-break=".page-break" :paper-size="'A4'">
      <div style="width: '595px', height: '420px'">
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
    </PDFExport>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PDFExport } from '@progress/kendo-vue-pdf';
import { Button as KButton } from "@progress/kendo-vue-buttons";;

const contentToExport = ref(null);

function exportPDF() {
    contentToExport.value.save();
}
</script>
