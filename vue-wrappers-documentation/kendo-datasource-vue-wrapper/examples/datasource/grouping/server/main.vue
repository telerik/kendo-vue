<template>
<div>
	<datasource ref="localDataSource"
                :group-field="'category'"
                :data="localData"
                :server-grouping="true"
                :schema-data="'items'"
                :schema-groups="'groups'">
	</datasource>
</div>
</template>

<script>
import { DataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
	name: 'App',
	components: {
		'datasource': DataSource
    },
    data: function() {
        return {
        localData: {
            'count': 4,
            'input': 'kendo',
            'groups': [{
                'field': 'category',
                'value': 'Food',
                'items': [
                    { name: "Bread"},
                    { name: "Ham"},
                ],
                'hasSubgroups': false,
                'aggregates': {}
            },{
                'field': 'category',
                'value': 'Beverages',
                'items': [
                    { name: "Tea"},
                    { name: "Coffee"},
                ],
                'hasSubgroups': false,
                'aggregates': {}
            }]
        }
        }
    },
	methods: {
		logData: function() {
		  var ds = this.$refs.localDataSource.kendoWidget();
		  ds.fetch();
		  console.log(ds.view()[0]);
		  console.log(ds.view()[1]);
		}
	},
	mounted: function() {
		this.logData();
	}
}
</script>
