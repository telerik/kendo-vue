<template>
<div>
    <treelistdatasource ref="remoteDataSource"
                              :batch="true"
                              :transport-read-url="'https://demos.telerik.com/kendo-ui/service/EmployeeDirectory/All'"
                              :transport-read-data-type="'jsonp'"
                              :transport-update-url="'https://demos.telerik.com/kendo-ui/service/EmployeeDirectory/Update'"
                              :transport-update-data-type="'jsonp'"
                              :transport-destroy-url="'https://demos.telerik.com/kendo-ui/service/EmployeeDirectory/Destroy'"
                              :transport-destroy-data-type="'jsonp'"
                              :transport-create-url="'https://demos.telerik.com/kendo-ui/service/EmployeeDirectory/Create'"
                              :transport-create-data-type="'jsonp'"
                              :transport-parameter-map="parameterMap"
                              :schema-model="model">
    </treelistdatasource>

    <treelist data-source-ref="remoteDataSource"
                    :toolbar="['create']"
                    :height="'540px'"
                    :editable="'true'"
                    :selectable="'multiple, row'"
                    :navigatable="'true'">
        <treelist-column :field="'FirstName'"
                               :title="'First Name'"
                               :width="180"
                               :expandable="true">
        </treelist-column>
        <treelist-column :field="'LastName'" :title="'Last Name'" :width="90"></treelist-column>
        <treelist-column :field="'Position'" :width="130"></treelist-column>
        <treelist-column :field="'Phone'" :title="'Phone'" :width="130"></treelist-column>
        <treelist-column :title="'Edit'" :command="['edit', 'destroy']" :width="200"></treelist-column>
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
                    EmployeeId: { type: "number", editable: false, nullable: false },
                    ReportsTo: { nullable: true, type: "number" },
                    FirstName: { validation: { required: true } },
                    LastName: { validation: { required: true } },
                    HireDate: { type: "date" },
                    Phone: { type: "string" },
                    HireDate: { type: "date" },
                    BirthDate: { type: "date" },
                    Extension: { type: "number", validation: { min: 0, required: true } },
                    Position: { type: "string" }
                },
                expanded: true
            }
        }
    },
    methods: {
        parameterMap: function(options, operation) {
            if (operation !== "read" && options.models) {
                return {models: kendo.stringify(options.models)};
            }
        }
    }
}
</script>
