<template>
<div>
	<window :actions="actions"></window>
</div>
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
			actions: [
				'Pin',
				'Minimize',
				'Maximize',
				'Close',
				'Custom'
			]
		}
	}
}
</script>
