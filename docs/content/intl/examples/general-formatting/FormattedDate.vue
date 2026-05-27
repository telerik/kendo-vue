<template>
  <em>{{ formattedDate }}</em>
</template>

<script setup>
import { computed } from "vue";
import { IntlService } from "@progress/kendo-vue-intl";

const props = defineProps({
    value: {
        type: Date,
        required: true,
    },
    format: {
        type: String,
        required: true,
    },
    locale: {
        type: String,
        required: true,
    },
});

const formattedDate = computed(() => {
    const intl = new IntlService(props.locale);
    return intl.toString(props.value, props.format);
});
</script>
