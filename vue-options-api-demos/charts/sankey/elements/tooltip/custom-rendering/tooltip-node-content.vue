<template>
    <div>
        <span :style="{ color: dataItem.color }">{{ dataItem.label.text }}</span>
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
