<template>
<div>
    <h4>Treeview One</h4>
    <treeview id="treeview-left" :drag-and-drop="true">
        <treeview-item :text="'Brazil'" :expanded="true" :items="[
            { text: 'Tables & Chairs' },
            { text: 'Sofas' },
            { text: 'Occasional Furniture' }
        ]">
            
        </treeview-item>
        <treeview-item :text="'Decor'" :expanded="true" :items="[
           { text: 'Bed Linen' },
           { text: 'Curtains & Blinds' },
           { text: 'Carpets' }
        ]">
            
        </treeview-item>
    </treeview>
    <h4 style="padding-top: 2em;">Treeview Two</h4>
    <treeview id="treeview-right" :drag-and-drop="true">
        <treeview-item :text="'Storage'" :expanded="true" :items="[
            { text: 'Wall Shelving' },
            { text: 'Floor Shelving' },
            { text: 'Kids Storage' }
        ]">
           
        </treeview-item>
        <treeview-item :text="'Lights'" :expanded="true" :items="[
             { text: 'Ceiling' },
             { text: 'Table' },
             { text: 'Floor' }
        ]">
           
        </treeview-item>
    </treeview>
</div>
</template>

<style>
#treeview-left,
#treeview-right
    {
        overflow: visible;
    }
</style>

<script>
import { TreeView, TreeViewItem } from '@progress/kendo-treeview-vue-wrapper';

export default {
    name: 'App',
    components: {
       'treeview': TreeView,
       'treeview-item': TreeViewItem
    }
}
</script>
