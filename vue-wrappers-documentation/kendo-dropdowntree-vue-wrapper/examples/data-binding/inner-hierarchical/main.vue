<template>
<div>  
    <dropdowntree data-text-field="FullName" data-value-field="EmployeeId">  
        <hierarchicaldatasource slot="kendo-hierarchicaldatasource"
                                      transport-read-url="https://demos.telerik.com/kendo-ui/service/Employees"
                                      transport-read-data-type="jsonp"
                                      schema-model-id="EmployeeId"
                                      schema-model-has-children="HasEmployees"
                                      :placeholder="'Select ...'"
                                      style="width: 300px;">
        </hierarchicaldatasource>      
   </dropdowntree>
</div>
</template>
<script>
import { DropDownTree } from '@progress/kendo-dropdowntree-vue-wrapper';
import { HierarchicalDataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
    name: 'App',
    components: {
        'dropdowntree': DropDownTree,
        'hierarchicaldatasource': HierarchicalDataSource
    }   
}
</script>
