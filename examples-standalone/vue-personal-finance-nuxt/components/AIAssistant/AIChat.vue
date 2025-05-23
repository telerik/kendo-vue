<template>
    <Card class="k-p-4 k-gap-6 k-rounded-xxl k-h-full">
        <div class="k-d-grid k-gap-6">
            <div :style='{
                fontSize: "20px",
                letterSpacing: "wide",
                fontWeight: "500",
            }'
          class="k-gap-2"
        >
          Chat with Roby
        </div>
        <div class="k-d-grid k-gap-6">
          <AIPrompt />
        </div>
      </div>
    </Card>
</template>
<script setup>
import { Card } from "@progress/kendo-vue-layout";
import AIPrompt from "./AIPrompt.vue";
</script>