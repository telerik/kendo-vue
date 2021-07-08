<template>
    <td v-if="!dataItem['inEdit']">
        <kendo-button 
                class="k-button k-grid-edit-command"
                :primary="true"
                @click="editHandler">
            Edit
        </kendo-button>
        <kendo-button class="k-button k-grid-remove-command"
                @click="removeHandler">
            Remove
        </kendo-button>
    </td>
    <td v-else>
        <kendo-button class="k-button k-grid-save-command"
                @click="addUpdateHandler">
            {{dataItem.id? 'Update' : 'Add'}}
        </kendo-button>
        <kendo-button class="k-button k-grid-cancel-command"
                @click="cancelDiscardHandler">
            {{dataItem.id? 'Cancel' : 'Discard'}}
        </kendo-button>
    </td>
</template>
<script>
    import { Button } from '@progress/kendo-vue-buttons';

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
        components: {
            'kendo-button': Button
        },
        methods: {
            editHandler: function () {
                this.$emit('edit', { dataItem: this.dataItem, operation: "edit" });
            },
            removeHandler: function () {
                this.$emit('remove', { dataItem: this.dataItem, operation: "delete" });
            },
            addUpdateHandler: function () {
                this.$emit('save', { dataItem: this.dataItem, operation: "update" });
            },
            cancelDiscardHandler: function () {
                this.$emit('cancel', { dataItem: this.dataItem, operation: "cancel" });
            }
        }
    }
</script>
