<template>
     <kendo-panelbar>
        <kendo-panelbar-item :text="'Baseball'" :image-url="'https://demos.telerik.com/kendo-ui/content/shared/icons/sports/baseball.png'" 
            :items="[
                { text: 'Top News', 'image-url': 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/star.png' },
                { text: 'Photo Galleries', 'imageUrl': 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/photo.png' },
                { text: 'Videos Records', 'imageUrl': 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/video.png' },
                { text: 'Radio Records', 'imageUrl': 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/speaker.png' }
            ]">
             </kendo-panelbar-item>
             <kendo-panelbar-item text="Golf" image-url="https://demos.telerik.com/kendo-ui/content/shared/icons/sports/golf.png"
            :items="[
                  { text: 'Top News', 'imageUrl': 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/star.png' },
                  { text: 'Photo Galleries', 'imageUrl': 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/photo.png' },
                  { text: 'Videos Records', 'imageUrl': 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/video.png' },
                  { text: 'Radio Records', 'imageUrl': 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/speaker.png' }
            ]">
           
        </kendo-panelbar-item>
        <kendo-panelbar-item text="Swimming" image-url="https://demos.telerik.com/kendo-ui/content/shared/icons/sports/swimming.png"
            :items="[
               { text: 'Top News', 'imageUrl': 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/star.png' },
               { text: 'Photo Galleries', 'imageUrl': 'https://demos.telerik.com/kendo-ui/content/shared/icons/16/photo.png' }
            ]"
        >
        </kendo-panelbar-item>
    </kendo-panelbar>
</template>
<script>
import { PanelBar, PanelBarItem } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-panelbar': PanelBar,
    'kendo-panelbar-item': PanelBarItem
  }
}
</script>
