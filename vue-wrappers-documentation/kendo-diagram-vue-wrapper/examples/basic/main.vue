<template>
 <kendo-hierarchicaldatasource ref="remoteDataSourceComponent"
                                  :data="diagramData"
                                  :schema-model-children="'items'">
    </kendo-hierarchicaldatasource>

    <kendo-diagram :data-source-ref="'remoteDataSourceComponent'"
                   :layout-type="'layered'"
                   :shape-defaults-visual="visualTemplate"
                   :connection-defaults-stroke-color="'#979797'"
                   :connection-defaults-stroke-width="2"
                   @kendowidgetready="kendowidgetready">
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
            diagramModel: {
                children: 'items'
            },
            diagramData: [{
                firstName: 'Antonio',
                lastName: 'Moreno',
                image: 'antonio.jpg',
                title: 'Team Lead',
                colorScheme: '#1696d3',
                items: [{
                    firstName: 'Elizabeth',
                    image: 'elizabeth.jpg',
                    lastName: 'Brown',
                    title: 'Design Lead',
                    colorScheme: '#ef6944',
                    items: [{
                        firstName: 'Ann',
                        lastName: 'Devon',
                        image: 'ann.jpg',
                        title: 'UI Designer',
                        colorScheme: '#ef6944'
                    }]
                }, {
                    firstName: 'Diego',
                    lastName: 'Roel',
                    image: 'diego.jpg',
                    title: 'QA Engineer',
                    colorScheme: '#ee587b',
                    items: [{
                        firstName: 'Fran',
                        lastName: 'Wilson',
                        image: 'fran.jpg',
                        title: 'QA Intern',
                        colorScheme: '#ee587b'
                    }]
                }, {
                    firstName: 'Felipe',
                    lastName: 'Izquiedro',
                    image: 'felipe.jpg',
                    title: 'Senior Developer',
                    colorScheme: '#75be16',
                    items: [{
                        firstName: 'Daniel',
                        lastName: 'Tonini',
                        image: 'daniel.jpg',
                        title: 'Developer',
                        colorScheme: '#75be16'
                    }]
                }]
            }]
        }
    },
    methods: {
        kendowidgetready: function (widget) {
            widget.bringIntoView(widget.shapes)
        },
        visualTemplate: function (options) {
            var dataviz = kendo.dataviz
            var g = new dataviz.diagram.Group()
            var dataItem = options.dataItem

            g.append(new dataviz.diagram.Rectangle({
                width: 210,
                height: 75,
                stroke: {
                    width: 0
                },
                fill: {
                    gradient: {
                    type: 'linear',
                    stops: [{
                        color: dataItem.colorScheme,
                        offset: 0,
                        opacity: 0.5
                    }, {
                        color: dataItem.colorScheme,
                        offset: 1,
                        opacity: 1
                    }]
                    }
                }
            }))

            g.append(new dataviz.diagram.TextBlock({
                text: dataItem.firstName + ' ' + dataItem.lastName,
                x: 85,
                y: 20,
                fill: '#fff'
            }))

            g.append(new dataviz.diagram.TextBlock({
                text: dataItem.title,
                x: 85,
                y: 40,
                fill: '#fff'
            }))

            g.append(new dataviz.diagram.Image({
                source: 'https://demos.telerik.com/kendo-ui/content/dataviz/diagram/people/' + dataItem.image,
                x: 3,
                y: 3,
                width: 68,
                height: 68
            }))

            return g
        }
    }
}
</script>
