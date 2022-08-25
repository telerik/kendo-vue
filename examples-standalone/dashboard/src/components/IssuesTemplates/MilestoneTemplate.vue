<template>
    <td>
        {{ milestone }}
    </td>
</template>

<script>
export default {
    props: {
        dataItem: Object
    },
    computed: {
        milestone() {
            return this.$props.dataItem.milestone ? this.$props.dataItem.milestone.title : '';
        }
    }
}
</script>