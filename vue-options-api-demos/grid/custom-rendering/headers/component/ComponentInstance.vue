<template>
<td :class="className" @click="clickHandler"><b>{{ getNestedValue(field, dataItem)}}</b></td>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';

function nestedValue(fieldName, dataItem) {
    const path = fieldName.split('.');
    let data = dataItem;
    path.forEach((p) => {
        data = data ? data[p] : undefined;
    });

    return data;
}

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
        editor: String,
    },
    methods: {
        clickHandler: function(e){
            this.$emit('custom', e);
        },
        getNestedValue: nestedValue
    }
}
</script>
