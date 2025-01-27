<template>
    <div style="height:200px">
      <kendo-menu :data-source="dataSource"></kendo-menu>
    </div>
</template>

<script>
import { markRaw } from 'vue';
import { Menu } from '@progress/kendo-layout-vue-wrapper';

export default {
  components: {
    'kendo-menu': Menu
  },
  data: function(){
    return {
      dataSource: markRaw(new kendo.data.HierarchicalDataSource({
                data: [
                    {
                        text: 'Baseball',
                        items: [
                            { text: 'Top News' },
                            { text: 'Radio Records' },
                        ]
                    },
                    {
                        text: 'Swimming',
                        items: [
                            { text: 'Top News' },
                            { text: 'Radio Records' }
                        ]
                    }
                ]
            }))
    }
  }
}
</script>
