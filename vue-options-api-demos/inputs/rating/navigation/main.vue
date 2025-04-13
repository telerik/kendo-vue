<template>
    <Rating :defaultValue="1.5" :precision="'half'" />
</template>

<script>
import { Rating } from '@progress/kendo-vue-inputs';

export default {
    components: {
        Rating,
    },
};
</script>