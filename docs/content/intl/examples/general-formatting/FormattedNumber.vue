<template>
  <em>{{ formattedNumber }}</em>
</template>

<script setup>
import { computed } from "vue";
import { IntlService } from "@progress/kendo-vue-intl";

const props = defineProps({
    value: {
        type: Number,
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

const formattedNumber = computed(() => {
    const intl = new IntlService(props.locale);
    return intl.toString(props.value, props.format);
});
</script>
