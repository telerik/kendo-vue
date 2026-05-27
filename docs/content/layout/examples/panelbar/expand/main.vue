<template>
  <div>
    <div class="example-config row">
      <div class="col-sm-4">
        <h5>Expand modes:</h5>
        <RadioButton
          :name="'expandMode'"
          :value="'single'"
          :checked="expandMode === 'single'"
          @change="handleChange"
          :label="'Single expand mode'"
        />
        <RadioButton
          :name="'expandMode'"
          :value="'multiple'"
          :checked="expandMode === 'multiple'"
          @change="handleChange"
          :label="'Multiple expand mode'"
        />
      </div>
    </div>
    <div class="panelbar-wrapper">
      <PanelBar :expand-mode="expandMode" :items="items" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PanelBar } from '@progress/kendo-vue-layout';
import { RadioButton } from '@progress/kendo-vue-inputs';
import './styles.css';

const expandMode = ref('multiple');
const items = ref([
    {
        title: 'Invasion Games',
        expanded: true,
        items: [
            { title: 'Hockey' },
            { title: 'Soccer' },
            { title: 'Rugby' },
            { title: 'Basketball' },
            { title: 'Water polo' },
            { title: 'Netball' },
        ],
    },
    {
        title: 'Striking & Fielding Games',
        items: [
            { title: 'Cricket' },
            { title: 'Softball' },
            { title: 'Baseball' },
        ],
    },
    {
        title: 'Net & Court Games',
        expanded: true,
        items: [
            { title: 'Badminton' },
            { title: 'Squash' },
            { title: 'Tennis' },
            { title: 'Table Tennis' },
            { title: 'Volleyball' },
        ],
    },
    {
        title: 'Target Games',
        items: [
            { title: 'Golf' },
            { title: 'Lawn bowls' },
            { title: 'Tenpin bowling' },
        ],
    },
]);

const handleChange = (e) => {
    expandMode.value = e.value;
};
</script>
