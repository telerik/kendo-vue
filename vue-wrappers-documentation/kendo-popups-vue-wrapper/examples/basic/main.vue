<template>
    <kendo-notification ref="popupNotification"></kendo-notification>
    <button id="showPopupNotification" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" @click="showPopupNotification">As a popup at bottom-right</button>
    <br/>
    <br/>
    <kendo-tooltip id="tooltip"
                   title="Tooltip content"
                   :position="'bottom'"
                   style="width:150px">
        Hover me
    </kendo-tooltip>
</template>
<script>
import { Notification, Tooltip } from '@progress/kendo-popups-vue-wrapper';

export default {
  components: {
    'kendo-notification': Notification,
    'kendo-tooltip': Tooltip
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

