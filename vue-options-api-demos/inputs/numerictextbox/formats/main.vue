<template>
  <div>
        <h6>Decimal</h6>
        <numerictextbox :style="{ width: '230px' }"
            :format="'n2'"
            :default-value="value"
        ></numerictextbox>
        <h6>Percentage</h6>
        <numerictextbox :style="{ width: '230px' }"
            :format="'p'"
            :default-value="percentage"
            :min="0"
            :max="1"
            :step="0.1"
        ></numerictextbox>
            <h6>Currency</h6>
        <numerictextbox :style="{ width: '230px' }"
            :default-value="value"
            :format="'c2'"
            :min="0"
        ></numerictextbox>
        <h6>Currency with format options</h6>
        <numerictextbox :style="{ width: '230px' }"
            :default-value="value"
            :min="0"
            :format="formatOptions"
        ></numerictextbox>
    </div>
</template>
<script>
import { NumericTextBox } from '@progress/kendo-vue-inputs';

export default {
    components: {
        'numerictextbox': NumericTextBox
    },
     data: function(){
        return {
            value: 5,
            percentage: 0.7,
            formatOptions: {
                style: 'currency',
                currency: 'EUR',
                currencyDisplay: 'name'
            }
        };
    }
};

</script>
