<template>
  <div class="example-wrap">
    <FloatingActionButton
      :text="'No roundness'"
      :rounded="'none'"
      :align="{ horizontal: 'start', vertical: 'top' }"
    >
    </FloatingActionButton>
    <FloatingActionButton
      :text="'Small roundness'"
      :rounded="'small'"
      :align="{ horizontal: 'center', vertical: 'top' }"
    >
    </FloatingActionButton>
    <FloatingActionButton
      :text="'Medium roundness'"
      :rounded="'medium'"
      :align="{ horizontal: 'end', vertical: 'top' }"
    >
    </FloatingActionButton>
    <FloatingActionButton
      :text="'Large roundness'"
      :rounded="'large'"
      :align="{ horizontal: 'start', vertical: 'bottom' }"
    >
    </FloatingActionButton>
    <FloatingActionButton
      :text="'Full roundness'"
      :rounded="'full'"
      :align="{ horizontal: 'center', vertical: 'bottom' }"
    >
    </FloatingActionButton>
    <FloatingActionButton
      :text="'Custom roundness'"
      :rounded="'none'"
      :class="'custom-fab'"
      :align="{ horizontal: 'end', vertical: 'bottom' }"
    >
    </FloatingActionButton>
  </div>
</template>

<script setup>
import { FloatingActionButton } from '@progress/kendo-vue-buttons';
</script>

<style scoped>
.custom-fab button {
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
}
</style>
