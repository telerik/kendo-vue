<template>
  <div>
    Valid Input Icon:
    <br />
    <MaskedTextBox
      :style="{ width: '230px' }"
      :show-validation-icon="true"
      :input-class="'k-valid'"
      :mask="mask"
      :default-value="defaultValue"
    />
    <br />
    <br />
    Invalid Input Icon:
    <br />
    <MaskedTextBox
      :style="{ width: '230px' }"
      :show-validation-icon="true"
      :valid="false"
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
