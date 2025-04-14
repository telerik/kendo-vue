<template>
<td v-if="!dataItem['inEdit']" class="k-command-cell k-table-td">
    <kbutton
        :theme-color="'primary'"
        class="k-grid-edit-command"
        @click="editHandler">
        Edit
    </kbutton>
    <kbutton
        class="k-grid-remove-command"
        @click="removeHandler">
        Remove
    </kbutton>
</td>
<td v-else>
        <kbutton
            class="k-grid-save-command"
            @click="addUpdateHandler">
            {{dataItem.ProductID? 'Update' : 'Add'}}
        </kbutton>
        <kbutton
            class="k-grid-cancel-command"
            @click="cancelDiscardHandler">
            {{dataItem.ProductID? 'Cancel' : 'Discard'}}
        </kbutton>
    </td>
</template>
<script>
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
        'kbutton': Button
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
        editHandler: function() {
            this.$emit('edit', {dataItem:this.dataItem});
        },
        removeHandler: function() {
            this.$emit('remove', {dataItem:this.dataItem});
        },
        addUpdateHandler: function() {
            this.$emit('save', {dataItem:this.dataItem});
        },
        cancelDiscardHandler: function() {
            this.$emit('cancel', {dataItem:this.dataItem});
        }
    }
}
</script>
