<template>
    <td>
        <img v-if="dataItem.assignee" :src="dataItem.assignee.avatar_url"
            class="issue-assignee__avatar img-circle" />
        {{ assignee }}
    </td>
</template>

<script>
export default {
    props: {
        dataItem: Object
    },
    computed: {
        assignee() {
            return this.$props.dataItem.assignee ? this.$props.dataItem.assignee.login : '';
        }
    }
}
</script>

<style scoped>
.issue-assignee__avatar {
    width: var(--kendo-spacing-8);
    height: var(--kendo-spacing-8);
}
</style>