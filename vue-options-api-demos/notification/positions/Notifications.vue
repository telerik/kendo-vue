<template>
  <Notification :key="'success'" :type="{ style: 'success', icon: true }">
    <span> {{ content }}</span>
  </Notification>
  <Notification :key="'info'" :type="{ style: 'info' }">
    <span>{{ content }}</span>
  </Notification>
</template>
<script>
import { Notification } from '@progress/kendo-vue-notification';

export default {
  components: {
    Notification,
  },
  data() {
    return {
      content: 'Your data has been saved.',
    };
  },
};
</script>
