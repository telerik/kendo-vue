<template>
    <div>
            <kbutton @click="toggleDialog">{{visible ? 'Close': 'Open'}} Window</kbutton>
            <input type="checkbox" id="resizeChkBox" class="k-checkbox k-checkbox-md k-rounded-md" v-model="isResizable"/>
            <label class="k-checkbox-label" for="resizeChkBox">Enable/Disable resizing</label>
            <window v-if="visible" :title="'Resize me'" :resizable="isResizable" @close="toggleDialog" >
                <span v-if="isResizable">
                    I can be resized!
                </span>
                <span v-else>
                    I cannot be resized!
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
            isResizable: false
        };
    },
    methods: {
        toggleDialog () {
            this.visible = !this.visible;
        }
    }
};

</script>
