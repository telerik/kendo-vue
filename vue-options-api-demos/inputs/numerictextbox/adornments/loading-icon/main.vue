<template>
    <div>
        <NumericTextBox :style="{ width: '230px' }" :show-loading-icon="true" />
    </div>
</template>
<script>
import { NumericTextBox } from '@progress/kendo-vue-inputs';

export default {
    components: {
        NumericTextBox
    }
};

</script>
