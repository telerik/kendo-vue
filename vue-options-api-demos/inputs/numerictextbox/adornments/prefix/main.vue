<template>
    <div>
        <NumericTextBox :style="{ width: '230px' }" :inputPrefix="'prefix'">
            <template v-slot:prefix>
                <InputIcons />
            </template>
        </NumericTextBox>
    </div>
</template>
<script>
import { NumericTextBox } from '@progress/kendo-vue-inputs';
import InputIcons from './InputIcons.vue';

export default {
    components: {
        NumericTextBox,
        InputIcons
    }
};

</script>
