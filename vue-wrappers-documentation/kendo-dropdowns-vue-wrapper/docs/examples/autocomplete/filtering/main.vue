<template>
  <kendo-datasource ref="datasource"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders'"
                      :server-filtering="true"
                      :page-size="80">
    </kendo-datasource>
    <kendo-autocomplete :data-source-ref="'datasource'"
                        :data-text-field="'ShipName'"
                        :placeholder="'Choose a ship...'"
                        :filter="'contains'">
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
