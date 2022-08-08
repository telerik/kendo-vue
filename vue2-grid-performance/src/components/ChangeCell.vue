<template>
    <td :class="className" colSpan="colSpan">
        <div :class="currentTrends">
            {{ formattedNumber }}
        </div>
    </td>
</template>
<script>
import { provideIntlService } from '@progress/kendo-vue-intl';
import { trends } from "../utils";

export default {
    props: {
        field: String,
        dataItem: Object,
        format: String,
        className: String,
        columnIndex: Number,
        columnsCount: Number,
        rowType: String,
        level: Number,
        expanded: Boolean,
        editor: String
    },
    computed: {
        formattedNumber() {
            return provideIntlService(this).formatNumber(this.$props.dataItem[this.$props.field], 'c4', 'en')
        },
        currentTrends() {
            return trends(this.$props.dataItem);
        },
        trendsClass() {
            return {
                'fintech-icons': true,
                ...this.currentTrends
            };
        }
    }
}
</script>