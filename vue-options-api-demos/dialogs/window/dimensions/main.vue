<template>
   <div>
            <kbutton @click="toggleDialog">{{visible ? 'Close': 'Open'}} Window</kbutton>
                <window v-if="visible" :title="'Arm Chair'" @close="toggleDialog" :initial-height="400" :initial-width="450">
                    <h4>Armchair 402</h4>
                    <div class="armchair"><img :src="armchairImage" alt="Armchair 402" /></div>
                    <p>Alvar Aalto is one of the greatest names in modern architecture and design. Glassblowers at the iittala factory still meticulously handcraft the legendary vases that are variations on one theme, fluid organic shapes that let the end user decide the use. Interpretations of the shape in new colors and materials add to the growing Alvar Aalto Collection that remains true to his original design.</p>
                    <p>Born Hugo Alvar Henrik Aalto (February 3, 1898 - May 11, 1976) in Kuortane, Finland, was noted for his humanistic approach to modernism. He studied architecture at the Helsinki University of Technology from 1916 to 1921. In 1924 he married architect Aino Marsio.</p>
                    <p>Alvar Aalto was one of the first and most influential architects of the Scandinavian modern movement, and a member of the Congres Internationaux d'Architecture Moderne. Major architectural works include the Finlandia Hall in Helsinki, Finland, and the campus of Helsinki University of Technology.</p>
                    <p>Source: <a href="https://www.aalto.com/about-alvar-aalto.html" title="About Alvar Aalto">www.aalto.com</a></p>
            </window>
        </div>
</template>
<script>
import { Window } from '@progress/kendo-vue-dialogs';
import { Button } from '@progress/kendo-vue-buttons';

const armchairImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dialogs/armchair-402.png';

export default {
    components: {
        'window': Window,
      'kbutton': Button
    },
    data: function () {
        return {
            visible: true,
            armchairImage
        };
    },
    methods: {
        toggleDialog () {
            this.visible = !this.visible;
        }
    }
};

</script>
