<template>
  <div>
    <div class="separator mt-3">
      <h6>Small</h6>
      <ChipList
        :size="'small'"
        :rounded="'full'"
        :key="meal.name"
        :selection="'multiple'"
        :default-data-items="meal"
        :text-field="'name'"
        :value-field="'name'"
      />
    </div>
    <div class="separator mt-3">
      <h6>Medium</h6>
      <ChipList
        :size="'medium'"
        :rounded="'full'"
        :key="meal.name"
        :selection="'multiple'"
        :default-data-items="meal"
        :text-field="'name'"
        :value-field="'name'"
      />
    </div>
    <div class="separator mt-3">
      <h6>Large</h6>
      <ChipList
        :size="'large'"
        :rounded="'full'"
        :key="meal.name"
        :selection="'multiple'"
        :default-data-items="meal"
        :text-field="'name'"
        :value-field="'name'"
      />
    </div>
  </div>
</template>

<script setup>
import { ChipList } from '@progress/kendo-vue-buttons';

const meal = [{ name: 'Ketchup' }, { name: 'Mustard' }, { name: 'Mayonnaise' }];
</script>
