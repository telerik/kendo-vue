<template>
    <div class="k-rtl">
  <kendo-notification ref="notification"></kendo-notification>
  <button id="showNotification" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" @click="showNotification">Show notification</button>
</div>
</template>
<script>
import { Notification } from '@progress/kendo-popups-vue-wrapper';

export default {
  components: {
    'kendo-notification': Notification
  },
  methods: {
        showNotification: function (e) {
            this.notification.show('myMessage');
        }
    },
    mounted: function () {
        this.notification = this.$refs.notification.kendoWidget();
    }
}
</script>

