<template>
<td>
    <kbutton
        type="button"
        class="k-grid-remove-command"
        @click="removeHandler">
        Remove
    </kbutton>
</td>
</template>
<script>
import { Button } from "@progress/kendo-vue-buttons";
export default {
    components: {
        kbutton: Button
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
        editor: String
    },
    methods: {
        removeHandler: function() {
            this.$emit('remove', {dataItem:this.dataItem});
        }
    }
}
</script>
