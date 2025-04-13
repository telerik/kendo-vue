<template>
  <div>
    <TextArea
      :style="{ width: '230px' }"
      v-model="value"
      :show-clear-button="true"
      :rows="4"
    />
  </div>
</template>
<script>
import { TextArea } from '@progress/kendo-vue-inputs';

export default {
  components: {
    TextArea,
  },
  data() {
    return {
      value: 'Clear me!',
    };
  },
};
</script>
