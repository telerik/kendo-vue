<template>
  <span :class="[dataItem.budget < 0 ? 'red text-bold' : '']"
    >{{ formattedNumber }}
  </span>
</template>

<script>
import { provideIntlService } from "@progress/kendo-vue-intl";

export default {
  inject: {
    kendoIntlService: { default: null },
  },
  props: {
    dataItem: Object,
  },
  computed: {
    formattedNumber: function () {
      return provideIntlService(this).formatNumber(this.dataItem.budget, "c");
    },
  },
};
</script>
