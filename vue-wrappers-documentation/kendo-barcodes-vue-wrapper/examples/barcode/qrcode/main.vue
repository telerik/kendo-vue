<template>
<div>
    <qrcode :value="'geo:42.65049,23.37925,100'"
            :error-collection="'H'"
            :size="120"
            :encoding="'UTF_8'"
            :color="'#166a83'">
    </qrcode>
    <qrcode :value="qrCodeValue" :size="200" :encoding="'UTF_8'"></qrcode>
    <input v-model="qrCodeValue"/>
  </div>
</template>
<script>
import { QRCode } from '@progress/kendo-barcodes-vue-wrapper';
export default {
  name: 'App',
  components: {
    'qrcode': QRCode
  },      
  data: function() {
        return {
            qrCodeValue: 'Some Text'
        }
    }
}
</script>
