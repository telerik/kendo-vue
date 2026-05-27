<template>
  <div>
    <h3 class="title k-color-primary">{{ text }}</h3>
    <Avatar :type="'icon'" :size="'large'">
      <SvgIcon :icon="fileTxtIcon" :size="'large'" />
    </Avatar>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Avatar } from '@progress/kendo-vue-layout';
import { SvgIcon } from '@progress/kendo-vue-common';
import { fileTxtIcon } from '@progress/kendo-svg-icons';

const text = ref('Bills');
</script>
