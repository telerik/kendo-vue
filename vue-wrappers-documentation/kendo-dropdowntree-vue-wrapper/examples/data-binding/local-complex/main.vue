<template>
<div>
    <dropdowntree :data-source="complexLocalDataSource"
                        :data-text-field="['categoryName', 'subCategoryName']"
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
            complexLocalDataSource: markRaw(new kendo.data.HierarchicalDataSource({
                data: [{
                    categoryName: 'Storage',
                    subCategories: [
                        { subCategoryName: 'Wall Shelving' },
                        { subCategoryName: 'Floor Shelving' },
                        { subCategoryName: 'Kids Storage' }
                    ]
                },{
                    categoryName: 'Lights',
                    subCategories: [
                        { subCategoryName: 'Ceiling' },
                        { subCategoryName: 'Table' },
                        { subCategoryName: 'Floor' }
                    ]
                }],
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
