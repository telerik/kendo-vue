<template>
  <div>
      <barcode :value="2346722"
                    :type="'ean8'"
                    :width="280"
                    :height="100">
      </barcode>
      <barcode :value="barcodeValue"
                    :width="280"
                    :height="100">
      </barcode>
      <h4>Enter a number:</h4>
      <numerictextbox type="number"
                            title="number"
                            :value="100000"
                            :min="0"
                            :max="10000000000000"
                            v-model="barcodeValue"
                            :format="'n0'">
      </numerictextbox>
  </div>
</template>
<script>
import { Barcode } from '@progress/kendo-barcodes-vue-wrapper';
import { NumericTextBox } from '@progress/kendo-inputs-vue-wrapper';

export default {
  name: 'App',
  components: {
    'barcode': Barcode,
    'numerictextbox': NumericTextBox,
  },
  data: function() {
    return {
        barcodeValue: 1234
    }
  }
}
</script>
