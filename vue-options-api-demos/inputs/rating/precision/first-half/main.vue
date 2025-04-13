<template>
    <div :style="{ margin: '15px' }" >
        <h4>Half Precision Mode First-item Half</h4>
        <Rating
            :min="0.5"
            :max="3"
            :precision="'half'"
        />
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