<template>
    <em>{{ formatNumber(value, format, formatOptions, locale) }}</em>
</template>
<script>
import { IntlService } from '@progress/kendo-vue-intl';

export default{
    name: 'FormattedNumber',
    props: {
        value: {
            type: Number,
            required: true,
        },
        format: {
            type: String,
            default: null,
        },
        formatOptions: {
            type: Object,
            default: null,
        },
        locale: {
            type: String,
            required: true,
        },
    },
    methods: {
        formatNumber(value, format, formatOptions, locale) {
            const intl = new IntlService(locale); // Create a new instance with the correct locale
            if (formatOptions) {
                return intl.formatNumber(value, formatOptions);
            }
            return intl.formatNumber(value, format);
        },
    },
}
</script>
