<template>
  <kendo-tabstrip :content-urls="contentUrls">
        <ul>
            <li class="k-state-active">Dimensions &amp; Weights</li>
            <li>Engine</li>
            <li>Chassis</li>
        </ul>
	</kendo-tabstrip>
</template>
<script>
import { TabStrip } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-tabstrip': TabStrip
  },
   data: function () {
       return {
            contentUrls: [
                'https://demos.telerik.com/kendo-ui/content/web/tabstrip/ajax/ajaxContent1.html',
                'https://demos.telerik.com/kendo-ui/content/web/tabstrip/ajax/ajaxContent2.html',
                'https://demos.telerik.com/kendo-ui/content/web/tabstrip/ajax/ajaxContent3.html'
            ]
        };
   }
}
</script>
