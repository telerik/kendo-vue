<template>
    <td>
        <a :href="dataItem.html_url">#{{ dataItem.number }}</a>
    </td>
</template>

<script>
export default {
    props: {
        dataItem: Object
    }
}
</script>