<template>
    <td v-if="cellData.rowType !== 'groupHeader'" :class='["text-center", cellData.class]' :colspan="cellData.colSpan"
        :role="cellData.role" :aria-selected="cellData.ariaSelected" :data-grid-col-index="cellData.dataGridColIndex">
        <slot />
    </td>

</template>
<script setup>
defineProps({
    cellData: {
        type: Object,
        required: true,
    },
});
</script>