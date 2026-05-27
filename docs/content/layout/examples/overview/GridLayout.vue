<template>
  <div>
    <div class="example-wrapper-gridlayout">
      <GridLayout
        :rows="[
          { height: '90px' },
          { height: '90px' },
          { height: '90px' },
          { height: '90px' },
          { height: '90px' },
        ]"
        :cols="[{ width: '90px' }, { width: '90px' }, { width: '90px' }]"
        :gap="{ rows: 5, cols: 5 }"
        :items="items"
      >
        <template #content1>
          <div class="box rect">Box</div>
        </template>
        <template #content2>
          <div class="box">Box</div>
        </template>
        <template #content3>
          <div class="box">Box</div>
        </template>
        <template #content4>
          <div class="box big">Box</div>
        </template>
        <template #content5>
          <div class="box rect">Box</div>
        </template>
        <template #content6>
          <div class="box">Box</div>
        </template>
        <template #content7>
          <div class="box">Box</div>
        </template>
        <template #content8>
          <div class="box">Box</div>
        </template>
        <template #content9>
          <div class="box">Box</div>
        </template>
        <template #content10>
          <div class="box">Box</div>
        </template>
      </GridLayout>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { GridLayout } from '@progress/kendo-vue-layout';

const items = ref([
    { row: 1, col: 1, colSpan: 2, content: 'content1' },
    { row: 1, col: 3, content: 'content2' },
    { row: 2, col: 1, content: 'content3' },
    { row: 2, col: 2, colSpan: 2, rowSpan: 2, content: 'content4' },
    { row: 3, col: 1, rowSpan: 2, content: 'content5' },
    { row: 4, col: 2, content: 'content6' },
    { row: 4, col: 3, content: 'content7' },
    { row: 5, col: 1, content: 'content8' },
    { row: 5, col: 2, content: 'content9' },
    { row: 5, col: 3, content: 'content10' },
]);
</script>

<style scoped>
@import './gridlayout-styles.css';
</style>
