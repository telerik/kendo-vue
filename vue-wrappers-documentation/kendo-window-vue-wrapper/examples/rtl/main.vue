<template>
<div>
 <div class="k-rtl">
	<window ref="window1"
                  :width="'500px'"
				  :title="'About Alvar Aalto'"
				  :visible="visible"
				  style="display:none"
                  v-on:close="onClose">
		<p>Alvar Aalto is one of the greatest names in modern architecture and design. Glassblowers at the iittala factory still meticulously handcraft the legendary vases that are variations on one theme, fluid organic shapes that let the end user decide the use. Interpretations of the shape in new colors and materials add to the growing Alvar Aalto Collection that remains true to his original design.</p>
		<p>Born Hugo Alvar Henrik Aalto (February 3, 1898 - May 11, 1976) in Kuortane, Finland, was noted for his humanistic approach to modernism. He studied architecture at the Helsinki University of Technology from 1916 to 1921. In 1924 he married architect Aino Marsio.</p>
		<p>Alvar Aalto was one of the first and most influential architects of the Scandinavian modern movement, and a member of the Congres Internationaux d'Architecture Moderne. Major architectural works include the Finlandia Hall in Helsinki, Finland, and the campus of Helsinki University of Technology.</p>
	</window>
    </div>
    <span id="undo" ref="undo" style="display:none" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base hidden-on-narrow" v-on:click="openWindow">Click here to open the window.</span>
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
			visible: true
		}
	},
    methods: {
        onClose: function (ev) {
            $(this.$refs.undo).fadeIn();
        },
        openWindow: function (ev) {
            var win = this.$refs.window1.kendoWidget();
            win.open();
            $(this.$refs.undo).fadeOut();
        }
    }
}
</script>
