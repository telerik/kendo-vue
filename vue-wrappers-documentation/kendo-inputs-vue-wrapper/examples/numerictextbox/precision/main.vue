<template>
   <kendo-numerictextbox :decimals="3" :value="4.44132141">
	</kendo-numerictextbox>
</template>
<script>
import { NumericTextBox } from '@progress/kendo-inputs-vue-wrapper';
export default {
  components: {
    'kendo-numerictextbox': NumericTextBox,
  }
}
</script>
