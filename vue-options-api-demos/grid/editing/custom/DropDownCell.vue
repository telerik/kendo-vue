<template>
    <td v-if="!dataItem.inEdit" :class="className">{{ dataItem[field] }}</td>
    <td v-else>
        <dropdownlist
            :style="{ width: '100px' }"
            @change="change"
            :value="dataItem[field]"
            :data-items="dataitems"
        ></dropdownlist>
    </td>
</template>
<script>
import { DropDownList } from '@progress/kendo-vue-dropdowns';

export default {
    components: {
        dropdownlist: DropDownList,
    },
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
    data() {
        return {
            dataitems: ['True', 'False'],
        };
    },
    methods: {
        change(e) {
            this.$emit('change', e, e.target.value);
        },
    },
};
</script>
