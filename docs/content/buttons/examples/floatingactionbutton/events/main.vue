<template>
  <div>
    <FloatingActionButton
      :items="items"
      :icon="'gear'"
      :align="{ horizontal: 'start', vertical: 'top' }"
      @itemclick="handleDomEvent('item click')"
      @focus="handleDomEvent('focus')"
      @blur="handleDomEvent('blur')"
      @open="handleDomEvent('open')"
      @close="handleDomEvent('close')"
      @keydown="handleDomEvent('key down')"
    />
    <div class="example-config" :style="{ marginTop: '60px' }">
      <h5>{{ title }}</h5>
      <ul class="event-log" :style="{ textAlign: 'right' }">
        <li v-for="log in logs" :key="log">{{ log }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FloatingActionButton } from '@progress/kendo-vue-buttons';
import {
    plusIcon,
    pencilIcon,
    trashIcon,
} from "@progress/kendo-svg-icons";

const title = ref('Event Log');
const logs = ref([]);

const items = [
    { svgIcon: plusIcon, text: 'Create' },
    { svgIcon: pencilIcon, text: 'Edit' },
    { svgIcon: trashIcon, text: 'Delete' }
];

const handleDomEvent = (eventType) => {
    logs.value.unshift(eventType);
};
</script>
