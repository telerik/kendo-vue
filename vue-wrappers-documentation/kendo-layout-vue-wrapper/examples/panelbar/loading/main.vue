<template>
   <kendo-panelbar :content-urls="contentUrls">
        <li>
            BODY
            <div></div>
        </li>
        <li>
            ENGINE
            <div></div>
        </li>
        <li>
            TRANSMISSION
            <div></div>
        </li>
        <li>
            PERFORMANCE
            <div></div>
        </li>
    </kendo-panelbar>
</template>
<script>
import { PanelBar } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-panelbar': PanelBar
  },
   data: function() {
        return {
             contentUrls: [
                'https://demos.telerik.com/kendo-ui/content/web/panelbar/ajax/ajaxContent1.html',
                'https://demos.telerik.com/kendo-ui/content/web/panelbar/ajax/ajaxContent2.html',
                'https://demos.telerik.com/kendo-ui/content/web/panelbar/ajax/ajaxContent3.html',
                'https://demos.telerik.com/kendo-ui/content/web/panelbar/ajax/ajaxContent4.html'
            ]
        }
    }
}
</script>
