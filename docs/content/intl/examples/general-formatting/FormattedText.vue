<template>
  <em>{{ formattedText }}</em>
</template>

<script setup>
import { computed } from "vue";
import { IntlService } from "@progress/kendo-vue-intl";

const props = defineProps({
    template: {
        type: String,
        required: true,
    },
    values: {
        type: Array,
        required: true,
    },
    locale: {
        type: String,
        required: true,
    },
});

const formattedText = computed(() => {
    const intl = new IntlService(props.locale);
    return intl.format(props.template, props.values);
});
</script>
