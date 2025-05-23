<template>
    <Card class="k-p-4 k-gap-4 k-rounded-xxl k-gap-3.5">
        <div class="k-d-grid k-gap-4">
            <div :style='{
                fontSize: "20px",
                letterSpacing: "wide",
                fontWeight: "500",
            }'>
                Related Topics
            </div>
            <ExpansionPanel v-for="(panel, index) in topics" :title="panel.title" :expanded="expanded[index]"
                :tab-index="index" :key="panel.id" @action="(ev) => handleAction(ev, index)">
                <Reveal :appear="expanded[index]">
                    <ExpansionPanelContent v-if="expanded[index]">
                        <div class="content">
                            {{ panel.content }}
                        </div>
                    </ExpansionPanelContent>
                </Reveal>
            </ExpansionPanel>
        </div>
    </Card>
</template>
<script setup>
import { onBeforeMount } from "vue";
import { Card } from "@progress/kendo-vue-layout";
import { ExpansionPanel, ExpansionPanelContent } from "@progress/kendo-vue-layout";
import { Reveal } from "@progress/kendo-vue-animation";
import { ref } from "vue";

const topics = ref([
    {
        id: "saving",
        title: "How do I start saving money?",
        content:
            "Begin by setting a clear savings goal and tracking your expenses. Use the app to create a budget, automate transfers to a savings account, and cut unnecessary spending. Even small, consistent deposits can add up over time!",
        expanded: true,
    },
    {
        id: "investing",
        title: "What’s the best way to start investing with little money?",
        content:
            "Start with low-cost options like ETFs or fractional shares. Many apps allow you to invest with as little as $5. Consider automating small, regular contributions to grow your portfolio over time!",
        expanded: true,
    },
    {
        id: "lifestyle",
        title: "How can I save money without changing my lifestyle?",
        content:
            "You can save money without changing your lifestyle by automating savings through a separate account, using cashback and rewards programs, reviewing subscriptions to cancel unused ones, and comparison-shopping for regular purchases. Opt for generic brands, use energy-efficient habits to reduce utility bills, and set spending alerts to stay on track. Small tweaks add up.",
        expanded: false,
    },
    {
        id: "emergency",
        title: "What is the best way to build an emergency fund?",
        content:
            "goal, even if it’s just $50, and automate transfers to a dedicated savings account. Cut small, non-essential expenses temporarily to boost savings. Use windfalls like tax refunds or bonuses to accelerate growth. Keep the fund separate from daily spending to avoid temptation, and aim to save 3–6 months of living expenses.",
        expanded: false,
    },
]);

const expanded = ref([]);

onBeforeMount(() => {
    expanded.value = topics.value.map((topic) =>
        topic.expanded
    );
});

function handleAction(ev, itemId) {
    expanded.value[itemId] = !expanded.value[itemId];
}

</script>