<template>
 <kendo-radialgauge ref="radialgauge" :scale-min="0"
                        :scale-max="50"
                        :scale-vertical="false">
        <kendo-radialgauge-pointer :value="30" :color="'#ff6358'"></kendo-radialgauge-pointer>
    </kendo-radialgauge>
    <button @click="pdfExport">Export as PDF</button>
    <button @click="imageExport">Export as Image</button>
    <button @click="svgExport">Export as SVG</button>
</template>
<script>
import { RadialGauge, RadialGaugePointer } from '@progress/kendo-gauges-vue-wrapper';

export default {
    components: {
    'kendo-radialgauge': RadialGauge,
    'kendo-radialgauge-pointer': RadialGaugePointer
    },
    methods: {
        pdfExport: function () {
            var gauge = this.$refs.radialgauge.kendoWidget();
            gauge.exportPDF({ paperSize: "auto", margin: { left: "1cm", top: "1cm", right: "1cm", bottom: "1cm" } }).done(function (data) {
                kendo.saveAs({
                    dataURI: data,
                    fileName: "gauge.pdf",
                    proxyURL: "https://demos.telerik.com/kendo-ui/service/export"
                });
            });
        },
        imageExport: function () {
            var gauge = this.$refs.radialgauge.kendoWidget();
            gauge.exportImage().done(function (data) {
                kendo.saveAs({
                    dataURI: data,
                    fileName: "gauge.png",
                    proxyURL: "https://demos.telerik.com/kendo-ui/service/export"
                });
            });
        },
        svgExport: function () {
            var gauge = this.$refs.radialgauge.kendoWidget();
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
