<template>
  <div>
    <NotificationGroup :style="position.topLeft">
      <Notifications> </Notifications>
    </NotificationGroup>

    <NotificationGroup :style="position.bottomLeft">
      <Notifications> </Notifications>
    </NotificationGroup>

    <NotificationGroup :style="position.topCenter">
      <Notifications> </Notifications>
    </NotificationGroup>

    <NotificationGroup :style="position.bottomCenter">
      <Notifications> </Notifications>
    </NotificationGroup>

    <NotificationGroup :style="position.topRight">
      <Notifications> </Notifications>
    </NotificationGroup>

    <NotificationGroup :style="position.bottomRight">
      <Notifications> </Notifications>
    </NotificationGroup>
  </div>
</template>

<script>
import { NotificationGroup } from '@progress/kendo-vue-notification';
import Notifications from './Notifications.vue';

export default {
  components: {
    NotificationGroup,
    Notifications,
  },
  data() {
    return {
      position: {
        topLeft: { top: 0, left: 0, alignItems: 'flex-start' },
        topCenter: { top: 0, left: '50%', transform: 'translateX(-50%)' },
        topRight: { top: 0, right: 0, alignItems: 'flex-end' },
        bottomLeft: { bottom: 0, left: 0, alignItems: 'flex-start' },
        bottomCenter: { bottom: 0, left: '50%', transform: 'translateX(-50%)' },
        bottomRight: { bottom: 0, right: 0, alignItems: 'flex-end' },
      },
    };
  },
};
</script>
