<template>
   <div class="example-wrapper">
            <div>
                <multiselect 
                    :style="{ width: '300px'}"
                    @filterchange="onFilterChange"
                    :filterable="true"
                    :data-items="countries"
                    :loading="loading"
                ></multiselect>
            </div>
        </div>
</template>
<script>
import { MultiSelect } from '@progress/kendo-vue-dropdowns';
import countries from './countries';
import { filterBy } from '@progress/kendo-data-query';
const delay = 500;


export default {
    components: {
        'multiselect': MultiSelect
    },
    data () {
        return {
            countries: countries.slice(),
            loading: false
        };
    },
    methods: {
        onFilterChange(event) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.countries = filterBy(countries.slice(), event.filter);
                this.loading = false;
            }, delay);
    
            this.loading = true;  
        }
    }
};

</script>
