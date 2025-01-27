<template>
 <kendo-numerictextbox :decimals="2"
						  :round="false"
						  :value="4.999">
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
