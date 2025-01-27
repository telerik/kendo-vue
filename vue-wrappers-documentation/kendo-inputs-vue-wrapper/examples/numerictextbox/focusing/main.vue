<template>
<label for="numericTextBox" v-on:click="onClick">Number: </label>
    <kendo-numerictextbox ref="numericTextBox" :decimals="3" :value="4.41">
	  </kendo-numerictextbox>
</template>
<script>
import { NumericTextBox } from '@progress/kendo-inputs-vue-wrapper';
export default {
  components: {
    'kendo-numerictextbox': NumericTextBox,
  },
   methods: {
      onClick () {
        this.numericTextBox.focus();
      }
    },
    mounted: function () {
        this.numericTextBox = this.$refs.numericTextBox.kendoWidget();
    }
}
</script>
