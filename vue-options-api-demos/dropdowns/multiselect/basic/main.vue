<template>
    <div class="example-wrapper">
            <div>
                <div>Favorite sports:</div>
                <multiselect
                    :style="{ width: '300px'}"
                    :data-items="sports"
                    v-model="value"
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
    }
};

</script>
