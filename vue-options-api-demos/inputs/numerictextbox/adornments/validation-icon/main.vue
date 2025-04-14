<template>
    <div>
        Valid Input Icon:
        <br />
        <NumericTextBox :style="{ width: '230px' }" :show-validation-icon="true" :input-class="'k-valid'" />
        <br />
        <br />
        Invalid Input Icon:
        <br />
        <NumericTextBox :style="{ width: '230px' }" :show-validation-icon="true" :valid="false" />
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
