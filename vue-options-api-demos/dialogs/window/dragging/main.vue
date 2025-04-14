<template>
    <div>
            <kbutton @click="toggleDialog">{{visible ? 'Close': 'Open'}} Window</kbutton>
            <input type="checkbox" id="dragChkBox" class="k-checkbox k-checkbox-md k-rounded-md" v-model="isDraggable"/>
            <label class="k-checkbox-label" for="dragChkBox">Enable/Disable dragging</label>
            <window v-if="visible" :title="'Drag me'" :draggable="isDraggable" @close="toggleDialog" >
                <span v-if="isDraggable">
                    I can be dragged!
                </span>
                <span v-else>
                    I cannot be dragged!
                </span>
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
            visible: true,
            isDraggable: false
        };
    },
    methods: {
        toggleDialog () {
            this.visible = !this.visible;
        }
    }
};

</script>
