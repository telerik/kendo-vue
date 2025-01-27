<template>
<div>
	<window :width="'300px'"
				  :title="'Window title'"
				  :visible="visible"
				  style="display:none">
		<h4>Window content</h4>
	</window></div>
</template>

<script>
import { Window } from '@progress/kendo-window-vue-wrapper';

export default {
    name: 'App',
    components: {
        'window': Window,
    },
    data () {
		return {
			visible: true
		}
	}
}
</script>
