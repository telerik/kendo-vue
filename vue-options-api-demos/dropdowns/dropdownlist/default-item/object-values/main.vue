<template>
    <dropdownlist
        :style="{ width: '230px' }"
        :data-items="sports"
        :text-field="'text'"
        :default-item="defaultItem"
    >
    </dropdownlist>
</template>
<script>
import { DropDownList } from '@progress/kendo-vue-dropdowns';

export default {
    components: {
        'dropdownlist': DropDownList
    },
    data: function () {
        return {
            sports: [
                { text: 'Basketball', id: 1 },
                { text: 'Football', id: 2 },
                { text: 'Tennis', id: 3 },
                { text: 'Volleyball', id: 4 }
            ],
            defaultItem: { 
                text: 'Select sport ...'
            }
        };
    }
};

</script>
