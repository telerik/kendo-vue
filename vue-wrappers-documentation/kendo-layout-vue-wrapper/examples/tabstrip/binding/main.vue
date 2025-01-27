<template>
   <kendo-tabstrip :data-source="localDataSource"
					data-text-field="Name"
					data-content-field="Content">
	</kendo-tabstrip>
</template>
<script>
import { markRaw } from 'vue';
import { TabStrip } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-tabstrip': TabStrip
  },
  data: function () {
    return {
        localDataSource: markRaw(new kendo.data.DataSource({
            data: [
                { Name: "Tab1", Content: "Tab1: content" },
                { Name: "Tab2", Content: "Tab2: content" }
            ]
        }))
    };
  }
}
</script>
