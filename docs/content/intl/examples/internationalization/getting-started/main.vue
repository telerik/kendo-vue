<template>
  <div>
    <h6>
      Format {{ decimal }} using 'n2' format with
      <strong>formatNumber</strong> function.
    </h6>
    <h5>Result: {{ formattedNumber }}</h5>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { provideIntlService } from "@progress/kendo-vue-intl";

const decimal = 42.12365;

const formattedNumber = computed(() => {
    return provideIntlService({ }).formatNumber(decimal, "n2");
});
</script>
