<template>
<div>
    <datasource ref="datasource1"
                :type="'odata'"
                :page-size="pageSize"
                :server-paging="true"
                :transport-read="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products'">
    </datasource>
    <div>
        <scrollview  :data-source-ref="'datasource1'"
                    :enable-pager="true"
                    :template="itemTemplate"
                    v-bind:style="{ height: '300px', width: '600px',background: '#eee'}"
                    >
        </scrollview>
    </div>
</div>
</template>

<script>
import { DataSource } from '@progress/kendo-datasource-vue-wrapper';
import { ScrollView } from '@progress/kendo-scrollview-vue-wrapper';

export default {
	name: 'App',
	components: {
		'scrollview': ScrollView,
		'datasource': DataSource
	},
    data: function () {
      return {
          page: 1,
          pageSize: 18,
          itemTemplate:
            '# for (var i = 0; i < data.length; i++) { #' +
            '<div class="product" style="width: 100px; float: left; height: 100px; color: white; background-image:url(https://demos.telerik.com/kendo-ui/content/web/foods/#=data[i].ProductID#.jpg)" title="#=data[i].ProductName#">' +
            '</div>' +
            '# } #'
        }
    }
}
</script>
