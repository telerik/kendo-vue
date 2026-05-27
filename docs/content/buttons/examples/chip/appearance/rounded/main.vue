<template>
  <div>
    <span class="chip-wrapper">
      <Chip
        :text="'No Roundness'"
        :value="'No Roundness'"
        :rounded="'none'"
        :svg-icon="checkCircleIcon"
      />
    </span>
    <span class="chip-wrapper">
      <Chip
        :text="'Small'"
        :value="'small'"
        :rounded="'small'"
        :svg-icon="checkCircleIcon"
      />
    </span>
    <span class="chip-wrapper">
      <Chip
        :text="'Medium'"
        :value="'medium'"
        :rounded="'medium'"
        :svg-icon="checkCircleIcon"
      />
    </span>
    <span class="chip-wrapper">
      <Chip
        :text="'Large'"
        :value="'large'"
        :rounded="'large'"
        :svg-icon="checkCircleIcon"
      />
    </span>
    <span class="chip-wrapper">
      <Chip
        :text="'Full'"
        :value="'full'"
        :rounded="'full'"
        :svg-icon="checkCircleIcon"
      />
    </span>
    <br />
    <br />
    <span class="chip-wrapper">
      <Chip
        :text="'Custom rounded'"
        :value="'custom'"
        :rounded="'none'"
        :class="'custom-rounded'"
        :svg-icon="checkCircleIcon"
      />
    </span>
  </div>
</template>

<script setup>
import { Chip } from "@progress/kendo-vue-buttons";
import { checkCircleIcon } from "@progress/kendo-svg-icons";
</script>

<style>
.custom-rounded {
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}
.chip-wrapper {
  padding: 20px;
}
</style>
