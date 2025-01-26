<template>
 <kendo-numerictextbox :format="'c0'" :value="12"></kendo-numerictextbox>
</template>
<script>
import { NumericTextBox } from '@progress/kendo-inputs-vue-wrapper';
export default {
  components: {
    'kendo-numerictextbox': NumericTextBox,
  },
   data: function() {
        return {
            number: 17
        }
    }
}
</script>
