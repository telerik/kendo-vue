<template>
<div>
         <p>Type the name of a European country:</p>
        <autocomplete :style="{ width: '230px' }"
            :data-items="[]"
            :list-no-data-render="listNoDataRender"
        >
        <template v-slot:myTemplate="{props}">
            <custom />
        </template>
        </autocomplete>
    </div>
</template>
<script>
import { AutoComplete } from '@progress/kendo-vue-dropdowns';
import NoDataRender from './NoDataRender.vue';

export default {
    components: {
        'autocomplete': AutoComplete,
        'custom': NoDataRender
    },
    data: function () {
        return {
            listNoDataRender: 'myTemplate'
        };
    }
};

</script>
