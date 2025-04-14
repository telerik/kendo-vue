<template>
<em>{{ formatText(template, values, locale) }}</em>
</template>
<script>
import { IntlService } from '@progress/kendo-vue-intl';

export default {
    name: 'FormattedText',
    props: {
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
    },
    methods: {
        formatText(template, values, locale) {
            const intl = new IntlService(locale);
            return intl.format(template, values);
        },
    },
}
</script>
