<template>
  <div>
    <KButton @click="toggleDialog">{{ visible ? 'Close' : 'Open' }} Window</KButton>
    <Window v-if="visible" @close="toggleDialog" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Window } from '@progress/kendo-vue-dialogs'
import { Button as KButton } from "@progress/kendo-vue-buttons";

const visible = ref(true)

const toggleDialog = () => {
    visible.value = !visible.value
}
</script>
