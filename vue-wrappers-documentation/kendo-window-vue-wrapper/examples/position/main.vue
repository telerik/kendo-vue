<template>
<div>
	<window ref="windowRef"
				  :width="'300px'"
				  :title="'Window title'"
				  style="display:none">
		<h4>Window content</h4>
	</window>

	<span class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" @click="onClick">Click here to open the window</span>
</div>
</template>

<script>
import { Window } from '@progress/kendo-window-vue-wrapper';

export default {
    name: 'App',
    components: {
        'window': Window,
    },
	methods: {
		onClick (e) {
			var window = this.$refs.windowRef.kendoWidget();
			window.center().open();
		}
	}
}
</script>
