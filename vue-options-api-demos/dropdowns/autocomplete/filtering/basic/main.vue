<template>
    <div class="example-wrapper">
            <p>Type the name of a European country:</p>
            <autocomplete :style="{ width: '230px' }" 
                :data-items="countries" 
                :value="value"
                @change="onChange"
                :placeholder="'e.g. Austria'" ></autocomplete>
    </div>
</template>
<script>
import { AutoComplete } from '@progress/kendo-vue-dropdowns';
import { filterBy } from '@progress/kendo-data-query';

const source = [ "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan"];

export default {
    components: {
        'autocomplete': AutoComplete
    },
    data: function(){
        return {
            countries: source,
            value: ''
        }
    },
    methods: {
        onChange (event) {
            this.value = event.target.value;
            this.countries = this.filterData(event.target.value);
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
