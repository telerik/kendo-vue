<template>
<div>
    <datasource ref="remoteDatasource"
                :type="'odata'"
                :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'"
                :group-field="'Country'">
    </datasource>
    <autocomplete style="width: 100%"
                    :data-text-field="'ContactName'"
                    :data-source-ref="'remoteDatasource'" >
    </autocomplete>
</div>
</template>

<script>
import { DataSource } from '@progress/kendo-datasource-vue-wrapper';
import { AutoComplete } from '@progress/kendo-dropdowns-vue-wrapper';

export default {
	name: 'App',
	components: {
		'autocomplete': AutoComplete,
		'datasource': DataSource
	}
}
</script>
