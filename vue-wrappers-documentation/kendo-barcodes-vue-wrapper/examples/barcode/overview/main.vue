<template>
  <div>
      <h4>Barcode</h4>
    <barcode :value="'Mascarpone'"
                   :type="'code128'"
                   :width="280"
                   :height="100">
    </barcode>
    <h4>QRCode</h4>
    <qrcode :value="'geo:42.65049,23.37925,100'"
                  :error-collection="'H'"
                  :size="120"
                  :color="'#166a83'">
    </qrcode>
  </div>
</template>
<script>
import { Barcode, QRCode } from '@progress/kendo-barcodes-vue-wrapper';
export default {
  name: 'App',
  components: {
    'barcode': Barcode,
    'qrcode': QRCode
  }
}
</script>
