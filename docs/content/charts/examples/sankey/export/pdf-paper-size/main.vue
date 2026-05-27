<template>
  <div>
    <KButton @click="exportToPDF">Export to PDF</KButton>
    <Sankey
      ref="sankey"
      :dataNodes="dataNodes"
      :dataLinks="dataLinks"
      :style="{ 'max-width': '700px', height: '250px', margin: 'auto' }"
      :links="{ colorType: 'source' }"
      :title="{ position: 'top', text: 'WebSite Visits\' Statistic', font: '500 18px sans-serif' }"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Sankey } from '@progress/kendo-vue-charts';
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { exportPDF } from "@progress/kendo-drawing";
import { saveAs } from "@progress/kendo-file-saver";

const dataNodes = ref([
    { id: "female", label: { text: "Female (58%)" } },
    { id: "male", label: { text: "Male (42%)" } },
    { id: "tablet", label: { text: "Tablet (12%)" } },
    { id: "mobile", label: { text: "Mobile (40%)" } },
    { id: "desktop", label: { text: "Desktop (48%)" } },
    { id: "< 18", label: { text: "< 18 years (8%)" } },
    { id: "18-26", label: { text: "18-26 years (35%)" } },
    { id: "27-40", label: { text: "27-40 years (38%)" } },
    { id: "> 40", label: { text: "> 40 years (19%)" } },
]);

const dataLinks = ref([
    { sourceId: "female", targetId: "tablet", value: 12 },
    { sourceId: "female", targetId: "mobile", value: 14 },
    { sourceId: "female", targetId: "desktop", value: 32 },
    { sourceId: "male", targetId: "mobile", value: 26 },
    { sourceId: "male", targetId: "desktop", value: 16 },
    { sourceId: "tablet", targetId: "< 18", value: 4 },
    { sourceId: "tablet", targetId: "> 40", value: 8 },
    { sourceId: "mobile", targetId: "< 18", value: 4 },
    { sourceId: "mobile", targetId: "18-26", value: 24 },
    { sourceId: "mobile", targetId: "27-40", value: 10 },
    { sourceId: "mobile", targetId: "> 40", value: 2 },
    { sourceId: "desktop", targetId: "18-26", value: 11 },
    { sourceId: "desktop", targetId: "27-40", value: 28 },
    { sourceId: "desktop", targetId: "> 40", value: 9 },
]);

const sankey = ref(null);

// Converts mm to pixels @ 72 dpi
function mmToPx(mm) {
    return mm * 2.8347;
}

// Set page width to A4 minus 10mm margin on each side
const PAGE_WIDTH = mmToPx(210 - 20);

function exportToPDF() {
    const visual = sankey.value.exportVisual({
        width: PAGE_WIDTH,
    });

    exportPDF(visual, {
        paperSize: 'A4',
        margin: '1cm',
    }).then((dataURI) => {
        saveAs(dataURI, "sankey-sized.pdf");
    });
}
</script>
