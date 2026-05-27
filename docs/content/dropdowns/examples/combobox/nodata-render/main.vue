<template>
  <div>
    <p>Type the name of a European country:</p>
    <ComboBox
      :style="{ width: '230px' }"
      :data-items="[]"
      :list-no-data-render="listNoDataRender"
    >
      <template #myTemplate>
        <Custom />
      </template>
    </ComboBox>
  </div>
</template>

<script setup>
import { ComboBox } from '@progress/kendo-vue-dropdowns';
import Custom from './NoDataRender.vue';

const listNoDataRender = 'myTemplate';
</script>
