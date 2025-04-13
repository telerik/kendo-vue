<template>
  <div>
    <StackLayout
      :orientation="'vertical'"
      :align="{
        vertical: 'top',
      }"
    >
      <div class="box stacklayout-header">Header</div>
      <StackLayout
        :orientation="'horizontal'"
        :style="{
          height: '300px',
        }"
      >
        <div class="box nav">Navigation</div>
        <div class="box stacklayout-content">Content</div>
        <div class="box toc">TOC</div>
      </StackLayout>
      <div class="box stacklayout-footer">Footer</div>
    </StackLayout>
  </div>
</template>
<script>
import { StackLayout } from '@progress/kendo-vue-layout';

export default {
    components: {
        StackLayout,
    },
};
</script>

<style scoped>
@import './stacklayout-styles.css';
</style>
