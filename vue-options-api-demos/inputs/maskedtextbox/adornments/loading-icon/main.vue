<template>
  <div>
    <MaskedTextBox
      :style="{ width: '230px' }"
      :show-loading-icon="true"
      :mask="mask"
      :default-value="defaultValue"
    />
  </div>
</template>
<script>
import { MaskedTextBox } from '@progress/kendo-vue-inputs';

export default {
  components: {
    MaskedTextBox,
  },
  data: function () {
    return {
      mask: '(999) 000-00-00-00',
      defaultValue: '(359) 555-55-55-55',
    };
  },
};
</script>
