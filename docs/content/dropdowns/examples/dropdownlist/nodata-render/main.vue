<template>
  <div>
    <p>Type the name of a European country:</p>
    <DropDownList
      :style="{ width: '230px' }"
      :data-items="[]"
      :list-no-data-render="'myTemplate'"
    >
      <template #myTemplate>
        <NoDataRender />
      </template>
    </DropDownList>
  </div>
</template>

<script setup>
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import NoDataRender from './NoDataRender.vue';
</script>
