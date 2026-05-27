<template>
  <div>
    <KButton @click="onToggle('success')">Save data</KButton>
    <NotificationGroup
      :style="{
        right: 0,
        bottom: 0,
        'align-items': 'flex-start',
        flexWrap: 'wrap-reverse',
      }"
    >
      <Fade :appear="success">
        <Notification
          v-if="success"
          :type="{ style: 'success', icon: true }"
          :closable="true"
          @close="onClose('success')"
        >
          <span>Your data has been saved.</span>
        </Notification>
      </Fade>
    </NotificationGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Fade } from '@progress/kendo-vue-animation';
import { Notification, NotificationGroup } from '@progress/kendo-vue-notification';
import './styles.css';

const success = ref(false);

function onToggle(flag) {
    if (flag === 'success') {
        success.value = !success.value;
    }
}

function onClose(flag) {
    if (flag === 'success') {
        success.value = false;
    }
}
</script>
