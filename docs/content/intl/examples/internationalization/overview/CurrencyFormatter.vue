<template>
  <div class="col-xs-12 col-sm-6 example-col">
    <label>Locale currency:</label>{{ " " }}
    {{ formattedNumber }}
  </div>
</template>

<script setup>
import { computed, inject } from "vue";
import { provideIntlService } from "@progress/kendo-vue-intl";

const kendoIntlService = inject("kendoIntlService", null);

const formattedNumber = computed(() =>
    provideIntlService({kendoIntlService}).formatNumber(100, "c")
);
</script>
