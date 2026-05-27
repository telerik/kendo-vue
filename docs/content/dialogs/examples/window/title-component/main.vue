<template>
  <div>
    <KButton @click="toggleDialog">{{ visible ? 'Close' : 'Open' }} Window</KButton>
    <Window v-if="visible" :title-render="titleRender" @close="toggleDialog">
      <template #myTemplate>
        <Title />
      </template>
    </Window>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Window } from '@progress/kendo-vue-dialogs'
import { Button as KButton } from "@progress/kendo-vue-buttons";
import Title from './Title.vue'

const visible = ref(true)
const titleRender = ref('myTemplate')

const toggleDialog = () => {
    visible.value = !visible.value
}
</script>
