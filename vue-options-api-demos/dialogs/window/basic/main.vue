<template>
 <div>
            <kbutton @click="toggleDialog">{{visible ? 'Close': 'Open'}} Window</kbutton>
                <window v-if="visible" :title="'Status'" @close="toggleDialog" :initial-height="350">
                    <form class="k-form">
                        <fieldset>
                            <legend>User Details</legend>

                            <label class="k-form-field">
                                <span>First Name</span>
                                <kinput placeholder="Your Name" />
                            </label>
                            <label class="k-form-field">
                                <span>Last Name</span>
                                <kinput placeholder="Your Last Name" />
                            </label>
                        </fieldset>

                        <div class="text-right">
                            <kbutton @click="toggleDialog">Cancel</kbutton>
                            <kbutton :theme-color="'primary'" @click="toggleDialog">Submit</kbutton>
                        </div>
                    </form>
            </window>
        </div>
</template>
<script>
import { Window } from '@progress/kendo-vue-dialogs';
import { Button } from '@progress/kendo-vue-buttons';
import { Input } from '@progress/kendo-vue-inputs';

export default {
    components: {
        'window': Window,
      'kbutton': Button,
       'kinput': Input
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
