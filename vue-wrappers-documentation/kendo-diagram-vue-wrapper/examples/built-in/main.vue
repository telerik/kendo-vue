<template>
  <kendo-dropdownlist :data-source="layoutsArray"
                        :data-text-field="'text'"
                        :data-value-field="'value'"
                        @change="onChange">
    </kendo-dropdownlist>

    <kendo-hierarchicaldatasource ref="localDataSource"
                                  :data="diagramData"
                                  :schema-model-children="'items'">
    </kendo-hierarchicaldatasource>

    <kendo-diagram ref="diagram1"
                   :data-source-ref="'localDataSource'"
                   :layout="layout"
                   :zoom= "0.8"
                   :shape-defaults="shapeDefaults"
                   @kendowidgetready="kendowidgetready">
    </kendo-diagram>
</template>
<script>
import { Diagram } from '@progress/kendo-diagram-vue-wrapper';
import { DropDownList } from '@progress/kendo-dropdowns-vue-wrapper';
import { HierarchicalDataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
  components: {
    'kendo-diagram': Diagram,
    'kendo-hierarchicaldatasource': HierarchicalDataSource,
    'kendo-dropdownlist': DropDownList
  },
  data: function() {
        return {
            layoutsArray: [
                { text: 'Tree Down', value: 'down' },
                { text: 'Tree Up', value: 'up' },
                { text: 'Tipover Tree', value: 'tipover' }
            ],
            layout: {
                type: "tree",
                subtype: "down",
                horizontalSeparation: 30,
                verticalSeparation: 20
            },
            diagramData: [],
            shapeDefaults: {
                width: 40,
                height: 40
            }
        }
    },
    methods: {
        onChange: function(e) {
            var diagram = this.$refs.diagram1.kendoWidget();
            diagram.layout({
                subtype: e.sender.value(),
                type: "tree",
                horizontalSeparation: 30,
                verticalSeparation: 20
            });
        },
        kendowidgetready: function (widget) {
            this.diagramData = this.diagramNodes();
            widget.bringIntoView(widget.shapes, {
                align: "left middle"
            });
        },
        diagramNodes: function() {
            var root = { name: "0", items: [] };
            this.addNodes(root, [3, 2, 2]);
            return [root];
        },
        addNodes: function (root, levels) {
            if (levels.length > 0) {
                for (var i = 0; i < levels[0]; i++) {
                    var node = { name: "0", items: [] };
                    root.items.push(node);

                    this.addNodes(node, levels.slice(1));
                }
            }
        }
    }
}
</script>
