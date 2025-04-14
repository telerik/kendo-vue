<template>
  <div>
        <numerictextbox :style="{ width: '230px' }"
            :default-value="5"
        >
        </numerictextbox> 
    </div>
</template>
<script>
import { NumericTextBox } from '@progress/kendo-vue-inputs';

export default {
    components: {
        'numerictextbox': NumericTextBox
    }
};

</script>
