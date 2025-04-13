<template>
    <div>
        <NumericTextBox :style="{ width: '230px' }" :inputPrefix="'prefix'">
            <template v-slot:prefix>
                <div>
                    &nbsp; &nbsp; &nbsp;
                    <InputSeparator />
                </div>
            </template>
        </NumericTextBox>
    </div>
</template>
<script>
import { NumericTextBox, InputSeparator } from '@progress/kendo-vue-inputs';

export default {
    components: {
        NumericTextBox, InputSeparator
    }
};

</script>
