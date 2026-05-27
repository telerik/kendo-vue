<template>
  <div style="width: 500px; margin: auto">
    <div>
      <Menu :items="items" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Menu } from '@progress/kendo-vue-layout';

const items = ref([
    {
        text: 'Invasion Games',
        items: [{ text: 'Hockey' }, { text: 'Soccer' }, { text: 'Rugby' }],
    },
    {
        text: 'Net & Court Games',
        items: [
            { text: 'Badminton' },
            { text: 'Squash' },
            { text: 'Tennis' },
            { text: 'Table Tennis' },
            { text: 'Volleyball' },
        ],
    },
    {
        text: 'Target Games',
        items: [
            { text: 'Golf' },
            { text: 'Lawn bowls' },
            { text: 'Tenpin bowling' },
        ],
    },
]);
</script>
