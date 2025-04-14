<template>
   <div>
        <kbutton @click="toggleDialog">{{visible ? 'Close': 'Open'}} Window</kbutton>
        <window v-if="visible" :title-render="titleRender" @close="toggleDialog" >
            <template v-slot:myTemplate>
                <custom />
            </template>
        </window>
    </div>
</template>
<script>
import { Window } from '@progress/kendo-vue-dialogs';
import { Button } from '@progress/kendo-vue-buttons';
import Title from './Title.vue';

export default {
    components: {
        'window': Window,
        'custom': Title,
      'kbutton': Button
    },
    data: function () {
        return {
            visible: true,
            titleRender: 'myTemplate'
        };
    },
    methods: {
        toggleDialog () {
            this.visible = !this.visible;
        }
    }
};

</script>
