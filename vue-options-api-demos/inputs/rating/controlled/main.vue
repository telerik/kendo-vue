<template>
    <Rating :value="value" @change="handleValueChange" />
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
