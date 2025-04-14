<template>
  <div>
    <KButton @click="onOpen('success')"> Show Success </KButton>
    &nbsp;
    <KButton @click="onOpen('error')"> Show Error </KButton>
    &nbsp;
    <KButton @click="onOpen('warning')"> Show Warning </KButton>
    &nbsp;
    <KButton @click="onOpen('info')">
      {{ (info ? 'Hide ' : 'Show ') + 'Info' }}
    </KButton>
    &nbsp;
    <KButton @click="onOpen('none')"> Show Default </KButton>
    <NotificationGroup
      :style="{
        right: 0,
        bottom: 0,
        alignItems: 'flex-start',
        flexWrap: 'wrap-reverse',
      }"
    >
      <Fade :appear="success">
        <Notification
          :type="{
            style: 'success',
            icon: true,
          }"
          :closable="true"
          @close="onClose('success')"
        >
          <span>Your data has been saved.</span>
        </Notification>
      </Fade>
      <Fade :appear="error">
        <Notification
          v-if="error"
          :type="{
            style: 'error',
            icon: true,
          }"
          :closable="true"
          @close="onClose('error')"
        >
          <span>Oops! Something went wrong ...</span>
        </Notification>
      </Fade>
      <Fade :appear="warning">
        <Notification
          v-if="warning"
          :type="{
            style: 'warning',
            icon: true,
          }"
          :closable="true"
          @close="onClose('warning')"
        >
          <span>Your password will expire in 2 days!</span>
        </Notification>
      </Fade>
      <Fade :appear="info">
        <Notification
          v-if="info"
          :type="{
            style: 'info',
            icon: true,
          }"
          :closable="true"
          @close="onClose('info')"
        >
          <span>You have 1 new message!</span>
        </Notification>
      </Fade>
      <Fade :appear="none">
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
          <span>Hanna Moos likes your status.</span>
        </Notification>
      </Fade>
    </NotificationGroup>
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>

<script>
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Fade } from '@progress/kendo-vue-animation';
import {
  Notification,
  NotificationGroup,
} from '@progress/kendo-vue-notification';
import Logger from './Logger.vue';

export default {
  components: {
    Fade,
    Notification,
    NotificationGroup,
    Logger,
    KButton,
  },
  computed: {
    eventsList() {
      return this.events;
    },
  },
  data() {
    return {
      events: [],
      success: false,
      error: false,
      warning: false,
      info: false,
      none: false,
    };
  },
  methods: {
    onOpen(flag) {
      this.events.unshift(flag + ' notification opened');
      this[flag] = true;
    },
    onClose(flag) {
      this.events.unshift(flag + ' notification closed');
      this[flag] = false;
    },
  },
};
</script>
