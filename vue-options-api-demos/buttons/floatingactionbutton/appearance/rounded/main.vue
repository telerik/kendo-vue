<template>
  <div class="example-wrap">
    <fab
      :text="'No roundness'"
      :rounded="null"
      :align="{ horizontal: 'start', vertical: 'top' }"
    >
    </fab>
    <fab
      :text="'Small roundness'"
      :rounded="'small'"
      :align="{ horizontal: 'center', vertical: 'top' }"
    >
    </fab>
    <fab
      :text="'Medium roundness'"
      :rounded="'medium'"
      :align="{ horizontal: 'end', vertical: 'top' }"
    >
    </fab>
    <fab
      :text="'Large roundness'"
      :rounded="'large'"
      :align="{ horizontal: 'start', vertical: 'bottom' }"
    >
    </fab>
    <fab
      :text="'Full roundness'"
      :rounded="'full'"
      :align="{ horizontal: 'center', vertical: 'bottom' }"
    >
    </fab>
    <fab
      :text="'Custom roundness'"
      :rounded="null"
      :class="'custom-fab'"
      :align="{ horizontal: 'end', vertical: 'bottom' }"
    >
    </fab>
  </div>
</template>
<script>
import { FloatingActionButton } from '@progress/kendo-vue-buttons';

export default {
  components: {
    fab: FloatingActionButton,
  },
};
</script>

<style scoped>
.custom-fab button {
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
}
</style>
