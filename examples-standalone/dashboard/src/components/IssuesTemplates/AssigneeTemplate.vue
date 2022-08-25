<template>
    <td>
        <img v-if="dataItem.assignee" :src="dataItem.assignee.avatar_url" style='width: 30px; height: 30px'
            class='img-circle' />
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