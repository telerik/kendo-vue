<template>
   <div>
            <kbutton @click="toggleDialog">{{visible ? 'Close': 'Open'}} Window</kbutton>
                <window v-if="visible" :title="'Status'" :initial-height="350"  
                    @close="toggleDialog"
                    @move="handleMove"
                    @resize="handleResize"
                    @stagechange="handleStageChange">
                </window>
             <br />
            <br />
            <div class="example-config">
                <h5>Event log</h5>
                <ul class="event-log" :style="{ textAlign: 'right' }">
                    <li v-for="(event, index) in events">
                        {{ event }}
                    </li>
                </ul>
            </div>
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
            visible: true,
            events: []
        };
    },
    methods: {
        toggleDialog () {
            this.log('Close event');
            this.visible = !this.visible;
        },
        handleMove () {
            this.log('move event');
        },
        handleResize () {
            this.log('resize event');
        },
        handleStageChange () {
            this.log('state change event');
        },
        log(event, arg) {
            const events = this.events;
            events.unshift(`${event} ${arg || ""}`);
        }
    }
};

</script>
