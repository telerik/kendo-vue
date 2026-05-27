<template>
  <div class="example-config">
    <!-- Select All Checkbox -->
    <Checkbox
      label="Select All"
      :checked="isAllSelected"
      @change="handleSelectAllChange"
    />

    <!-- Individual Checkboxes -->
    <Checkbox
      v-for="index in 6"
      :key="index"
      :label="'Option ' + index"
      :checked="selectedItems.has(index - 1)"
      :disabled="
        !selectedItems.has(index - 1) &&
        selectedItems.size >= 2 &&
        !isAllSelected
      "
      @change="(e) => handleCheckboxChange(e, index - 1)"
    />
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { Checkbox } from '@progress/kendo-vue-inputs';

export default {
  name: 'CheckboxGroup',
  components: { Checkbox },
  setup() {
    const selectedItems = ref(new Set());

    // Derived state: true if all items are selected
    const isAllSelected = computed(() => selectedItems.value.size === 6);

    const handleCheckboxChange = (event, index) => {
      const updated = new Set(selectedItems.value);

      if (event.value) {
        updated.add(index);
      } else {
        updated.delete(index);
      }

      selectedItems.value = updated;
    };

    const handleSelectAllChange = (event) => {
      if (event.value) {
        // Select all
        selectedItems.value = new Set([0, 1, 2, 3, 4, 5]);
      } else {
        // Deselect all
        selectedItems.value = new Set();
      }
    };

    return {
      selectedItems,
      isAllSelected,
      handleCheckboxChange,
      handleSelectAllChange,
    };
  },
};
</script>

<style scoped>
.example-config {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
