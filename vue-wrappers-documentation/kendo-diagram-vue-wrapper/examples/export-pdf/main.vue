<template>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css">
    <div>
        <kendo-button @kendoclick="onClick">Save as PDF</kendo-button>
    </div>
    <br />
    <kendo-hierarchicaldatasource ref="remoteDataSourceComponent"
                                  :data="diagramData"
                                  :schema-model-children="'items'">
    </kendo-hierarchicaldatasource>

    <kendo-diagram ref="diagram1"
                   :data-source-ref="'remoteDataSourceComponent'"
                   :layout-type="'layered'"
                   :shape-defaults-visual="visualTemplate"
                   :connection-defaults-stroke-color="'#979797'"
                   :connection-defaults-stroke-width="2"
                   @kendowidgetready="kendowidgetready">
    </kendo-diagram>
</template>
<script>
import { Diagram } from '@progress/kendo-diagram-vue-wrapper';
import { Button } from '@progress/kendo-buttons-vue-wrapper';
import { HierarchicalDataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
  components: {
    'kendo-button': Button,
    'kendo-diagram': Diagram,
    'kendo-hierarchicaldatasource': HierarchicalDataSource
  },
   data: function() {
        return {
            diagramModel: {
                children: 'items'
            },
            diagramData: [{
                name: 'My Documents',
                icon: 'k-i-folder-open',
                colorScheme: '#1696d3',
                items: [{
                    name: 'Kendo UI Project',
                    icon: 'k-i-folder-open',
                    colorScheme: '#ef6944',
                    items: [{
                        name: 'logo.png',
                        icon: 'k-i-image',
                        colorScheme: '#ef6944'
                    }]
                }, {
                    name: 'New Web Site',
                    icon: 'k-i-folder-open',
                    colorScheme: '#ee587b',
                    items: [{
                        name: 'Research.pdf',
                        icon: 'k-i-file-pdf',
                        colorScheme: '#ee587b'
                    }]
                }, {
                    name: 'Reports',
                    icon: 'k-i-folder-open',
                    colorScheme: '#75be16',
                    items: [{
                        name: 'April.pdf',
                        icon: 'k-i-file-pdf',
                        colorScheme: '#75be16'
                    }]
                }]
            }]
        }
    },
    methods: {
        onClick: function (ev) {
            var diagram = this.$refs.diagram1.kendoWidget();
            diagram.saveAsPDF();
        },
        kendowidgetready: function (widget) {
            kendo.pdf.defineFont({
              "FontAwesome":
                  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/fonts/fontawesome-webfont.ttf"
            });
            widget.bringIntoView(widget.shapes)
        },
        visualTemplate: function (options) {
            var geom = kendo.geometry;
            var draw = kendo.drawing;

            var contentTemplate = kendo.template(`<div class="shape">
        <span class='k-icon #= icon #' style='font-size: 55px; padding-top: 3px;'></span>
      </div>`);

            var dataviz = kendo.dataviz;
            var g = new dataviz.diagram.Group();
            var dataItem = options.dataItem;

            var renderElement = $("<div />").appendTo("body");
            renderElement.html(contentTemplate(dataItem));

            var output = new kendo.drawing.Group();
            draw.drawDOM(renderElement)
            .then(function(group) {
              output.append(group);

              /* Clean-up */
              renderElement.remove();
            });

            g.append(new dataviz.diagram.Rectangle({
                width: 210,
                height: 60,
                stroke: {
                    width: 0
                },
                fill: dataItem.colorScheme
            }));

            g.append(new dataviz.diagram.TextBlock({
                text: dataItem.name,
                x: 85,
                y: 20,
                fill: "#fff"
            }));

            g.drawingElement.append(output);

            return g;
        }
    }
}
</script>
