<template>
<div>
	<window :width="'300px'"
            :title="'Window title'"
            :modal="true"
            :resizable="false"
            :pinned="false"
            :position-top="100"
            :position-left="100"
            :actions="actions">
		<h4>Window content</h4>
	</window>
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
				'Close'
			]
		}
	}
}
</script>
