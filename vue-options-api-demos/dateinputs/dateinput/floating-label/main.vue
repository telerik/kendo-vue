<template>
  <div>
    <p>DateInput</p>
    <dateinput :style="{ width: '230px' }"
      :label="'Enter date:'"
      @change="onChangeDateInput"
      :placeholder="''"
    />
  </div>
</template>
<script>
import { DateInput } from "@progress/kendo-vue-dateinputs";

export default {
  components: {
    dateinput: DateInput,
  },
  data: function () {
    return {
      dateInputValue: undefined,
    };
  },
  methods: {
    onChangeDateInput: function (e) {
      this.dateInputValue = e.value;
    },
  },
};
</script>
