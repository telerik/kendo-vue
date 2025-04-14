<template>
  <em>{{ formatNumber(value, format, locale) }}</em>
</template>
<script>
import { IntlService } from '@progress/kendo-vue-intl';

export default {
    name: 'FormattedNumber',
    props: {
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
    },
    methods: {
        formatNumber(value, format, locale) {
            const intl = new IntlService(locale);
            return intl.toString(value, format);
        },
    },
}
</script>
