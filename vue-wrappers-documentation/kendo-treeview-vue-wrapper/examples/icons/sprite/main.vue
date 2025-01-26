<template>
<div>
    <treeview id="treeview-sprites">
        <treeview-item text="Brazil" sprite-css-class="brazilFlag" :items="[
            { text: 'History', spriteCssClass: 'historyIcon' },
            { text: 'Geography', spriteCssClass: 'geographyIcon' }
        ]" ></treeview-item>
        <treeview-item text="India" sprite-css-class="indiaFlag" :items="[
            { text: 'History', spriteCssClass: 'historyIcon' },
            { text: 'Geography', spriteCssClass: 'geographyIcon' }
        ]" ></treeview-item>
        <treeview-item text="Netherlands" sprite-css-class="netherlandsFlag" :items="[
            { text: 'History', spriteCssClass: 'historyIcon' },
            { text: 'Geography', spriteCssClass: 'geographyIcon' }
        ]" ></treeview-item>
    </treeview>
</div>
</template>

<style>
    .k-panel {
        -webkit-transform: translatez(0);
    }
    #treeview-sprites .k-sprite {
        background-image: url("https://demos.telerik.com/kendo-ui/content/shared/styles/flags.png");
    }
    .brazilFlag {
        background-position: 0 0;
    }
    .indiaFlag {
        background-position: 0 -32px;
    }
    .netherlandsFlag {
        background-position: 0 -64px;
    }
    .historyIcon {
        background-position: 0 -96px;
    }
    .geographyIcon {
        background-position: 0 -128px;
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
