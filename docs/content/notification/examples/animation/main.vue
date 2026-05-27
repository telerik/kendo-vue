<template>
  <div>
    <KButton @click="onToggle('success')">
      {{ (success ? 'Hide ' : 'Show ') + 'Success with Slide Animation' }}
    </KButton>
    <br />
    <br />
    <KButton @click="onToggle('error')">
      {{ (error ? 'Hide ' : 'Show ') + 'Error with Expand Animation' }}
    </KButton>
    <br />
    <br />
    <KButton @click="onToggle('warning')">
      {{ (warning ? 'Hide ' : 'Show ') + 'Warning with Reveal Animation' }}
    </KButton>
    <br />
    <br />
    <KButton @click="onToggle('info')">
      {{ (info ? 'Hide ' : 'Show ') + 'Info' }}
    </KButton>
    <br />
    <br />
    <KButton @click="onToggle('none')">
      {{ (none ? 'Hide ' : 'Show ') + 'Unstyled with Push Animation' }}
    </KButton>
    <NotificationGroup
      :style="{
        right: 0,
        bottom: 0,
        alignItems: 'flex-start',
        flexWrap: 'wrap-reverse',
      }"
    >
      <Slide :appear="success">
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
      </Slide>
      <Expand :appear="error">
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
      </Expand>
      <Reveal :appear="warning">
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
      </Reveal>
      <Zoom :appear="info">
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
      </Zoom>
      <Push :appear="none">
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
      </Push>
    </NotificationGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import {
    Push,
    Zoom,
    Reveal,
    Expand,
    Slide,
} from '@progress/kendo-vue-animation';
import {
    Notification,
    NotificationGroup,
} from '@progress/kendo-vue-notification';
import './styles.css';

const success = ref(false);
const error = ref(false);
const warning = ref(false);
const info = ref(false);
const none = ref(false);

function onToggle(flag) {
    switch (flag) {
        case 'success':
            success.value = !success.value;
            break;
        case 'error':
            error.value = !error.value;
            break;
        case 'warning':
            warning.value = !warning.value;
            break;
        case 'info':
            info.value = !info.value;
            break;
        case 'none':
            none.value = !none.value;
            break;
    }
}

function onClose(flag) {
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
