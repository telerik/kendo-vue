<template>
    <button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" @click="alert">kendo.alert</button>
    <button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" @click="confirm">kendo.confirm</button>
    <button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" @click="prompt">kendo.prompt</button>
</template>
<script>
import { Dialog, DialogAction } from '@progress/kendo-dialog-vue-wrapper';
export default {
  components: {
    'kendo-dialog': Dialog,
    'kendo-dialog-action': DialogAction
  },
 	methods: {
	  alert () {
	    kendo.alert("This is a Kendo UI Alert message.");
		},
		confirm () {
	    kendo.confirm("Are you sure that you want to proceed?").then(function () {
					kendo.alert("You chose the Ok action.");
			}, function () {
					kendo.alert("You chose to Cancel action.");
			});
		},
		prompt () {
	    kendo.prompt("Please, enter a arbitrary value:", "any value").then(function (data) {
					kendo.alert(kendo.format("The value that you entered is '{0}'", data));
			}, function () {
					kendo.alert("Cancel entering value.");
			})
	  }
	}
}
</script>
