<template>
    <button class='export-pdf k-button' @click="exportPdf" style="display: inline-block;">Export as PDF</button>
    <button class='export-img k-button' @click="exportImage" style="display: inline-block;">Export as Image</button>
    <button class='export-svg k-button' @click="exportSvg" style="display: inline-block;">Export as SVG</button>
    <br/>
    <br/>
    <kendo-map ref="map"
               :center="[30.268107, -97.744821]"
               :zoom="5" style="width: 100%; height: 500px;">
        <kendo-map-layer :type="'tile'"
                         :url-template="'https://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png'"
                         :subdomains="['a', 'b', 'c']"
                         :attribution="'&copy; <a href=\'https://osm.org/copyright\'>OpenStreetMap contributors</a>'">
        </kendo-map-layer>
        <kendo-map-marker :location="[30.268107, -97.744821]"></kendo-map-marker>
        <kendo-map-marker :location="[32, -97.744821]"></kendo-map-marker>
        <kendo-map-marker :location="[34, -97.744821]"></kendo-map-marker>
    </kendo-map>
</template>
<script>
import { Map, MapLayer, MapMarker } from '@progress/kendo-map-vue-wrapper';

export default {
  components: {
    'kendo-map': Map,
    'kendo-map-layer': MapLayer,
    'kendo-map-marker': MapMarker
  },
   methods: {
        exportPdf: function () {
            var mapElm = this.$refs.map.kendoWidget().element;
            kendo.drawing.drawDOM(mapElm)
            .then(function(group) {
                // Render the result as a PDF file
                return kendo.drawing.exportPDF(group, {
                    paperSize: "auto",
                    margin: { left: "1cm", top: "1cm", right: "1cm", bottom: "1cm" }
                });
            })
            .done(function(data) {
                // Save the PDF file
                kendo.saveAs({
                    dataURI: data,
                    fileName: "Map.pdf"
                });
            });
        },
        exportSvg: function () {
            var mapElm = this.$refs.map.kendoWidget().element;
            kendo.drawing.drawDOM(mapElm)
            .then(function(group) {
                // Render the result as a SVG document
                return kendo.drawing.exportSVG(group);
            })
            .done(function(data) {
                // Save the SVG document
                kendo.saveAs({
                    dataURI: data,
                    fileName: "Map.svg",
                    proxyURL: "https://demos.telerik.com/kendo-ui/service/export"
                });
            });
        },
        exportImage: function () {
            var mapElm = this.$refs.map.kendoWidget().element;
            kendo.drawing.drawDOM(mapElm)
            .then(function(group) {
                // Render the result as a PNG image
                return kendo.drawing.exportImage(group);
            })
            .done(function(data) {
                // Save the image file
                kendo.saveAs({
                    dataURI: data,
                    fileName: "Map.png",
                    proxyURL: "https://demos.telerik.com/kendo-ui/service/export"
                });
            });
        }
    }
}
</script>

