<template>
    <kendo-notification ref="popupNotification"
                        @show="onShow"
                        @hide="onHide">
    </kendo-notification>

    <button id="showPopupNotification" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" @click="showPopupNotification">As a popup at bottom-right</button>
</template>
<script>
import { Notification } from '@progress/kendo-popups-vue-wrapper';

export default {
  components: {
    'kendo-notification': Notification
  },
 methods: {
            onShow: function (e) {
                console.log("Show")
            },
            onHide: function (e) {
                console.log("Hide")
            },
            showPopupNotification: function (e) {
                this.popupNotificationWidget.show('myMessage');
            }
        },
        mounted: function () {
            this.popupNotificationWidget = this.$refs.popupNotification.kendoWidget();
        }
}
</script>

