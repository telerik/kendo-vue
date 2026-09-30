<template>
    <td>
        <a :href="dataItem.html_url" target="_blank" rel="noopener noreferrer">#{{ dataItem.number }}</a>
    </td>
</template>

<script>
export default {
    props: {
        dataItem: Object
    }
}
</script>