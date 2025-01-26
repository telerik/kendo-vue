<template>
<div>
	<datasource ref="localDataSource"
                :filter="filter"
                :data="localData">
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
            localData: [
                { name: "Tea", category: "Beverages" },
                { name: "Coffee", category: "Beverages" },
                { name: "Ham", category: "Food" }
            ],
            filter: {
                logic: "and",
                filters: [
                    { field: "name", operator: "contains", value: "Coffee" },
                    { field: "category", operator: "eq", value: "Beverages" }
                ]
            }
        }
    },
	methods: {
		logData: function() {
			var ds = this.$refs.localDataSource.kendoWidget();
			ds.fetch();
			console.log(ds.view()[0]);
		}
	},
	mounted: function() {
		this.logData();
    }
    
}
</script>
