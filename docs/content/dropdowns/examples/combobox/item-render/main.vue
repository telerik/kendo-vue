<template>
  <div>
    <p>Type the name of a European country:</p>
    <ComboBox
      :style="{ width: '230px' }"
      :data-items="countries"
      :item-render="itemRender"
    >
      <template #myTemplate="{ props }">
        <ItemRender
          :style="props.style"
          :class="props.itemClass"
          :data-item="props.dataItem"
          :index="props.index"
          @click="(ev) => props.onClick(ev)"
        />
      </template>
    </ComboBox>
  </div>
</template>

<script setup>
import { ComboBox } from '@progress/kendo-vue-dropdowns'
import ItemRender from './ItemRender.vue'
import countries from './countries'

const itemRender = 'myTemplate'
</script>
