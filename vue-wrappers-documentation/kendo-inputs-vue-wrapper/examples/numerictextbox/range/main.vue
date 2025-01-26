<template>
 <kendo-numerictextbox :min="0"
							:max="10">
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
