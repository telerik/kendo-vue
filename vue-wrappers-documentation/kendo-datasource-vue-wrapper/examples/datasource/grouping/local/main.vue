<template>
<div>
	<datasource ref="localDataSource"
                :group-field="'category'"
                :group-dir="'desc'"
                :data="localData"
                :schema-data="'items'">
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
            'count': 2,
            'input': 'kendo',
            'items': [
                { name: "Tea", category: "Beverages"},
                { name: "Ham", category: "Food"},
            ]
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
