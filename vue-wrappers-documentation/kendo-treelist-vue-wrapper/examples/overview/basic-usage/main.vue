<template>
<div>
    <treelist :data-source="localData"
                    :filterable="true"
                    :sortable="true">
        <treelist-column :field="'id'" :width="50"></treelist-column>
        <treelist-column :field="'Name'" :width="140"></treelist-column>
        <treelist-column :field="'Position'" :width="140"></treelist-column>
    </treelist>
</div>
</template>

<script>
import { TreeList, TreeListColumn } from '@progress/kendo-treelist-vue-wrapper';

export default {
    name: 'App',
    components: {
       'treelist': TreeList,
       'treelist-column': TreeListColumn
    },
    data: function() {
        return {
            localData: [
                { id: 1, parentId: null, Name: "Jane Smith", Position: "CEO" },
                { id: 2, parentId: 1,    Name: "Alex Sells", Position: "EVP Sales" },
                { id: 3, parentId: 1,    Name: "Bob Price",  Position: "EVP Marketing" }
            ]
        }
    }
}
</script>
