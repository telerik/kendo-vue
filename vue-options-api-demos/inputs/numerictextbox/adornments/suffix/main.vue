<template>
    <NumericTextBox :style="{ width: '230px' }" :inputSuffix="'suffix'">
        <template v-slot:suffix>
            <span class="k-input-icon k-icon k-i-gear"></span>
        </template>
    </NumericTextBox>
</template>
<script>
import { NumericTextBox } from '@progress/kendo-vue-inputs';

export default {
    components: {
        NumericTextBox
    }
};

</script>
