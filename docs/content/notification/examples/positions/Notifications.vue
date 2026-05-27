<template>
  <Notification :key="'success'" :type="{ style: 'success', icon: true }">
    <span> {{ content }}</span>
  </Notification>
  <Notification :key="'info'" :type="{ style: 'info' }">
    <span>{{ content }}</span>
  </Notification>
</template>

<script setup>
import { ref } from 'vue';
import { Notification } from '@progress/kendo-vue-notification';

const content = ref('Your data has been saved.');
</script>
