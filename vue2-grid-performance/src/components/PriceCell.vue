<template>
<td :class="className" colSpan="colSpan">
            <div :class="trendsClass">
                <span>{{formattedNumber}}</span>
               <span v-if="currentTrends.positive" class="k-icon k-i-arrow-60-up" />
               <span v-if="currentTrends.negative"  class="k-icon k-i-arrow-60-down" />
            </div>
        </td>
</template>
<script>
import { formatNumber } from '@telerik/kendo-intl';
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
        formattedNumber(){
            return formatNumber(this.$props.dataItem[this.$props.field], 'c4', 'en')
        },
        currentTrends(){
            return trends(this.$props.dataItem);
        },
        trendsClass(){
            return {
                'fintech-icons': true,
                ...this.currentTrends
                };
        }
    }
}
</script>