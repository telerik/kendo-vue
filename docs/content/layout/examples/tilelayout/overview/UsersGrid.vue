<template>
  <div>
    {{ dataItems.length }}
    <Grid
      :style="{ height: '100%' }"
      :data-items="dataItems"
      :scrollable="'scrollable'"
      :columns="columns"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';

defineProps({
    dataItems: Array,
});

const columns = ref([
    { field: 'channel', title: 'Channel' },
    { field: 'users', title: 'Number Of Users' },
]);
</script>
