<template>
  <div id="app">
    <dropdownlist :data-items="categories" :data-item-key="'CategoryID'" :text-field="'CategoryName'"
      :default-item="defaultItems" @change="handleDropDownChange"></dropdownlist>&nbsp; Selected category ID:
    <strong>{{ dropdownlistCategory }}</strong>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { categoriesData } from '../appdata/categories';
import { DropDownList as dropdownlist, DropDownListChangeEvent } from '@progress/kendo-vue-dropdowns';
const emit = defineEmits(['change'])



const categories = categoriesData;
const defaultItems = { CategoryID: null, CategoryName: "Product categories" };
const dropdownlistCategory = ref(null);
const handleDropDownChange = (e: DropDownListChangeEvent) => {
  emit('change', { category: e.target.value.CategoryID })
};

</script>

<style scoped>

</style>
