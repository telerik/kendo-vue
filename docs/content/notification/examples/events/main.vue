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
    <Logger :title="'Events list'" :events="events" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Fade } from '@progress/kendo-vue-animation';
import {
    Notification,
    NotificationGroup,
} from '@progress/kendo-vue-notification';
import Logger from './Logger.vue';

const events = ref([]);
const success = ref(false);
const error = ref(false);
const warning = ref(false);
const info = ref(false);
const none = ref(false);

function onOpen(flag) {
    events.value.unshift(`${flag} notification opened`);
    switch (flag) {
        case 'success':
            success.value = true;
            break;
        case 'error':
            error.value = true;
            break;
        case 'warning':
            warning.value = true;
            break;
        case 'info':
            info.value = true;
            break;
        case 'none':
            none.value = true;
            break;
    }
}

function onClose(flag) {
    events.value.unshift(`${flag} notification closed`);
    switch (flag) {
        case 'success':
            success.value = false;
            break;
        case 'error':
            error.value = false;
            break;
        case 'warning':
            warning.value = false;
            break;
        case 'info':
            info.value = false;
            break;
        case 'none':
            none.value = false;
            break;
    }
}
</script>
