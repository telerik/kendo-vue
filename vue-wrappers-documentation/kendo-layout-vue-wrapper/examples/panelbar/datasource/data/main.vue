<template>
    <kendo-panelbar :data-source="remoteDataSource"
                    :data-text-field="'FullName'">
    </kendo-panelbar>

    <br />

    <kendo-panelbar :data-source="localDataSource">
    </kendo-panelbar>
</template>
<script>
import { markRaw } from 'vue';
import { PanelBar } from '@progress/kendo-layout-vue-wrapper';
import { HierarchicalDataSource } from '@progress/kendo-datasource-vue-wrapper';
export default {
  components: {
    'kendo-panelbar': PanelBar,
    'kendo-hierarchicaldatasource': HierarchicalDataSource
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
            })),
            localDataSource: markRaw(new kendo.data.HierarchicalDataSource({
                data: [
                    {
                        text: 'Furniture',
                        items: [
                            { text: 'Tables & Chairs' },
                            { text: 'Sofas' },
                            { text: 'Occasional Furniture' }
                        ]
                    },
                    {
                        text: 'Decor',
                        items: [
                            { text: 'Bed Linen' },
                            { text: 'Curtains & Blinds' },
                            { text: 'Carpets' }
                        ]
                    }
                ]
            }))
        }
    }
}
</script>
