<template>
    <td>
        <span :class="['issue-status', dataItem.state]" aria-hidden="true"></span>
        {{ dataItem.title }}
    </td>
</template>

<script>
export default {
    props: {
        dataItem: Object
    }
}
</script>