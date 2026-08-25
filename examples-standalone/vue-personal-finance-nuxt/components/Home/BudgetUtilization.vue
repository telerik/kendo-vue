<template>
    <Card class="budget-card">
        <div class="budget-heading">
            <div :style='{
                fontSize: "20px",
                letterSpacing: "wide",
                fontWeight: "500",
            }'>
                Budget Utilization
            </div>
            <div :style='{
                fontSize: "16px",
                letterSpacing: "0.5px",
                fontWeight: "400",
            }'>
                50% of the Budget used
            </div>
        </div>
        <div class="gauge-container">
            <ArcGauge :value="value" :color="'#2196F3'" :style="{ width: '252px' }" :center-render="'myTemplate'">
                <template #myTemplate="{ props }">
                    <div :style="{    marginLeft: 'auto',
      marginRight: 'auto', color: props.color, fontSize: '28px', fontWeight: 700 }">
                        {{ props.value }}%
                    </div>
                </template>
            </ArcGauge>
        </div>
        <div class="budget-summary-container">
            <div class="budget-summary">
                <div class="budget-amount">
                    <div :style='{
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "20px",
                        letterSpacing: "0.5px",
                    }'>
                        {{ displayCurrencyValue(15000, currency) }}
                    </div>
                    <div :style='{
                        fontSize: "14px",
                        fontWeight: "700",
                        letterSpacing: "0.25px",
                    }'>Total budget</div>
                </div>
                <div class="separator"></div>
                <div :style="{ textAlign: 'right' }" class="used-budget-amount">
                    <div :style='{
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "20px",
                        letterSpacing: "0.5px",
                    }'>
                        {{ displayCurrencyValue(7500, currency) }}
                    </div>
                    <div :style='{
                        fontSize: "14px",
                        fontWeight: "700",
                        letterSpacing: "0.25px",
                    }'>Used budget</div>
                </div>
            </div>
        </div>
    </Card>
</template>
<script setup>
import { Card } from "@progress/kendo-vue-layout";
import { ArcGauge } from "@progress/kendo-vue-gauges";
import { displayCurrencyValue } from "@/utils/currency-converter";

const props = defineProps({
    value: {
        type: Number,
        default: 50,
    },
    currency: {
        type: String,
        default: "USD",
    },
});
</script>
<style scoped>
.budget-card { padding: var(--kendo-spacing-4); gap: calc(1.5 * var(--kendo-spacing-base)); border-radius: var(--kendo-border-radius-xxl); }
.budget-heading { display: grid; gap: var(--kendo-spacing-4); }
.gauge-container, .budget-summary-container, .budget-summary { display: flex; justify-content: center; }
.budget-amount, .used-budget-amount { display: grid; justify-content: center; align-items: center; }
</style>