<template>
 <kendo-autocomplete :data-source="dataSourceArray"
                        :placeholder="'Select country...'">
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
                'Belgium'
            ]
        }
    }
}
</script>
