<template>
  <div>
        <maskedtextbox :style="{ width: '230px' }" :mask="mask" :value="value" :readonly="true" ></maskedtextbox>
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
            mask: 'aaaaaaaaaaaaaaaaa',
            value: 'Andrew Green'
        };
    }
};

</script>
