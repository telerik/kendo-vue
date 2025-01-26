<template>
<div>
    <treeview :data-source="complexLocalDataSource"
                :data-text-field="['categoryName', 'subCategoryName']">
    </treeview></div>
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
            complexLocalDataSource: markRaw(new kendo.data.HierarchicalDataSource({
                data: [
                    {
                        categoryName: 'Storage',
                        subCategories: [
                            { subCategoryName: 'Wall Shelving' },
                            { subCategoryName: 'Floor Shelving' },
                            { subCategoryName: 'Kids Storage' }
                        ]
                    },
                    {
                        categoryName: 'Lights',
                        subCategories: [
                            { subCategoryName: 'Ceiling' },
                            { subCategoryName: 'Table' },
                            { subCategoryName: 'Floor' }
                        ]
                    }
                ],
                schema: {
                    model: {
                    children: 'subCategories'
                    }
                }
            }))
        }
    }
}
</script>
