<template>
  <div class="example-wrapper">
    <div>
      <MultiSelect
        :style="{ width: '400px' }"
        :data-items="countriesList"
        :item-render="itemRender"
      >
        <template #myTemplate="{ props }">
          <ItemRender
            :style="props.style"
            :class="props.itemClass"
            :data-item="props.dataItem"
            :index="props.index"
            @click="props.onClick"
          />
        </template>
      </MultiSelect>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { MultiSelect } from '@progress/kendo-vue-dropdowns';
import countries from './countries';
import ItemRender from './ItemRender.vue';

const countriesList = ref(countries.slice());
const itemRender = ref('myTemplate');
</script>
