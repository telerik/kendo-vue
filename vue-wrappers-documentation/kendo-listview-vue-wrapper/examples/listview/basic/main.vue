<template>
    <kendo-listview :data-source="dataitems" :template="'<div>#:name#</div>'">
    </kendo-listview>
</template>
<script>
import { ListView } from '@progress/kendo-listview-vue-wrapper';
export default {
  components: {
    'kendo-listview': ListView
  },
   data () {
        return {
            dataitems: [
                { name: 'Jane Doe' },
                { name: 'John Doe' }
            ]
        }
    }
}
</script>
