<template>
    <kendo-datasource ref="datasource"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'"
                      :group-field="'Country'">
    </kendo-datasource>
    <kendo-autocomplete :data-source-ref="'datasource'"
                        :data-text-field="'ContactName'"
                        :placeholder="'Choose a contact...'"
                        style="width:300px;">
    </kendo-autocomplete>
</template>
<script>
import { AutoComplete } from '@progress/kendo-dropdowns-vue-wrapper';
import { KendoDataSource } from '@progress/kendo-datasource-vue-wrapper';
export default {
  components: {
    'kendo-autocomplete': AutoComplete,
    'kendo-datasource': KendoDataSource
  },
   data: function() {
        return {
            autocompleteValue: "",
            dataSourceArray: [
                'Albania',
                'Andorra',
                'Armenia',
                'Austria',
                'Azerbaijan',
                'Belarus',
                'Belgium',
                'Bosnia & Herzegovina',
                'Bulgaria',
                'Croatia',
                'Cyprus',
                'Czech Republic',
                'Denmark',
                'Estonia',
                'Finland',
                'France',
                'Georgia',
                'Germany',
                'Greece',
                'Hungary',
                'Iceland',
                'Ireland',
                'Italy',
                'Kosovo',
                'Latvia',
                'Liechtenstein',
                'Lithuania',
                'Luxembourg',
                'Macedonia',
                'Malta',
                'Moldova',
                'Monaco',
                'Montenegro',
                'Netherlands',
                'Norway',
                'Poland',
                'Portugal',
                'Romania',
                'Russia',
                'San Marino',
                'Serbia',
                'Slovakia',
                'Slovenia',
                'Spain',
                'Sweden',
                'Switzerland',
                'Turkey',
                'Ukraine',
                'United Kingdom',
                'Vatican City'
            ]
        }
    }
}
</script>
