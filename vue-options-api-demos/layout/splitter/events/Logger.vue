<template>
    <div class="example-config">
        <h5>{{ title }}</h5>
        <ul class="event-log">
            <li v-for="(event, idx) in events" :key="idx">{{ events.length - idx }}. {{ event }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        events: Array,
        title: String,
    },
};
</script>

<style scoped>
.example-config {
    margin: 0 0 20px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(0, 0, 0, 0.08);
}
.event-log {
    margin: 0;
    padding: 0;
    max-height: 100px;
    overflow-y: auto;
    list-style-type: none;
    border: 1px solid rgba(0, 0, 0, 0.08);
    background-color: white;
}
.event-log li {
    margin: 0;
    padding: 0.3em;
    line-height: 1.2em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
.event-log li:last-child {
    margin-bottom: -1px;
}
</style>
