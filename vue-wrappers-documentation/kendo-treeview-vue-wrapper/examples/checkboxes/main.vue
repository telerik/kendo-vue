<template>
<div>
    <div>
        <h4>Check nodes</h4>
        <treeview ref="treeview"
                        id="treeview"
                        :checkboxes-check-children="true"
                        :data-source="dataSource"
                        @check="onCheck">
        </treeview>
    </div>
    <div>
        <h4>Status</h4>
        <p>{{message}}</p>
    </div>
</div>
</template>

<style>
    #treeview .k-sprite {
        background-image: url("https://demos.telerik.com/kendo-ui/content/web/treeview/coloricons-sprite.png");
    }

    .rootfolder { background-position: 0 0; }
    .folder     { background-position: 0 -16px; }
    .pdf        { background-position: 0 -32px; }
    .html       { background-position: 0 -48px; }
    .image      { background-position: 0 -64px; }
</style>

<script>
import { TreeView, TreeViewItem } from '@progress/kendo-treeview-vue-wrapper';

export default {
    name: 'App',
    components: {
       'treeview': TreeView,
       'treeview-item': TreeViewItem
    },
    data () {
        return {
            message: "No nodes checked.",
            dataSource: [{
                id: 1, text: "My Documents", expanded: true, spriteCssClass: "rootfolder", items: [
                    {
                        id: 2, text: "Kendo UI Project", expanded: true, spriteCssClass: "folder", items: [
                            { id: 3, text: "about.html", spriteCssClass: "html" },
                            { id: 4, text: "index.html", spriteCssClass: "html" },
                            { id: 5, text: "logo.png", spriteCssClass: "image" }
                        ]
                    },
                    {
                        id: 6, text: "New Web Site", expanded: true, spriteCssClass: "folder", items: [
                            { id: 7, text: "mockup.jpg", spriteCssClass: "image" },
                            { id: 8, text: "Research.pdf", spriteCssClass: "pdf" },
                        ]
                    },
                    {
                        id: 9, text: "Reports", expanded: true, spriteCssClass: "folder", items: [
                            { id: 10, text: "February.pdf", spriteCssClass: "pdf" },
                            { id: 11, text: "March.pdf", spriteCssClass: "pdf" },
                            { id: 12, text: "April.pdf", spriteCssClass: "pdf" }
                        ]
                    }
                ]
            }]
        }
    },
    methods: {
        onCheck () {
            var checkedNodes = [],
                treeView = this.$refs.treeview.kendoWidget(),
                message;

            this.checkedNodeIds(treeView.dataSource.view(), checkedNodes);

            if (checkedNodes.length > 0) {
                this.message = "IDs of checked nodes: " + checkedNodes.join(",");
            } else {
                this.message = "No nodes checked.";
            }
        },
        checkedNodeIds (nodes, checkedNodes) {
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].checked) {
                    checkedNodes.push(nodes[i].id);
                }

                if (nodes[i].hasChildren) {
                    this.checkedNodeIds(nodes[i].children.view(), checkedNodes);
                }
            }
        }
    }
}
</script>
