<template>
  <div>
    <p>Type the name of a European country:</p>
    <DropDownList
      :style="{ width: '230px' }"
      :data-items="countries"
      :item-render="'myTemplate'"
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
    </DropDownList>
  </div>
</template>

<script setup>
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import countries from './countries';
import ItemRender from './ItemRender.vue';
</script>
