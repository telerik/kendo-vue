<template>
<div>
    <hierarchicaldatasource ref="remoteDataSourceComponent"
                           :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Employees'"
                           :transport-read-data-type="'jsonp'"
                           :schema-model-id="'EmployeeId'"
                           :schema-model-has-children="'HasEmployees'">
    </hierarchicaldatasource>
    <treeview data-source-ref="remoteDataSourceComponent"
                    :data-text-field="'FullName'">
    </treeview></div>
</template>

<script>
import { TreeView } from '@progress/kendo-treeview-vue-wrapper';
import { HierarchicalDataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
    name: 'App',
    components: {
       'treeview': TreeView,
       'hierarchicaldatasource': HierarchicalDataSource
    }
}
</script>
