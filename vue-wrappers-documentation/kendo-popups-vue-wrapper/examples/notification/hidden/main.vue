<template>
      <kendo-notification ref="popupNotification"
        :allow-hide-after="2000"
        :auto-hide-after="7000"
        :button="true"
        :hide-on-click="true">
    </kendo-notification>
</template>
<script>
import { Notification } from '@progress/kendo-popups-vue-wrapper';

export default {
  components: {
    'kendo-notification': Notification
  },
   methods: {
        showPopupNotification: function (e) {
            this.popupNotificationWidget.show('myMessage');
        }
    },
    mounted: function () {
        this.popupNotificationWidget = this.$refs.popupNotification.kendoWidget();
    }
}
</script>

