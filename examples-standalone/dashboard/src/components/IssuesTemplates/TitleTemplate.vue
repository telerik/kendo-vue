<template>
    <td>
        <span :class="['issue-status', dataItem.state === 'open' ? 'issue-open' : 'issue-closed']"></span>
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