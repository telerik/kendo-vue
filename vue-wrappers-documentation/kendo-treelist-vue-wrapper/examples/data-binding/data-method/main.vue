<template>
<div>
    <treelist :data-source="remoteDataSource"
                    :height="'540px'"
                    :filterable="true"
                    :sortable="true">
        <treelist-column :field="'FirstName'"
                               :title="'First Name'"
                               :width="180"></treelist-column>
        <treelist-column :field="'LastName'" :title="'Last Name'" :width="100"></treelist-column>
        <treelist-column :field="'Position'" ></treelist-column>
        <treelist-column :field="'Phone'" :width="130"></treelist-column>
        <treelist-column :field="'Address'"></treelist-column>
    </treelist>
</div>
</template>

<script>
import { TreeList, TreeListColumn } from '@progress/kendo-treelist-vue-wrapper';

export default {
    name: 'App',
    components: {
       'treelist': TreeList,
       'treelist-column': TreeListColumn,
    },
    data: function() {
        return {
            remoteDataSource: new kendo.data.TreeListDataSource({
                transport: {
                    read: {
                        url: "https://demos.telerik.com/kendo-ui/service/EmployeeDirectory/All",
                        dataType: "jsonp"
                    }
                },
                schema: {
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
            })
        }
    }
}
</script>
