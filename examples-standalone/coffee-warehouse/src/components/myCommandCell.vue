<template>
    <td v-if="!dataItem['inEdit']" class="k-command-cell">
        <button
            class="k-primary k-button k-grid-edit-command"
            @click="editHandler">
            Edit
        </button>

        <button
            class="k-button k-grid-remove-command"
            @click="removeHandler">
            Remove
        </button>
    </td>
    <td v-else class="k-command-cell">
            <button
                class="k-button k-grid-save-command"
                @click="addUpdateHandler">
                {{dataItem.ProductID? 'Update' : 'Add'}}
            </button>

            <button
                class="k-button k-grid-cancel-command"
                @click="cancelDiscardHandler">
                {{dataItem.ProductID? 'Cancel' : 'Discard'}}
            </button>
        </td>
</template>
<script>

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
    setup(props, { emit }){
        const editHandler = () => {
            emit('edit', { dataItem: props.dataItem});
        };
        const removeHandler = () => {
            emit('remove', { dataItem: props.dataItem});
        };
        const addUpdateHandler = () => {
            emit('save', { dataItem: props.dataItem});
        };
        const cancelDiscardHandler = () => {
            emit('cancel', { dataItem: props.dataItem});
        };

        return {
            editHandler,
            removeHandler,
            addUpdateHandler,
            cancelDiscardHandler
        };
    }
}
</script>