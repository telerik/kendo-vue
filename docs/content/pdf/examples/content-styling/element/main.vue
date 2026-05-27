<template>
  <div id="vueapp" class="vue-app">
    <div class="example-config">
      <KButton @click="exportPDF">Export PDF</KButton>
    </div>
    <PDFExport ref="contentToExport" :margin="'1cm'" :paper-size="'A4'">
      <div style="width: 500px">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer felis libero, lobortis ac rutrum quis, varius
          a velit. Donec lacus erat, cursus sed porta quis, adipiscing et ligula. Duis volutpat, sem pharetra accumsan
          pharetra, mi ligula cursus felis, ac aliquet leo diam eget risus. Integer facilisis, justo cursus venenatis
          vehicula, massa nisl tempor sem, in ullamcorper neque mauris in orci.
        </p>
        <p>
          Ut orci ligula, varius ac consequat in, rhoncus in dolor. Mauris pulvinar molestie accumsan. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean velit ligula, pharetra quis
          aliquam sed, scelerisque sed sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Aliquam dui mi, vulputate vitae pulvinar ac, condimentum sed eros.
        </p>
      </div>
    </PDFExport>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PDFExport } from '@progress/kendo-vue-pdf';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import './styles.css';

const contentToExport = ref(null);

function exportPDF() {
    contentToExport.value.save();
}
</script>
