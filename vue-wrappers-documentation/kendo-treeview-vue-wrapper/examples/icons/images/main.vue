<template>
<div>
    <kendo-treeview>
            <kendo-treeview-item text="Baseball" image-url="https://demos.telerik.com/kendo-ui/content/shared/icons/sports/baseball.png" 
            :items="[
              { text: 'Top News', imageUrl: 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/star.png'},
              { text: 'Photo Galleries', imageUrl: 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/photo.png'},
              { text: 'Videos Records', imageUrl: 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/video.png'},
              { text: 'Radio Records', imageUrl: 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/speaker.png'}
            ]">
            </kendo-treeview-item>
            <kendo-treeview-item text="Golf" image-url="https://demos.telerik.com/kendo-ui/content/shared/icons/sports/golf.png" 
              :items="[
                { text: 'Top News', imageUrl: 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/star.png' },
                { text: 'Photo Galleries', imageUrl: 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/photo.png' },
                { text: 'Videos Records', imageUrl: 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/video.png' },
                { text: 'Radio Records', imageUrl: 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/speaker.png' }
            ]">
              
            </kendo-treeview-item>
            <kendo-treeview-item text="Swimming" image-url="https://demos.telerik.com/kendo-ui/content/shared/icons/sports/swimming.png"
              :items="[
              { text: 'Top News', imageUrl: 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/star.png' },
              { text: 'Photo Galleries', imageUrl: 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/photo.png' }
            ]">
          </kendo-treeview-item>
        </kendo-treeview>
</div>
</template>

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
