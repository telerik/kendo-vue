<template>
  <div id="target">Target</div>
    <kendo-contextmenu :data-source="localDataSource" :target="'#target'">
    </kendo-contextmenu>
</template>
<script>
import { markRaw } from 'vue';
import { ContextMenu } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-contextmenu': ContextMenu
  },
   data: function() {
        return {
            localDataSource: markRaw(new kendo.data.HierarchicalDataSource({
                data: [
                    {
                        text: 'Countries',
                        items: [
                            { text: 'China' },
                            { text: 'Japan' },
                            { text: 'Russia' }
                        ]
                    },
                    {
                        text: 'Sports',
                        items: [
                            { text: 'Swimming' },
                            { text: 'Golf' }
                        ]
                    }
                ]
            }))
        }
    }
}
</script>
