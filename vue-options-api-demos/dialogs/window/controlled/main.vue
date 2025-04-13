<template>
  <div>
            <kbutton @click="toggleDialog">{{visible ? 'Close': 'Open'}} Window</kbutton>
                &nbsp;
            <kbutton @click="handleSetWidth200">Set width to 200</kbutton>
            &nbsp;
            <kbutton @click="handleSetWidth500">Set width to 500</kbutton>
            <window v-if="visible"
                    :title="'Status'"
                    :left="left"
                    :top="top"
                    :width="width"
                    :height="height"
                    @move="handleMove"
                    @resize="handleResize"
                    @close="toggleDialog"
            >
                Controlled mode
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
            left: 300,
            top: 100,
            width: 200,
            height: 200,
            visible: true
        };
    },
    methods: {
        handleMove (event) {
            this.left = event.left;
            this.top = event.top;
        },
        handleResize (event) {
            this.left = event.left;
            this.top = event.top;
            this.width = event.width;
            this.height = event.height;
        },
        handleSetWidth200 ()  {
            this.width = 200;
        },
        handleSetWidth500 () {
            this.width = 300;
        },
        toggleDialog () {
            this.visible = !this.visible;
        }
    }
};

</script>
