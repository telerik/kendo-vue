<template>
  <div>
    <div class="example-wrapper">
      <StackLayout
        :orientation="'vertical'"
        :align="{
          vertical: 'top',
        }"
      >
        <div class="box header">Header</div>
        <StackLayout
          :orientation="'horizontal'"
          :style="{
            height: '300px',
          }"
        >
          <div class="box nav">Navigation</div>
          <div class="box content">Content</div>
          <div class="box toc">TOC</div>
        </StackLayout>
        <div class="box footer">Footer</div>
      </StackLayout>
    </div>
  </div>
</template>
<script>
import { StackLayout } from '@progress/kendo-vue-layout';
import './styles.css';

export default {
  components: {
    StackLayout,
  },
};
</script>
