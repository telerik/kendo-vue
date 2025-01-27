<template>
 AutoComplete value: {{ autocompleteValue }}
    <br />
    <br />
    <kendo-autocomplete v-model="autocompleteValue"
                        :data-source="dataSourceArray"
                        :placeholder="'Select country...'"
                        :separator="', '"
                        :filter="'contains'">
    </kendo-autocomplete>
</template>
<script>
import { AutoComplete } from '@progress/kendo-dropdowns-vue-wrapper';
export default {
  components: {
    'kendo-autocomplete': AutoComplete
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
