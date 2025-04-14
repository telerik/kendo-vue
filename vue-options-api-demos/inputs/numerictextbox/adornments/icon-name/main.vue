<template>
    <div>
        <NumericTextBox :style="{ width: '230px' }" :icon-name="'gear'" />
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
