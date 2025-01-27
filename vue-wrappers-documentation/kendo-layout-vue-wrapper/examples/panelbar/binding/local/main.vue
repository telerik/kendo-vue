<template>
     <kendo-panelbar :data-source="localDataSource">
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
            localDataSource: markRaw(new kendo.data.HierarchicalDataSource({
                data: [
                    {
                        text: 'Countries',
                        items: [
                            { text: 'China' },
                            { text: 'Japan' },
                            { text: 'Russia' }
                        ]
                    },
                    {
                        text: 'Sports',
                        items: [
                            { text: 'Swimming' },
                            { text: 'Golf' }
                        ]
                    }
                ]
            }))
        }
    }
}
</script>
