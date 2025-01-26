<template>
  <kendo-datasource :page-size="10" ref="datasource1"
      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Products'"
      :transport-read-data-type="'jsonp'" >
    </kendo-datasource>

    <kendo-pager :data-source-ref="'datasource1'"
                 :input="true"
                 :page-sizes="false"
                 @change="onChange">
    </kendo-pager>
</template>
<script>
import { Pager } from '@progress/kendo-listview-vue-wrapper';
import { DataSource } from '@progress/kendo-datasource-vue-wrapper';
export default {
  components: {
    'kendo-pager': Pager,
    'kendo-datasource': DataSource
  },
   mounted () {
        this.$refs.datasource1.kendoDataSource.read();
    },
    methods: {
        onChange () {
            console.log("Event :: change")
            console.log(this.$refs.datasource1.kendoDataSource.view().toJSON())
        }
    }
}
</script>
