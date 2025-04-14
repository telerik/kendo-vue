<template>
  <div class="example-wrapper">
            <p>Type 'Aus':</p>
            <autocomplete :style="{ width: '230px' }" 
                :data-items="countries" 
                :value="value"
                @change="onChange"
                :opened="opened"
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
            value: '',
            opened: false
        }
    },
    methods: {
        onChange (e) {
            const value = e.target.value;
            const stateData = value.length < 3 ?
                { data: source, opened: false } :
                { data: this.filterData(value), opened: true };

            const eventType = e.event.type;
            const valueSelected = eventType === 'click' ||
                (eventType === 'keydown' && e.event.keyCode === 13);

            if (valueSelected && stateData.data.includes(value)) {
                stateData.opened = false;
            }

            this.value = value;
            this.countries = stateData.data;
            this.opened = stateData.opened;
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
