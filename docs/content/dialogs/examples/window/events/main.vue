<template>
  <div>
    <KButton @click="toggleDialog">{{ visible ? 'Close' : 'Open' }} Window</KButton>
    <Window
      v-if="visible"
      title="Status"
      :initial-height="350"
      @close="toggleDialog"
      @move="handleMove"
      @resize="handleResize"
      @stagechange="handleStageChange"
    />
    <br />
    <br />
    <div class="example-config">
      <h5>Event log</h5>
      <ul class="event-log" :style="{ textAlign: 'right' }">
        <li v-for="(event, index) in events" :key="index">
          {{ event }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Window } from '@progress/kendo-vue-dialogs'
import { Button as KButton } from "@progress/kendo-vue-buttons";

const visible = ref(true)
const events = ref([])

const log = (event, arg) => {
    events.value.unshift(`${event} ${arg || ""}`)
}

const toggleDialog = () => {
    log('Close event')
    visible.value = !visible.value
}

const handleMove = () => log('move event')
const handleResize = () => log('resize event')
const handleStageChange = () => log('state change event')
</script>
