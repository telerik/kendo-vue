<template>
  <div>
    <div class="search-box">
      <TextBox
        placeholder="Search for an icon (e.g., lock, arrow)"
        v-model="searchTerm"
        @input="filterIcons"
      />
    </div>
    <ul class="svg-icons-wrapper">
      <li v-for="iconName in filteredIconNames" :key="iconName" class="icon-item">
        <SvgIcon :icon="allIcons[iconName]" size="xlarge" />
        <p class="icon-name">{{ iconName }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { SvgIcon } from '@progress/kendo-vue-common';
import { TextBox } from '@progress/kendo-vue-inputs';
import * as allIcons from '@progress/kendo-svg-icons';
import './styles.css';

const iconNames = Object.keys(allIcons).filter((key) => key !== 'default');

const searchTerm = ref('');

const filteredIconNames = computed(() => {
  const lowerCaseSearchTerm = searchTerm.value.toLowerCase();
  return iconNames.filter((iconName) =>
    iconName.toLowerCase().includes(lowerCaseSearchTerm)
  );
});

const filterIcons = (event) => {
  searchTerm.value = event.value;
};
</script>

