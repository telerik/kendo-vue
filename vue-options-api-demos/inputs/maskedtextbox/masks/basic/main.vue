<template>
    <div>
        <p>Enter phone number</p>
        <maskedtextbox :style="{ width: '230px' }" :mask="mask" :default-value="defaultValue" ></maskedtextbox>
    </div>
</template>
<script>
import { MaskedTextBox } from '@progress/kendo-vue-inputs';

export default {
    components: {
        'maskedtextbox': MaskedTextBox
    },
    data: function(){
        return {
            mask: '0000-0000-0000-0000',
            defaultValue: '5748-1570-0019-4334'
        };
    }
};

</script>
