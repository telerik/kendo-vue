<template>
     <kendo-notification ref="notification"
                      :templates="templates">
  </kendo-notification>
  <button id="showNotification" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" @click="showNotification">E-mail</button>
</template>
<script>
import { Notification } from '@progress/kendo-popups-vue-wrapper';

export default {
  components: {
    'kendo-notification': Notification
  },
  data () {
      return {
        templates: [{
            type: "info",
            template: `<div class="new-mail">
                <img src="https://demos.telerik.com/kendo-ui/content/web/notification/envelope.png" />
                <h3>#= title #</h3>
                <p>#= message #</p>
            </div>`
        }]
        };
  },
    methods: {
      showNotification () {
        this.notification.show({
            title: "New E-mail",
            message: "You have 1 new mail message!"
        });
      }
    },
    mounted: function () {
        this.notification = this.$refs.notification.kendoWidget();
    }
}
</script>
<style>
  .new-mail {
      width: 300px;
      height: 100px;
  }
  .new-mail h3 {
      font-size: 1em;
      padding: 32px 10px 5px;
  }
  .new-mail img {
      float: left;
      margin: 30px 15px 30px 30px;
  }
</style>

