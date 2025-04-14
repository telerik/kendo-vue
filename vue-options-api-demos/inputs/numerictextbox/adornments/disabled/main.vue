<template>
    <div>
        <NumericTextBox :style="{ width: '230px' }" :disabled="true" :inputIconName="'gear'" :showValidationIcon="true"
            :inputPrefix="'prefix'" :inputSuffix="'suffix'" :showClearButton="true">
            <template v-slot:prefix>
                <InputIcons />
            </template>
            <template v-slot:suffix>
                <span class="k-input-icon k-icon k-i-gear"></span>
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
