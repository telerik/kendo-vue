<template>
   <div class="example-wrapper">
            <div>
                <div>Favorite sports: {{value}}</div>
                <multiselect 
                    :style="{ width: '300px'}"
                    :data-items="sports"
                    :value="value"
                    @change="handleChange"
                    :allow-custom="true"
                ></multiselect>
            </div>
        </div>
</template>
<script>
import { MultiSelect } from '@progress/kendo-vue-dropdowns';

export default {
    components: {
        'multiselect': MultiSelect
    },
    data () {
        return {
            sports: [ 'Baseball', 'Basketball', 'Cricket', 'Field Hockey',
    'Football', 'Table Tennis', 'Tennis', 'Volleyball' ],
            value: []
        };
    },
    methods: {
        handleChange (event) {
            const values = event.target.value;
            const lastItem = values[values.length - 1];
    
            if (lastItem) {
                values.pop();
                const sameItem = values.find(value => value === lastItem);
                if (sameItem === undefined) {
                    values.push(lastItem);
                }
            }
    
            this.value = values;
        }
    }
};

</script>
