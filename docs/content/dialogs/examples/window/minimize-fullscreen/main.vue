<template>
  <div>
    <KButton @click="setMinimize">Minimize</KButton>&nbsp;
    <KButton @click="setFullscreen">Full screen</KButton>&nbsp;
    <KButton @click="setDefault">Default</KButton>
    <Window :title="'Status'" :stage="windowStage" @stagechange="handleStageChange">
      <KButton @click="setMinimize">Minimize</KButton>&nbsp;
      <KButton @click="setFullscreen">Full screen</KButton>&nbsp;
      <KButton @click="setDefault">Default</KButton>
    </Window>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Window } from '@progress/kendo-vue-dialogs'
import { Button as KButton } from "@progress/kendo-vue-buttons";

const windowStage = ref('MINIMIZED')

const setMinimize = () => {
    windowStage.value = 'MINIMIZED'
}

const setFullscreen = () => {
    windowStage.value = 'FULLSCREEN'
}

const setDefault = () => {
    windowStage.value = 'DEFAULT'
}

const handleStageChange = (e) => {
    windowStage.value = e.state
}
</script>
