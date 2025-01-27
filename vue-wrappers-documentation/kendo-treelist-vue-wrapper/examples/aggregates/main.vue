<template>
<div>
    <treelistdatasource ref="remoteDataSource"
                              :transport-read-url="'https://demos.telerik.com/kendo-ui/service/EmployeeDirectory/All'"
                              :transport-read-data-type="'jsonp'"
                              :schema-model="model"
                              :aggregate="aggregate">
    </treelistdatasource>

    <treelist data-source-ref="remoteDataSource" :height="'380px'">
        <treelist-column :field="'FirstName'"
                               :title="'First Name'"
                               :expandable="true"
                               :footer-template="footerTemplate">
        </treelist-column>
        <treelist-column :field="'LastName'" :title="'Last Name'"></treelist-column>
        <treelist-column :field="'Position'"></treelist-column>
        <treelist-column :field="'Extension'" :title="'Ext'"></treelist-column>
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
                id: "EmployeeId",
                parentId: "ReportsTo",
                fields: {
                    EmployeeId: { type: "number", nullable: false },
                    ReportsTo: { nullable: true, type: "number" }
                }
            },
            aggregate: [
                { field: "FirstName", aggregate: "count" }
            ]
        }
    },
    methods: {
        footerTemplate (data) {
            return kendo.template("#= count # employee(s)")(data);
        }
    }
}
</script>
