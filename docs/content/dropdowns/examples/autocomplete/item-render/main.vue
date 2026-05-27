<template>
  <div>
    <p>Type the name of a European country:</p>
    <AutoComplete
      :style="{ width: '230px' }"
      :data-items="countries"
      :item-render="itemRender"
    >
      <template #myTemplate="{ props }">
        <ItemRender
          :style="props.style"
          :class="props.itemClass"
          :data-item="props.dataItem"
          :focused="props.focused"
          :index="props.index"
          @click="ev => props.onClick(ev)"
        />
      </template>
    </AutoComplete>
  </div>
</template>

<script setup>
import countries from "./countries";
import { AutoComplete } from "@progress/kendo-vue-dropdowns";
import ItemRender from "./ItemRender.vue";

const itemRender = "myTemplate";
</script>
