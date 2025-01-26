<template>
<div>
    <datasource ref="datasource" :data="dataSourceArray">
	</datasource>

	<dropdownlist :data-source-ref="'datasource'"
                    :data-text-field="'text'"
                    :data-value-field="'value'">
    </dropdownlist>
</div>
</template>

<script>
import { DataSource } from '@progress/kendo-datasource-vue-wrapper';
import { DropDownList } from '@progress/kendo-dropdowns-vue-wrapper';

export default {
	name: 'App',
	components: {
		'dropdownlist': DropDownList,
		'datasource': DataSource
    },
    data: function() {
        return {
            dataSourceArray: [
                { text: 'Albania', value: '1' },
                { text: 'Andorra', value: '2' },
                { text: 'Armenia', value: '3' },
                { text: 'Austria', value: '4' },
                { text: 'Azerbaijan', value: '5' },
                { text: 'Belarus', value: '6' },
                { text: 'Belgium', value: '7' }
            ]
        }
    }
}
</script>
