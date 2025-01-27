<template>
<div>
    <hierarchicaldatasource ref="remoteDataSourceComponent"
                                  :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Employees'"
                                  :transport-read-data-type="'jsonp'"
                                  :schema-model-id="'EmployeeId'"
                                  :schema-model-has-children="'HasEmployees'">
    </hierarchicaldatasource>
    <treeview data-source-ref="remoteDataSourceComponent"
                    :data-text-field="'FullName'"
                    :checkboxes="true"
                    :drag-and-drop="true"
                    @change="onChange"
                    @check="onCheck"
                    @collapse="onCollapse"
                    @dataBound="onDataBound"
                    @drag="onDrag"
                    @dragStart="onDragStart"
                    @dragEnd="onDragEnd"
                    @drop="onDrop"
                    @expand="onExpand"
                    @navigate="onNavigate"
                    @select="onSelect">
    </treeview>
</div>
</template>

<script>
import { TreeView } from '@progress/kendo-treeview-vue-wrapper';
import { HierarchicalDataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
    name: 'App',
    components: {
       'treeview': TreeView,
       'hierarchicaldatasource': HierarchicalDataSource
    },
    methods: {
        onChange: function (ev) {
            console.log("Event :: change");
        },
        onCheck: function (ev) {
            console.log("Event :: check");
        },
        onCollapse: function (ev) {
            console.log("Event :: collapse");
        },
        onDataBound: function (ev) {
            console.log("Event :: dataBound");
        },
        onDrag: function (ev) {
            console.log("Event :: drag");
        },
        onDragStart: function (ev) {
            console.log("Event :: dragStart");
        },
        onDragEnd: function (ev) {
            console.log("Event :: dragEnd");
        },
        onDrop: function (ev) {
            console.log("Event :: drop");
        },
        onExpand: function (ev) {
            console.log("Event :: expand");
        },
        onNavigate: function (ev) {
            console.log("Event :: navigate");
        },
        onSelect: function (ev) {
            console.log("Event :: select");
        }
    }
}
</script>
