<template>
    <kendo-panelbar :data-source="dataSource"
                    :data-text-field="'FullName'">
    </kendo-panelbar>
</template>
<script>
import { markRaw } from 'vue';
import { PanelBar } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-panelbar': PanelBar
  },
  data: function() {
        return {
            dataSource: markRaw(new kendo.data.HierarchicalDataSource({
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
