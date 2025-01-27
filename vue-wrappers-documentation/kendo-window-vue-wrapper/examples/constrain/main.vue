<template>
<div>
  <div id="containment" style="width: 500px; height: 300px; position: absolute; border: 1px solid rgba(20,53,80,0.14)"></div>
    <window :width="'270px'"
                                :height="'120px'"
                                :title="'About Alvar Aalto'"
                                :visible="visible"
                                :actions="actions"
                                :draggable="draggable">
        <p>Alvar Aalto is one of the greatest names in modern architecture and design. </p>
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
    data: function (){
        return {
            visible: true,
            draggable: {
                containment: "#containment"
            },
            actions: [
                'Pin',
                'Maximize',
                'Close'
            ]
        }
    }
}
</script>
