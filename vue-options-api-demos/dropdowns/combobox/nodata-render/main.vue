<template>
 <div>
         <p>Type the name of a European country:</p>
         <combobox
          :style="{ width: '230px' }"
            :data-items="[]"
            :list-no-data-render="listNoDataRender"
        >
          <template v-slot:myTemplate>
            <custom />
        </template>
        </combobox>
    </div>
</template>
<script>
import { ComboBox } from '@progress/kendo-vue-dropdowns';
import NoDataRender from './NoDataRender.vue';

export default {
    components: {
        'combobox': ComboBox,
         'custom': NoDataRender
    },
    data: function(){
        return {
           listNoDataRender: 'myTemplate',
        }
    }
};

</script>
