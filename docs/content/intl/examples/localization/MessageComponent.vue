<template>
  <span style="display: block">
    {{ message }}
  </span>
</template>

<script setup>
import { computed, inject } from "vue";
import { provideLocalizationService } from "@progress/kendo-vue-intl";

const props = defineProps({
    messageKey: String,
    defaultMessage: String,
});

const kendoLocalizationService = inject("kendoLocalizationService", null);

const message = computed(() =>
    provideLocalizationService({kendoLocalizationService}).toLanguageString(
        props.messageKey,
        props.defaultMessage
    )
);
</script>
