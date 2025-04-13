<template>
    <Rating
        :defaultValue="2"
        :svgIcon="heartIcon"
        :svgIconOutline="heartIcon"
    />
</template>

<script>
import { Rating } from '@progress/kendo-vue-inputs';
import { heartIcon } from "@progress/kendo-svg-icons";

export default {
    components: {
        Rating,
    },
    data( ) {
        return {
            heartIcon: heartIcon
        }
    }
};
</script>