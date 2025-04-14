<template>
  <div>
    <KTextBox
      v-model="value"
      :placeholder="'Type some text...'"
      :style="{ width: '230px' }"
      :show-clear-button="true"
    />
  </div>
</template>
<script>
import { TextBox as KTextBox } from '@progress/kendo-vue-inputs';

export default {
  components: {
    KTextBox
  },
  data() {
    return {
      value: 'Clear this text!',
    };
  },
};
</script>
