<template>
    <Card class="k-p-4 k-gap-4 k-rounded-xxl k-gap-1.5">
        <div class="k-d-grid k-gap-4">
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
        <div class="k-d-flex k-justify-content-center">
            <ArcGauge :value="value" :color="'#2196F3'" :style="{ width: '252px' }" :center-render="'myTemplate'">
                <template #myTemplate="{ props }">
                    <div :style="{    marginLeft: 'auto',
      marginRight: 'auto', color: props.color, fontSize: '28px', fontWeight: 700 }">
                        {{ props.value }}%
                    </div>
                </template>
            </ArcGauge>
        </div>
        <div class="k-d-flex k-justify-content-center">
            <div class="k-d-flex">
                <div class="k-d-grid k-justify-content-center k-align-items-center">
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
                <div :style="{ textAlign: 'right' }" class="k-d-grid k-justify-content-center">
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