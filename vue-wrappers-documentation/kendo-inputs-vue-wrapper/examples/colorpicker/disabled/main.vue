<template>
<button v-on:click="toggleColorPicker" v-text="buttonText" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"></button>
	<br/><br/>
    <kendo-colorpicker ref="colorPicker" :disabled="true"></kendo-colorpicker>
</template>
<script>
import { ColorPicker } from '@progress/kendo-inputs-vue-wrapper';
export default {
  components: {
    'kendo-colorpicker': ColorPicker
  },
  data () {
        return {
            disabledState: true
        }
    },
	computed: {
		buttonText () {
			return this.disabledState ? 'Enable' : 'Disable';
		}
	},
	methods: {
		toggleColorPicker () {
			var colorPicker = this.$refs.colorPicker.kendoWidget();
			this.disabledState = !this.disabledState
			colorPicker.enable(!this.disabledState);
		}
	}
}
</script>
