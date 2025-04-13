<template>
    <div>
        <div :style="{ margin: '15px' }" >
            <h4>Item Precision Mode</h4>
            <Rating :precision="'item'"/>
        </div>
        <div :style="{ margin: '15px' }" >
            <h4>Half Precision Mode</h4>
            <Rating :precision="'half'"/>
        </div>
    </div>
</template>

<script>
import { Rating } from '@progress/kendo-vue-inputs';

export default {
    components: {
        Rating,
    },
};
</script>