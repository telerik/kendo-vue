<template>
  <MaskedTextBox
    :style="{ width: '230px' }"
    :inputSuffix="'suffix'"
    :mask="mask"
    :default-value="defaultValue"
  >
    <template v-slot:suffix>
      <span class="k-input-icon k-icon k-i-gear"></span>
    </template>
  </MaskedTextBox>
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
