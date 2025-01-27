<template>
<div>
    <dropdowntree expand-mode="single"
                  :data-source="remoteDataSource"
                  data-text-field="FullName"
                  :placeholder="'Select ...'"
                  style="width: 300px;">
  </dropdowntree>
</div>
</template>
<script>
import { markRaw } from 'vue';
import { DropDownTree } from '@progress/kendo-dropdowntree-vue-wrapper';
export default {
name: 'App',
components: {
  'dropdowntree': DropDownTree
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
