<template>
  <div>
    <div class="col-xs-12 col-md-6 example-col">
      <p>Enter phone number</p>
      <MaskedTextBox
        :style="{ width: '230px' }"
        :mask="mask"
        :default-value="defaultValue"
      ></MaskedTextBox>
    </div>
    <div class="col-xs-12 col-md-6 example-col">
      <p>MaskedTextBox with adornments</p>
      <MaskedTextBox :style="{ width: '230px' }" :icon-name="'gear'" />
    </div>
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
      defaultValue: '(359) 884-12-33-21',
    };
  },
};
</script>
