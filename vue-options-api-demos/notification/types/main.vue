<template>
  <div>
    <KButton @click="onToggle('none')">
      {{ (none ? 'Hide ' : 'Show ') + 'Unstyled' }}
    </KButton>
    &nbsp;
    <KButton @click="onToggle('success')">
      {{ (success ? 'Hide ' : 'Show ') + 'Success' }}
    </KButton>
    &nbsp;
    <KButton @click="onToggle('error')">
      {{ (error ? 'Hide ' : 'Show ') + 'Error' }}
    </KButton>
    &nbsp;
    <KButton @click="onToggle('warning')">
      {{ (warning ? 'Hide ' : 'Show ') + 'Warning' }}
    </KButton>
    &nbsp;
    <KButton @click="onToggle('info')">
      {{ (info ? 'Hide ' : 'Show ') + 'Info' }}
    </KButton>

    <NotificationGroup
      :style="{
        right: 0,
        bottom: 0,
        alignItems: 'flex-start',
        flexWrap: 'wrap-reverse',
      }"
    >
      <Notification
        v-if="none"
        :type="{
          style: 'none',
          icon: false,
        }"
        :closable="true"
        @close="onClose('none')"
        :style="{
          overflow: 'visible',
        }"
      >
        <span> Default Notification .</span>
      </Notification>
      <Notification
        v-if="success"
        :type="{
          style: 'success',
          icon: true,
        }"
        :closable="true"
        @close="onClose('success')"
      >
        <span>Success Notification</span>
      </Notification>
      <Notification
        v-if="error"
        :type="{
          style: 'error',
          icon: true,
        }"
        :closable="true"
        @close="onClose('error')"
      >
        <span> Error Notification </span>
      </Notification>
      <Notification
        v-if="warning"
        :type="{
          style: 'warning',
          icon: true,
        }"
        :closable="true"
        @close="onClose('warning')"
      >
        <span> Warning Notification </span>
      </Notification>
      <Notification
        v-if="info"
        :type="{
          style: 'info',
          icon: true,
        }"
        :closable="true"
        @close="onClose('info')"
      >
        <span> Info Notification </span>
      </Notification>
    </NotificationGroup>
  </div>
</template>

<script>
import { Button as KButton } from '@progress/kendo-vue-buttons';
import {
  Notification,
  NotificationGroup,
} from '@progress/kendo-vue-notification';

export default {
  components: {
    Notification,
    NotificationGroup,
    KButton,
  },
  data() {
    return {
      success: false,
      error: false,
      warning: false,
      info: false,
      none: false,
    };
  },
  methods: {
    onToggle(flag) {
      this[flag] = !this[flag];
    },
    onClose(flag) {
      this[flag] = false;
    },
  },
};
</script>
