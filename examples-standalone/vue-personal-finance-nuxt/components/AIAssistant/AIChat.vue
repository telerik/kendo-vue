<template>
    <Card class="chat-card">
        <div class="chat-content">
            <div :style='{
                fontSize: "20px",
                letterSpacing: "wide",
                fontWeight: "500",
            }'
          class="chat-title"
        >
          Chat with Roby
        </div>
        <div class="prompt-section">
          <AIPrompt />
        </div>
      </div>
    </Card>
</template>
<script setup>
import { Card } from "@progress/kendo-vue-layout";
import AIPrompt from "./AIPrompt.vue";
</script>
<style scoped>
.chat-card { height: 100%; padding: var(--kendo-spacing-4); gap: var(--kendo-spacing-6); border-radius: var(--kendo-border-radius-xxl); }
.chat-content, .prompt-section { display: grid; gap: var(--kendo-spacing-6); }
.chat-title { gap: var(--kendo-spacing-2); }
</style>