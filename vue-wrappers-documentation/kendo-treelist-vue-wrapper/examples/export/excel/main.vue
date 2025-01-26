<template>
<div>
    <treelistdatasource ref="remoteDataSource"
                              :transport-read-url="'https://demos.telerik.com/kendo-ui/service/EmployeeDirectory/All'"
                              :transport-read-data-type="'jsonp'"
                              :schema-model="model">
    </treelistdatasource>

    <treelist data-source-ref="remoteDataSource"
                    :toolbar="tools"
                    :excel="exportSettings"
                    :height="'380px'">
        <treelist-column :field="'FirstName'"
                               :title="'First Name'"
                               :width="'250px'"
                               :expandable="true">
        </treelist-column>
        <treelist-column :field="'LastName'" :title="'Last Name'"></treelist-column>
        <treelist-column :field="'Position'" ></treelist-column>
        <treelist-column :field="'Extension'" :title="'Ext'"></treelist-column>
    </treelist>
</div>
</template>

<script>
import { TreeList, TreeListColumn } from '@progress/kendo-treelist-vue-wrapper';
import { TreeListDataSource } from '@progress/kendo-datasource-vue-wrapper';

window.JSZip = JSZip;

export default {
    name: 'App',
    components: {
       'treelist': TreeList,
       'treelist-column': TreeListColumn,
       'treelistdatasource': TreeListDataSource
    },
    data: function (){
        return {
            exportSettings: {
                    fileName: "Kendo UI TreeList Export.xlsx",
                    proxyURL: "https://demos.telerik.com/kendo-ui/service/export"
            },
            model: {
                id: "EmployeeId",
                parentId: "ReportsTo",
                fields: {
                    EmployeeId: { type: "number", editable: false, nullable: false },
                    ReportsTo: { nullable: true, type: "number" }
                },
                expanded: true
            },
            tools: [ "excel" ]
        }
    }
}
</script>
