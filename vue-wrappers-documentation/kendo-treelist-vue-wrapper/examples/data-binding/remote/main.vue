<template>
<div>
    <treelistdatasource ref="remoteDataSource"
                              :transport-read-url="'https://demos.telerik.com/kendo-ui/service/EmployeeDirectory/All'"
                              :transport-read-data-type="'jsonp'"
                              :schema-model="model">
    </treelistdatasource>

    <treelist data-source-ref="remoteDataSource"
                    :height="'540px'"
                    :filterable="true"
                    :sortable="true">
        <treelist-column :field="'FirstName'"
                               :title="'First Name'"
                               :width="230"
                               :template="columnTemplate" ></treelist-column>
        <treelist-column :field="'LastName'" :title="'Last Name'" :width="90"></treelist-column>
        <treelist-column :field="'Position'" ></treelist-column>
        <treelist-column :field="'Phone'" :width="130"></treelist-column>
        <treelist-column :field="'Address'"></treelist-column>
    </treelist>
</div>
</template>

<style>
    .employee-photo {
        display: inline-block;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-size: 32px 35px;
        background-position: center center;
        vertical-align: middle;
        line-height: 32px;
        box-shadow: inset 0 0 1px #999, inset 0 0 10px rgba(0,0,0,.2);
        margin-left: 5px;
    }

    .employee-name {
        display: inline-block;
        vertical-align: middle;
        line-height: 32px;
        padding-left: 3px;
    }
</style>

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
    data: function() {
        return {
            model: {
                id: 'EmployeeID',
                parentId: 'ReportsTo',
                fields: {
                    ReportsTo: { field: 'ReportsTo', nullable: true },
                    EmployeeID: { field: 'EmployeeId', type: 'number' },
                    Extension: { field: 'Extension', type: 'number' }
                },
                expanded: true
            }
        }
    },
    methods: {
        columnTemplate (data) {
            var itemTemplate = kendo.template(`<div class='employee-photo'
                style='background-image: url(https://demos.telerik.com/kendo-ui/content/web/treelist/people/#:data.EmployeeID#.jpg);'></div>
            <div class='employee-name'>#: FirstName #</div>`)
            return itemTemplate(data)
        }
    },
}
</script>
