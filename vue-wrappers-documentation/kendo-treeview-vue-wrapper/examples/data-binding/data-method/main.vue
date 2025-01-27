<template>
<div>
    <treeview :data-source="remoteDataSource"
                :data-text-field="'FullName'">
    </treeview>
</div>
</template>

<script>
import { markRaw } from 'vue';
import { TreeView } from '@progress/kendo-treeview-vue-wrapper';

export default {
    name: 'App',
    components: {
       'treeview': TreeView,
    },
    data: function() {
        return {
            remoteDataSource: markRaw(new kendo.data.HierarchicalDataSource({
                transport: {
                    read: {
                        url: 'https://demos.telerik.com/kendo-ui/service/Employees',
                        dataType: 'jsonp'
                    }
                },
                schema: {
                    model: {
                        id: 'EmployeeId',
                        hasChildren: 'HasEmployees'
                    }
                }
            }))
        }
    }
}
</script>
