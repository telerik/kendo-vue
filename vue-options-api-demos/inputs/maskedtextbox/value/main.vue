<template>
  <div>
        <maskedtextbox :style="{ width: '230px' }" :mask="mask" :value="value" @change="onChange" ></maskedtextbox>
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
            value: '5748-1570-0019-4334'
        };
    },
    methods: {
        onChange: function(event){
            const value = event.target.value;
            if (this.value !== value) {
                this.value = value;
            }
        }
    }
};

</script>
