<template>
  <div>
    <h6>
      Format {{ decimal }} using 'n2' format with
      <strong>formatNumber</strong> function.
    </h6>
    <h5>Result: {{ formattedNumber }}</h5>
  </div>
</template>

<script>
import { provideIntlService } from "@progress/kendo-vue-intl";

export default {
  name: "App",
  data() {
    return {
      decimal: 42.12365,
    };
  },
  computed: {
    formattedNumber() {
      return provideIntlService(this).formatNumber(this.decimal, "n2");
    },
  },
};
</script>
