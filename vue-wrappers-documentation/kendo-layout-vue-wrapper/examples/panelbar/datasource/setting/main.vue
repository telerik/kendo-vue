<template>
    <kendo-hierarchicaldatasource ref="dataSourceComponent"
                :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Employees'"
                :transport-read-data-type="'jsonp'"
                :schema-model-id="'EmployeeId'"
                :schema-model-has-children="'HasEmployees'">
    </kendo-hierarchicaldatasource>

    <kendo-panelbar :data-source-ref="'dataSourceComponent'"
                    :data-text-field="'FullName'">
    </kendo-panelbar>
</template>
<script>
import { PanelBar } from '@progress/kendo-layout-vue-wrapper';
import { HierarchicalDataSource } from '@progress/kendo-datasource-vue-wrapper';
export default {
  components: {
    'kendo-panelbar': PanelBar,
    'kendo-hierarchicaldatasource': HierarchicalDataSource
  }
}
</script>
