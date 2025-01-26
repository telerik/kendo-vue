<template>
 <kendo-numerictextbox v-model.number="number"
						  :decimals="3"
						  :format="'c0'"
						  :min="0"
						  :max="1000"
						  :round="false"
						  :spinners="true">
	</kendo-numerictextbox>
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
