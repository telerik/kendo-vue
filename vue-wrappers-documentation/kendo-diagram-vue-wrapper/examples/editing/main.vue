<template>
  <kendo-hierarchicaldatasource ref="shapesDataSource"
                                  :batch='false'
                                  :transport-read-url="'https://demos.telerik.com/kendo-ui/service/DiagramShapes'"
                                  :transport-read-data-type="'jsonp'"
                                  :transport-update-url="'https://demos.telerik.com/kendo-ui/service/DiagramShapes/Update'"
                                  :transport-update-data-type="'jsonp'"
                                  :transport-destroy-url="'https://demos.telerik.com/kendo-ui/service/DiagramShapes/Destroy'"
                                  :transport-destroy-data-type="'jsonp'"
                                  :transport-create-url="'https://demos.telerik.com/kendo-ui/service/DiagramShapes/Create'"
                                  :transport-create-data-type="'jsonp'"
                                  :transport-parameter-map="parameterMap"
                                  :schema-model-id="'id'"
                                  :schema-model-fields="schemaModelFields">
    </kendo-hierarchicaldatasource>

    <kendo-diagram :data-source-ref="'shapesDataSource'"
                   :connections-data-source="connectionsDataSource"
                   :layout="layout"
                   :shape-defaults-visual="visualTemplate"
                   :shape-defaults-content-template="shapesContentTemplate"
                   :shape-defaults-content-font-size="shapesContentFontSize"
                   :connection-defaults-stroke-color="'#586477'"
                   :connection-defaults-stroke-width="2"
                   v-on:databound="onDataBound">
    </kendo-diagram>
</template>
<script>
import { Diagram } from '@progress/kendo-diagram-vue-wrapper';
import { HierarchicalDataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
  components: {
    'kendo-diagram': Diagram,
    'kendo-hierarchicaldatasource': HierarchicalDataSource
  },
     data: function() {
        return {
            connectionsDataSource: {
                batch: false,
                transport: {
                    read: {
                        url: "https://demos.telerik.com/kendo-ui/service/DiagramConnections",
                        dataType: "jsonp"
                    },
                    update: {
                        url: "https://demos.telerik.com/kendo-ui/service/DiagramConnections/Update",
                        dataType: "jsonp"
                    },
                    destroy: {
                        url: "https://demos.telerik.com/kendo-ui/service/DiagramConnections/Destroy",
                        dataType: "jsonp"
                    },
                    create: {
                        url: "https://demos.telerik.com/kendo-ui/service/DiagramConnections/Create",
                        dataType: "jsonp"
                    },
                    parameterMap: function (options, operation) {
                        if (operation !== "read") {
                            return { models: kendo.stringify(options.models || [options]) };
                        }
                    }
                },
                schema: {
                    model: {
                        id: "id",
                        fields: {
                            id: { from: "Id", type: "number", editable: false },
                            from: { from: "FromShapeId", type: "number" },
                            to: { from: "ToShapeId", type: "number" },
                            fromX: { from: "FromPointX", type: "number" },
                            fromY: { from: "FromPointY", type: "number" },
                            toX: { from: "ToPointX", type: "number" },
                            toY: { from: "ToPointY", type: "number" }
                        }
                    }
                }
            },
            schemaModelFields:  {
                id: { from: "Id", type: "number", editable: false },
                JobTitle: { type: "string" },
                Color: { type: "string" }
            },
            schemaModelConnectionFields:  {
                id: { from: "Id", type: "number", editable: false },
                from: { from: "FromShapeId", type: "number" },
                to: { from: "ToShapeId", type: "number" },
                fromX: { from: "FromPointX", type: "number" },
                fromY: { from: "FromPointY", type: "number" },
                toX: { from: "ToPointX", type: "number" },
                toY: { from: "ToPointY", type: "number" }
            },
            layout: {
                type: "tree",
                subtype: "tipover",
                underneathHorizontalOffset: 140
            },
            shapesContentTemplate: "#= dataItem.JobTitle #",
            shapesContentFontSize: 17
        }
    },
    methods: {
        parameterMap: function(options, operation) {
            if (operation !== 'read') {
                return { models: kendo.stringify(options.models || [options]) }
            }
        },
        visualTemplate: function (options) {
            var dataviz = kendo.dataviz;
            var g = new dataviz.diagram.Group();
            var dataItem = options.dataItem;

            if (dataItem.JobTitle === "President") {
                g.append(new dataviz.diagram.Circle({
                    radius: 60,
                    stroke: {
                        width: 2,
                        color: dataItem.Color || "#586477"
                    },
                    fill: "#e8eff7"
                }));
            } else {
                g.append(new dataviz.diagram.Rectangle({
                    width: 240,
                    height: 67,
                    stroke: {
                        width: 0
                    },
                    fill: "#e8eff7"
                }));

                g.append(new dataviz.diagram.Rectangle({
                    width: 8,
                    height: 67,
                    fill: dataItem.Color,
                    stroke: {
                        width: 0
                    }
                }));
            }

            return g;
        },
         onDataBound: function(e) {
            var that = e.sender;
            setTimeout(function () {
                that.bringIntoView(that.shapes);
            }, 0);
        }
    }
}
</script>
