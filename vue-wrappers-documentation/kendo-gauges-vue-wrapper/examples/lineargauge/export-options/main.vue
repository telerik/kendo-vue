<template>
    <button @click="pdfExport">Export to PDF</button>
    <button @click="imageExport">Export to Image</button>
    <button @click="svgExport">Export to SVG</button>
    <kendo-lineargauge ref="lineargauge" :scale-min="0"
                        :scale-max="50"
                        :scale-vertical="false">
        <kendo-lineargauge-pointer :value="30" :color="'#ff6358'"></kendo-lineargauge-pointer>
    </kendo-lineargauge>
</template>
<script>
import { LinearGauge, LinearGaugePointer } from '@progress/kendo-gauges-vue-wrapper';

export default {
    name: 'App',
    components: {
        'kendo-lineargauge': LinearGauge,
        'kendo-lineargauge-pointer':LinearGaugePointer
    },
     methods: {
        pdfExport: function () {
            var gauge = this.$refs.lineargauge.kendoWidget();
            gauge.exportPDF({ paperSize: "auto", margin: { left: "1cm", top: "1cm", right: "1cm", bottom: "1cm" } }).done(function (data) {
                kendo.saveAs({
                    dataURI: data,
                    fileName: "gauge.pdf",
                    proxyURL: "https://demos.telerik.com/kendo-ui/service/export"
                });
            });
        },
        imageExport: function () {
            var gauge = this.$refs.lineargauge.kendoWidget();
            gauge.exportImage().done(function (data) {
                kendo.saveAs({
                    dataURI: data,
                    fileName: "gauge.png",
                    proxyURL: "https://demos.telerik.com/kendo-ui/service/export"
                });
            });
        },
        svgExport: function () {
            var gauge = this.$refs.lineargauge.kendoWidget();
            gauge.exportSVG().done(function (data) {
                kendo.saveAs({
                    dataURI: data,
                    fileName: "gauge.svg",
                    proxyURL: "https://demos.telerik.com/kendo-ui/service/export"
                });
            });
        },
    }
}
</script>
