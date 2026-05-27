<template>
  <div class="example-config">
    <Calendar :header-title="customHeaderTitle">
      <template #myTemplate="{ props }">
        <Title
          :value="props.value"
          :view="props.view"
          :id="props.id"
          @click="props.onClick"
        />
      </template>
    </Calendar>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Calendar } from '@progress/kendo-vue-dateinputs';
import Title from './Title.vue';

const customHeaderTitle = ref('myTemplate');
</script>
