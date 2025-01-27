<template>
<div>
	<window :width="'600px'"
				:title="'Async Window Content'"
				content="../content/web/window/ajax/ajaxContent.html">
	</window>
</div>
</template>

<script>
import { Window } from '@progress/kendo-window-vue-wrapper';

export default {
    name: 'App',
    components: {
        'window': Window,
    }
}
</script>
