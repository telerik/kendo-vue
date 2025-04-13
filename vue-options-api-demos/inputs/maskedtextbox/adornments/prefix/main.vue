<template>
  <div>
    <MaskedTextBox
      :style="{ width: '230px' }"
      :inputPrefix="'prefix'"
      :mask="mask"
      :default-value="defaultValue"
    >
      <template v-slot:prefix>
        <InputIcons />
      </template>
    </MaskedTextBox>
  </div>
</template>
<script>
import { MaskedTextBox } from '@progress/kendo-vue-inputs';
import InputIcons from './InputIcons.vue';

export default {
  components: {
    MaskedTextBox,
    InputIcons,
  },
  data: function () {
    return {
      mask: '(999) 000-00-00-00',
      defaultValue: '(359) 555-55-55-55',
    };
  },
};
</script>
