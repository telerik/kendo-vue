<template>
<td v-if="renderCell && field!=='expanded'" :class="className">
    <b>{{ getNestedValue(field, dataItem)}}</b></td>
<td v-else-if="renderCell" :class="'k-hierarchy-cell'">
    <span :class="customClass"   @click="onDetailClick"/></td>
<td v-else-if="renderArrow" key="'g' + columnIndex" :class="'k-group-cell'" >
</td>
<td v-else-if="columnIndex <= level" key='g-colspan'
    :colSpan="columnsCount - columnIndex">
    <p class="k-reset">
        <span
            @click="onClick"
            tabIndex="-1"
            :class="expanded ? 'k-i-collapse k-icon' : 'k-i-expand k-icon'"
        />
        {{dataItem[field]}}
    </p>
</td>
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
    emits:{
        click: null
    },
    props: {
        detail: String,
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
    computed: {
      renderArrow(){
        var returnValue = this.columnIndex === undefined ||this.level === undefined ||
         this.columnIndex < this.level ||this.columnsCount === undefined ||
          this.rowType !== 'groupHeader' || this.dataItem[this.field] === undefined;
        return returnValue && this.dataItem[this.field];
      },
      renderCell(){
        return this.field !== undefined && this.rowType !== 'groupHeader';
      },
      customClass(){
            const expanded = this.getNestedValue(this.$props.field, this.$props.dataItem);
            const className = expanded ? 'k-icon k-i-minus' : 'k-icon k-i-plus';
          return className;
      }
    },
    methods: {
        onClick(e) {
            this.$emit('click', e, this.dataItem, this.expanded);
        },
        onDetailClick(e){
             const expanded = this.getNestedValue(this.$props.field, this.$props.dataItem);

            this.$emit('click', e, this.dataItem, expanded);
        },
        getNestedValue: nestedValue
    }
}
</script>
