<template>
    <td v-if="renderCell" :class="className">
        <b v-if="field !== 'selected'">{{ getNestedValue(field, dataItem) }}</b>
        <span v-else>
            <kcheckbox
                :checked="getNestedValue(field, dataItem)"
                id="inputId"
                @change="handleOnChange"
            />
            <label class="k-checkbox-label" for="inputId" />
        </span>
    </td>
    <td v-else-if="renderArrow" key="'g' + columnIndex" :class="'k-group-cell'"></td>

    <td v-else-if="columnIndex <= level" key="g-colspan" :colSpan="columnsCount - columnIndex">
        <p class="k-reset">
            <a
                @click="onClick"
                tabindex="-1"
                href="#"
                :class="expanded ? 'k-i-collapse k-icon' : 'k-i-expand k-icon'"
            />
            {{ dataItem[field] }}
        </p>
    </td>
</template>
<script>
import { guid } from '@progress/kendo-vue-common';
import { Checkbox } from '@progress/kendo-vue-inputs';

function nestedValue(fieldName, dataItem) {
    const path = fieldName.split('.');
    let data = dataItem;
    path.forEach((p) => {
        data = data ? data[p] : undefined;
    });

    return data;
}

export default {
    components: {
        kcheckbox: Checkbox,
    },
    emits: {
        click: null,
        selectionchange: null,
    },
    props: {
        isSelected: Boolean,
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
    created() {
        this.inputId = guid();
    },
    computed: {
        renderArrow() {
            var returnValue =
                this.columnIndex === undefined ||
                this.level === undefined ||
                this.columnIndex < this.level ||
                this.columnsCount === undefined ||
                this.rowType !== 'groupHeader' ||
                this.dataItem[this.field] === undefined;
            return returnValue && this.dataItem[this.field];
        },
        renderCell() {
            return this.field !== undefined && this.rowType !== 'groupHeader';
        },
    },
    methods: {
        handleOnChange(event) {
            this.$emit('selectionchange', {
                event: event,
                dataItem: this.$props.dataItem,
            });
        },
        onClick(e) {
            this.$emit('click', e, this.dataItem, this.expanded);
        },
        getNestedValue: nestedValue,
    },
};
</script>
