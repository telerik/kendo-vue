<template>
     <kendo-menu :data-source="localDataSource">
    </kendo-menu>
</template>
<script>
import { markRaw } from 'vue';
import { Menu } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-menu': Menu
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
