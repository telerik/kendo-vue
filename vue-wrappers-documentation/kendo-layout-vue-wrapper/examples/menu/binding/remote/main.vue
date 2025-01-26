<template>
      <kendo-menu :data-source="dataSource"
                    :data-text-field="'FullName'">
    </kendo-menu>
</template>
<script>
import { markRaw } from 'vue';
import { Menu, MenuItem } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-menu': Menu,
    'kendo-menu-item': MenuItem
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
