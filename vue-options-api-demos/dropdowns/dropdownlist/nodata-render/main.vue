<template>
 <div>
         <p>Type the name of a European country:</p>
         <dropdownlist
          :style="{ width: '230px' }"
            :data-items="[]"
            :list-no-data-render="listNoDataRender"
        >
        <template v-slot:myTemplate>
            <custom />
        </template>
        </dropdownlist>
    </div>
</template>
<script>
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import NoDataRender from './NoDataRender.vue';

export default {
    components: {
        'dropdownlist': DropDownList,
         'custom': NoDataRender
    },
    data: function () {
        return {
            listNoDataRender: 'myTemplate'
        };
    }
};

</script>
