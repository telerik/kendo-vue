<template>
    <h1 class="page-title">AI Assistant</h1>
    <div class="assistant-layout">
        <div class="topics-panel">
            <RelatedTopics />
        </div>
        <div class="chat-panel">
            <AIChat />
        </div>
    </div>
</template>
<script setup>
import RelatedTopics from "@/components/AIAssistant/RelatedTopics.vue";
import AIChat from "@/components/AIAssistant/AIChat.vue";

</script>
<style scoped>
.page-title { margin: 0; padding: var(--kendo-spacing-5); }
.assistant-layout { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: var(--kendo-spacing-4); margin-bottom: var(--kendo-spacing-5); overflow: hidden; padding: var(--kendo-spacing-5); }
.topics-panel, .chat-panel { grid-column: span 12 / span 12; display: flex; flex: 1 1 0; flex-direction: column; }
.chat-panel { gap: var(--kendo-spacing-1); }
@media (min-width: 768px) { .page-title { padding-inline: var(--kendo-spacing-15); } .assistant-layout { padding: var(--kendo-spacing-5); padding-inline: var(--kendo-spacing-15); } }
@media (min-width: 1024px) { .assistant-layout { gap: var(--kendo-spacing-6); } }
@media (min-width: 1280px) { .topics-panel { grid-column: span 8 / span 8; } .chat-panel { grid-column: span 4 / span 4; } }
</style>