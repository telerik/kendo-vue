<template>
     <div>
            <kbutton @click="setMinimize">Minimize</kbutton>&nbsp;
            <kbutton @click="setFullscreen">Full screen</kbutton>&nbsp;
            <kbutton @click="setDefault">Default</kbutton>
            <window :title="'Status'" :stage="windowStage" @stagechange="handleStageChange">
                <kbutton @click="setMinimize">Minimize</kbutton>&nbsp;
                <kbutton @click="setFullscreen">Full screen</kbutton>&nbsp;
                <kbutton @click="setDefault">Default</kbutton>
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
            windowStage: 'MINIMIZED'
        };
    },
    methods: {
        setMinimize ()  {
            this.windowStage = 'MINIMIZED';
        },
        setFullscreen () {
            this.windowStage = 'FULLSCREEN';
        },
        setDefault () {
            this.windowStage = 'DEFAULT';
        },
        handleStageChange (e) {
            this.windowStage = e.state;
        }
    }
};

</script>
