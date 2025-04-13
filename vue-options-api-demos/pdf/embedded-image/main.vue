<template>
  <div>
    <div class="example-config">
      <kbutton @click="exportDefaultResolution">
        Export PDF with default resolution
      </kbutton>
      &nbsp;
      <kbutton @click="export36DPI">
        Export PDF with 36 dpi
      </kbutton>
    </div>
    <img
      ref="imageToExport"
      src="https://c2.staticflickr.com/2/1574/25734996011_637430f5d8_c.jpg"
      style="width:750px"
      alt="Landscape Image"
    />
  </div>
</template>
<script>
import { savePDF } from "@progress/kendo-vue-pdf";
import { Button } from '@progress/kendo-vue-buttons';

export default {
  components: {
    'kbutton': Button
  },
  methods: {
    
    exportDefaultResolution: function() {
      savePDF(this.$refs.imageToExport);
    },
    export36DPI: function() {
      savePDF(this.$refs.imageToExport, { imageResolution: 36 });
    }

  }
};
</script>
