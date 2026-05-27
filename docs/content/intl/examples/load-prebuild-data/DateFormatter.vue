<template>
  <div>
    <span>
      {{" "}}
      {{ formattedDate }}
    </span>
  </div>
</template>

<script setup>
import { computed, inject } from "vue";
import { provideIntlService } from "@progress/kendo-vue-intl";

const props = defineProps({
    date: String,
});

const kendoIntlService = inject("kendoIntlService", null);

const formattedDate = computed(() =>
    provideIntlService({kendoIntlService}).formatDate(props.date, "EEEE, d.MM.y")
);
</script>
