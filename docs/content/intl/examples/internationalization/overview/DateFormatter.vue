<template>
  <div class="col-xs-12 col-sm-6 example-col">
    <label>Locale date:</label>{{ " " }}
    {{ formattedDate }}
  </div>
</template>

<script setup>
import { computed, inject } from "vue";
import { provideIntlService } from "@progress/kendo-vue-intl";

const kendoIntlService = inject("kendoIntlService", null);

const formattedDate = computed(() =>
    provideIntlService({kendoIntlService}).formatDate(
        new Date(2000, 10, 6),
        "EEEE, d.MM.y"
    )
);
</script>
