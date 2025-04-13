<template>
  <div>
    <span class="chip-wrapper">
      <Chip :text="'Base'" :theme-color="'base'" />
    </span>
    <span class="chip-wrapper">
      <Chip :text="'Info'" :theme-color="'info'" />
    </span>
    <span class="chip-wrapper">
      <Chip :text="'Success'" :theme-color="'success'" />
    </span>
    <span class="chip-wrapper">
      <Chip :text="'Warning'" :theme-color="'warning'" />
    </span>
    <span class="chip-wrapper">
      <Chip :text="'Error'" :theme-color="'error'" />
    </span>
    <span class="chip-wrapper">
      <Chip
        :text="'Custom colors'"
        :theme-color="null"
        :class="'custom-color'"
      />
    </span>
  </div>
</template>

<script>
import { Chip } from '@progress/kendo-vue-buttons';

export default {
  components: {
    Chip,
  },
};
</script>

<style>
.chip-wrapper {
  padding: 20px;
}

.custom-color {
  background-color: green;
  color: orange;
}
</style>
