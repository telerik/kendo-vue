<template>
  	 <kendo-splitter :panes="panes">
        <div></div>
        <div></div>
    </kendo-splitter>
</template>
<script>
import { Splitter } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-splitter': Splitter
  },
    data: function() {
        return {
            panes: [
                { contentUrl: 'https://demos.telerik.com/kendo-ui/content/web/splitter/ajax/ajaxContent1.html' },
                { contentUrl: 'https://demos.telerik.com/kendo-ui/content/web/splitter/ajax/ajaxContent2.html' }
            ]
        }
    }
}
</script>
