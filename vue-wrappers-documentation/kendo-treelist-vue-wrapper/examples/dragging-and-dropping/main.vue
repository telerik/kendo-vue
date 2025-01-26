<template>
<div>
    <treelistdatasource ref="remoteDataSource"
                              :transport-read-url="'https://demos.telerik.com/kendo-ui/service/EmployeeDirectory/All'"
                              :transport-read-data-type="'jsonp'"
                              :schema-model="model">
    </treelistdatasource>

    <treelist data-source-ref="remoteDataSource"
                    :height="'440px'"
                    :editable-move="true">
        <treelist-column :field="'FirstName'" :title="'First Name'" :width="280"></treelist-column>
        <treelist-column :field="'LastName'" :title="'Last Name'" :width="160"></treelist-column>
        <treelist-column :field="'Position'" ></treelist-column>
    </treelist>
</div>
</template>

<script>
import { TreeList, TreeListColumn } from '@progress/kendo-treelist-vue-wrapper';
import { TreeListDataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
    name: 'App',
    components: {
       'treelist': TreeList,
       'treelist-column': TreeListColumn,
       'treelistdatasource': TreeListDataSource
    },
    data: function (){
        return {
            model: {
                id: "EmployeeID",
                parentId: "ReportsTo",
                fields: {
                    ReportsTo: { field: "ReportsTo",  nullable: true },
                    EmployeeID: { field: "EmployeeId", type: "number" },
                    Extension: { field: "Extension", type: "number" }
                },
                expanded: true
            }
        }
    }
}
</script>
