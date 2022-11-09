<template>
  <div>
    <h6>Decimal</h6>

    <h6>Percentage</h6>
    <numerictextbox
      :style="{ width: '230px' }"
      :format="'p3'"
      :default-value="percentage"
      :min="0"
      :max="1"
      :step="0.1"
    ></numerictextbox>
  </div>
</template>
<script>
import { NumericTextBox } from '@progress/kendo-vue-inputs';

export default {
  components: {
    numerictextbox: NumericTextBox,
  },
  data: function () {
    return {
      percentage: 0.7,
    };
  },
};
</script>
