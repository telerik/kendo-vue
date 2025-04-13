<template>
    <div>
        <span :style="{ color: dataItem.source.color }">{{ dataItem.source.label.text }}</span>
        <span> -> </span>
        <span :style="{ color: dataItem.target.color }">{{ dataItem.target.label.text }}</span>
        <span> ({{ dataItem.value }} Units)</span>
    </div>
</template>
<script>
    export default {
        props: {
            dataItem: Object
        }
    }
</script>
