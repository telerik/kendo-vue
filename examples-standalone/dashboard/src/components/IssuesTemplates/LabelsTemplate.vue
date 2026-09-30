<template>
    <td>
        <span v-for="label in dataItem.labels" :key="label.id" class="issue-label">{{ label.name }}</span>
    </td>
</template>

<script>
export default {
    props: { dataItem: Object }
}
</script>