<template>
    <Rating :defaultValue="2" :max="15" />
</template>

<script>
import { Rating } from '@progress/kendo-vue-inputs';

export default {
    components: {
        Rating,
    },
};
</script>