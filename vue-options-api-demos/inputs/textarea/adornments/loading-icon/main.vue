<template>
    <div>
        <TextArea :style="{ width: '230px' }" :show-loading-icon="true" :rows="4" />
    </div>
</template>
<script>
import { TextArea } from '@progress/kendo-vue-inputs';

export default {
    components: {
        TextArea
    }
};

</script>
