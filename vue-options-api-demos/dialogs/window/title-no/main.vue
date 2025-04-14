<template>
    <div>
        <kbutton @click="toggleDialog">{{visible ? 'Close': 'Open'}} Window</kbutton>
            <window v-if="visible" @close="toggleDialog">             
        </window>
    </div>
</template>
<script>
import { Window } from '@progress/kendo-vue-dialogs';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
        'window': Window,
      'kbutton': Button
    },
    data: function () {
        return { 
            visible: true
        };
    },
    methods: {
        toggleDialog () {
            this.visible = !this.visible;
        }
    }
};

</script>
