<template>
    <div class="example-wrapper">
            <div>
                <multiselect
                    :style="{ width: '400px'}"
                    :data-items="countries"
                    :list-no-data-render="listNoDataRender"
                >
                    <template v-slot:myTemplate="{}">
                        <custom />
                    </template>
                </multiselect>
            </div>
        </div>
</template>
<script>
import { MultiSelect } from '@progress/kendo-vue-dropdowns';
import NoDataRender from './NoDataRender.vue';

export default {
  components: {
        'multiselect': MultiSelect,
        'custom': NoDataRender
    },
    data () {
        return {
            countries: [],
            listNoDataRender: 'myTemplate'
        };
    }
};

</script>
