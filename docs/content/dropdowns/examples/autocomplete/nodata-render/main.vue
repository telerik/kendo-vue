<template>
  <div>
    <p>Type the name of a European country:</p>
    <AutoComplete :style="{ width: '230px' }" :data-items="[]" :list-no-data-render="listNoDataRender">
      <template #myTemplate>
        <NoDataRender />
      </template>
    </AutoComplete>
  </div>
</template>

<script setup>
import { AutoComplete } from '@progress/kendo-vue-dropdowns'
import NoDataRender from './NoDataRender.vue'
import { ref } from 'vue'

const listNoDataRender = ref('myTemplate')
</script>
