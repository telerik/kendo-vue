<template>
   <div >
    <kendo-notification ref="staticNotification" append-to="#appendto"></kendo-notification>

    <button id="showStaticNotification" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" @click="showStaticNotification">Static in the panel below</button>
</div>
<div id="appendto" class="demo-section"></div>
</template>
<script>
import { Notification } from '@progress/kendo-popups-vue-wrapper';

export default {
  components: {
    'kendo-notification': Notification
  },
   methods: {
        showStaticNotification: function() {
            var d = new Date();
            this.staticNotificationWidget.show(kendo.toString(d, 'HH:MM:ss'));
        }
    },
    mounted: function () {
        this.staticNotificationWidget = this.$refs.staticNotification.kendoWidget();
    }
}
</script>

