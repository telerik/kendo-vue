<template>
  <div class="container">
    <div class="row">
      <div class="col-sm mb-2">ProgressBar</div>
    </div>
    <div class="row">
      <div class="col-sm">
        <ProgressBar :value="value" :dir="'rtl'" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ProgressBar } from '@progress/kendo-vue-progressbars';

const value = ref(55);
</script>
