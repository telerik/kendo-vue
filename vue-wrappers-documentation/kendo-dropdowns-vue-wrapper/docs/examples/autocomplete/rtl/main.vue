<template>
    <div class="k-rtl">
        <kendo-autocomplete :data-source="dataSourceArray"
                            :placeholder="'Select country...'"
                            :separator="', '"
                            :filter="'startswith'">
        </kendo-autocomplete>
    </div>
</template>
<script>
import { AutoComplete } from '@progress/kendo-dropdowns-vue-wrapper';
export default {
  components: {
    'kendo-autocomplete': AutoComplete
  },
     data: function() {
        return {
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
                'Greece'
            ]
        }
    }
}
</script>
