<template>
   <div class="example-wrapper">
            <p>Type the name of a European country:</p>
            <autocomplete :style="{ width: '230px' }" 
                :data-items="countries" 
                :value="value"
                @change="onChange"
                :loading="loading" ></autocomplete>
    </div>
</template>
<script>
import { AutoComplete } from '@progress/kendo-vue-dropdowns';
import { filterBy } from '@progress/kendo-data-query';

const source = [ "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan"];
const delay = 500;

export default {
    components: {
        'autocomplete': AutoComplete
    },
    data: function(){
        return {
            countries: source,
            value: '',
            loading: false
        }
    },
    methods: {
        onChange (event) {
            const value = event.target.value;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.countries = this.filterData(value);
                this.loading = false;
            }, delay);

            this.value = value;
            this.loading = true;
        },
        filterData(value) {
            const data = source;
            const filter = {
                value: value,
                operator: 'startswith',
                ignoreCase: true
            };
            return value ? filterBy(data, filter) : data;
        }
    }
};

</script>
