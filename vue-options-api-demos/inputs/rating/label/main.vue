<template>
    <Rating
        :value="value"
        :defaultValue="value"
        :precision="'half'"
        :label="value ? value + ' out of 5' : 'please select value'"
        @change="handleValueChange"
    />
</template>

<script>
import { Rating } from '@progress/kendo-vue-inputs';

export default {
    components: {
        Rating,
    },
    data: function(){
        return {
            value: 2
        }
    },
    methods: {
        handleValueChange (event) {
            this.value = event.value;
        }
    }
};
</script>