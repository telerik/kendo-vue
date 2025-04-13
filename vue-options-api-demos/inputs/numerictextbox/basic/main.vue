<template>
  <div>
    <div class="col-xs-12 col-md-6 example-col">
      <label>
        <NumericTextBox
          :style="{ width: '230px' }"
          :placeholder="'please enter value'"
          v-model="value"
        >
        </NumericTextBox>
        Kilometers
      </label>
    </div>
    <div class="col-xs-12 col-md-6 example-col">
      <label>
        <NumericTextBox
          :style="{ width: '230px' }"
          :placeholder="'please enter value'"
          :icon-name="'gear'"
          :value="computedValue"
          @change="ChangeMiles"
        >
        </NumericTextBox>
        Miles
      </label>
    </div>
  </div>
</template>
<script>
import { NumericTextBox } from '@progress/kendo-vue-inputs';

export default {
  components: {
    NumericTextBox,
  },
  computed: {
    computedValue: function () {
      return this.value == null ? null : this.value / 1.609344;
    },
  },
  data: function () {
    return {
      value: null,
    };
  },
  methods: {
    ChangeMiles(e) {
      this.value = e.value !== null ? e.value * 1.609344 : null;
    },
  },
};
</script>
