<template>
<div>
    <treeview :data-source="localDataSource"></treeview>
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
