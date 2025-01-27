<template>
  <div id="target">Target</div>
    <kendo-contextmenu :data-source="dataSource"
                    :data-text-field="'FullName'"
                    :target="'#target'">
    </kendo-contextmenu>
</template>
<script>
import { markRaw } from 'vue';
import { ContextMenu } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-contextmenu': ContextMenu
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
