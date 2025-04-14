<template>
    <div class="example-wrapper">
            <div>
                <multiselect 
                    :style="{ width: '300px'}"
                    @filterchange="onFilterChange"
                    :filterable="true"
                    :data-items="countries"
                ></multiselect>
            </div>
        </div>
</template>
<script>
import { MultiSelect } from '@progress/kendo-vue-dropdowns';
import { filterBy } from '@progress/kendo-data-query';
import countries from './countries';

export default {
    components: {
        'multiselect': MultiSelect
    },
    data () {
        return {
            countries: countries.slice()
        };
    },
    methods: {
          onFilterChange(event) {
            const filter = event.filter;
            const allData = countries.slice();
            const newData = filter.value.length > 3 ?
                filterBy(allData, filter) : allData;
    
            this.countries = newData;
        }
    }
};

</script>
