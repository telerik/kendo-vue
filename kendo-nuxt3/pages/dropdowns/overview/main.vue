<template>
   <div class="example-wrapper">
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
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
            this.countries = filterBy(countries.slice(), event.filter);
        }
    }
};

</script>