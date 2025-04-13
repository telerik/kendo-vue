<template>
  <div>
    <span class="chip-wrapper">
      <Chip
        :text="'Small'"
        :value="'small'"
        :size="'small'"
        :svg-icon="checkCircleIcon"
      />
    </span>
    <span class="chip-wrapper">
      <Chip
        :text="'Medium'"
        :value="'medium'"
        :size="'medium'"
        :svg-icon="checkCircleIcon"
      />
    </span>
    <span class="chip-wrapper">
      <Chip
        :text="'Large'"
        :value="'large'"
        :size="'large'"
        :svg-icon="checkCircleIcon"
      />
    </span>
    <span class="chip-wrapper">
      <Chip
        :text="'Custom Size'"
        :value="'custom'"
        :size="null"
        :class="'custom-size'"
        :svg-icon="checkCircleIcon"
      />
    </span>
  </div>
</template>

<script>
import { Chip } from "@progress/kendo-vue-buttons";
import { checkCircleIcon } from "@progress/kendo-svg-icons";

export default {
  components: {
    Chip,
  },
  data() {
    return {
      checkCircleIcon,
    };
  },
};
</script>

<style>
.custom-size {
  padding: 15px 30px;
}

.chip-wrapper {
  padding: 20px;
}
</style>
