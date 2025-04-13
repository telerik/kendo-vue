<template>
  <div>
    <MaskedTextBox
      :style="{ width: '230px' }"
      :inputPrefix="'prefix'"
      :mask="mask"
      :default-value="defaultValue"
    >
      <template v-slot:prefix>
        <div>
          &nbsp; &nbsp; &nbsp;
          <InputSeparator />
        </div>
      </template>
    </MaskedTextBox>
  </div>
</template>
<script>
import { MaskedTextBox, InputSeparator } from '@progress/kendo-vue-inputs';

export default {
  components: {
    MaskedTextBox,
    InputSeparator,
  },
  data: function () {
    return {
      mask: '(999) 000-00-00-00',
      defaultValue: '(359) 555-55-55-55',
    };
  },
};
</script>
