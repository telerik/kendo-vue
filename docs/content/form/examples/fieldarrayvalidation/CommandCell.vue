<template>
    <td>
        <KButton
            type="button"
            class="k-grid-remove-command"
            @click="removeHandler"
        >
            Remove
        </KButton>
    </td>
</template>

<script setup>
import { Button as KButton } from "@progress/kendo-vue-buttons";

const props = defineProps({
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
});

const emit = defineEmits(['remove']);

function removeHandler() {
    emit('remove', { dataItem: props.dataItem });
}
</script>
