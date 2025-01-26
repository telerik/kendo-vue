<template>
    <div>
        ScrollView:
       <kendo-datasource ref="datasource1"
                      :type="'odata'"
                      :page-size="pageSize"
                      :server-paging="true"
                      :transport-read="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products'">
    </kendo-datasource>
    <div>
        <kendo-scrollview  :data-source-ref="'datasource1'"
                          :enable-pager="true"
						  @change="onChange"
                          :template="itemTemplate"
                          v-bind:style="{ height: '300px', width: '600px',background: '#eee'}"
                          >
        </kendo-scrollview>
        </div>
    </div>
</template>
<script>
import { DataSource } from '@progress/kendo-datasource-vue-wrapper';
import { ScrollView } from '@progress/kendo-scrollview-vue-wrapper';

export default {
	components: {
		'kendo-scrollview': ScrollView,
		'kendo-datasource ': DataSource
	},
  data: function () {
    return {
      page: 1,
      pageSize: 3,
      itemTemplate:
        '# for (var i = 0; i < data.length; i++) { #' +
        '<div>' +
            '<div>#= data[i].ProductName #</div>' +
        '</div>' +
        '# } #'
    }
  },
  methods: {
    setBackground: function (id) {
      return 'url(https://demos.telerik.com/kendo-ui/content/web/foods/' + id + '.jpg)'
    },
	onChange () {
	    console.log("ScrollView item was changed.");
	  }
  }
}
</script>
<style>
    .field {
        padding: 10px;
    }
</style>