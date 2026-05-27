<template>
  <div>
    <DropDownList :style="{ width: computedWidth }" :data-items="categories" />
  </div>
</template>

<script setup>
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { ref, computed } from 'vue';

const categories = ref([
    'some longer text',
    'some very long textsome very long textsome very long text',
]);

const getLongestText = (arr) =>
    arr.reduce(
        (longest, text) => (text.length > longest.length ? text : longest),
        ''
    );

const longest = computed(() => getLongestText(categories.value));

const CHARACTER_WIDTH_ESTIMATION = 7; // Approximate width of a character in pixels
const computedWidth = computed(() => `${longest.value.length * CHARACTER_WIDTH_ESTIMATION}px`);
</script>
