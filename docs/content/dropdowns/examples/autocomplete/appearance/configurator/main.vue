<template>
  <div>
    <DropDownStyleConfigurator
      :size="size"
      :fill-mode="fillMode"
      :rounded="rounded"
      @sizechange="setSize"
      @fillmodechange="setFillMode"
      @roundedchange="setRounded"
    />
    <AutoComplete
      :style="{ width: '230px' }"
      :size="size"
      :fill-mode="fillMode"
      :rounded="rounded"
      :data-items="dataItems"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DropDownStyleConfigurator from './DropDownStyleConfigurator.vue'
import { AutoComplete } from '@progress/kendo-vue-dropdowns'

const size = ref('medium')
const rounded = ref('medium')
const fillMode = ref('solid')

const dataItems = [
    'X-Small',
    'Small',
    'Medium',
    'Large',
    'X-Large',
    '2X-Large',
]

const setRounded = (event) => {
    rounded.value = event.value
}

const setSize = (event) => {
    size.value = event.value
}

const setFillMode = (event) => {
    fillMode.value = event.value
}
</script>
