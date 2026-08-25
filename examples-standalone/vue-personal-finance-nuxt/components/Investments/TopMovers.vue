<template>
    <Card class="top-movers-card">
        <div class="top-movers-content">
            <div :style="{
                fontSize: '20px',
                letterSpacing: 'wide',
                fontWeight: '500',
            }" class="top-movers-title">
                Today’s Top 5 Movers
            </div>
            <div class="top-movers-list">
                <ListView :data-items="currencies" :item="'listViewItem'" :style="{ width: '100%', border: 'none' }">
                    <template #listViewItem="{ props }">
                        <div class="mover-row">
                            <div class="mover-identity">
                                <Avatar rounded="full" type="image">
                                    <img :src="props.dataItem.avatar" :alt="props.dataItem.name" />
                                </Avatar>
                                <div class="mover-labels">
                                    <span :style="{ fontSize: '14px', fontWeight: '700' }">
                                        {{ props.dataItem.pair }}
                                    </span>
                                    <span :style="{ fontSize: '12px', fontWeight: '400' }">
                                        {{ props.dataItem.name }}
                                    </span>
                                </div>
                            </div>
                            <div class="mover-metric">
                                <span>{{ displayCurrencySign(props.dataItem.price, currency) }}</span>
                                <Change :change="props.dataItem.change" :price="props.dataItem.price" />
                            </div>
                            <div class="mover-metric">
                                <span>{{ displayCurrencySign(props.dataItem.price, currency) }}</span>
                                <Change :change="props.dataItem.change" :price="props.dataItem.price" />
                            </div>
                            <div class="mover-total">
                                <span>{{ displayCurrencySign(props.dataItem.total, currency) }}</span>
                            </div>
                        </div>
                    </template>
                </ListView>
            </div>
        </div>
    </Card>
</template>

<script setup>
import { ref, inject } from "vue";
import { Avatar, Card } from "@progress/kendo-vue-layout";
import { ListView } from "@progress/kendo-vue-listview";
import Change from "@/components/Investments/Change.vue";
import { displayCurrencySign } from "@/utils/currency-converter";

const currency = inject("currency");

const currencies = ref([
    {
        pair: "BTC/BIRD",
        name: "Bitcoin",
        avatar: "./images/bitcoin.png",
        price: 3000,
        change: 220.2,
        total: 300000,
    },
    {
        pair: "ETH/BIRD",
        name: "Etherium",
        avatar: "./images/ethereum.png",
        price: 2000,
        change: 150.3,
        total: 200000,
    },
    {
        pair: "XRP/BIRD",
        name: "Ripple",
        avatar: "./images/ripple.png",
        price: 50,
        change: -5.1,
        total: 50000,
    },
    {
        pair: "TTH/BIRD",
        name: "Theter",
        avatar: "./images/tetherus.png",
        price: 100,
        change: 2.0,
        total: 10000,
    },
    {
        pair: "UNI/BIRD",
        name: "Unicorn",
        avatar: "./images/inch.png",
        price: 100,
        change: -3.5,
        total: 10000,
    },
]);

</script>
<style scoped>
.top-movers-card { height: 100%; padding: var(--kendo-spacing-4); gap: var(--kendo-spacing-6); border-radius: var(--kendo-border-radius-xxl); }
.top-movers-content { display: grid; gap: var(--kendo-spacing-10); }
.top-movers-title { gap: var(--kendo-spacing-2); }
.top-movers-list { display: grid; gap: var(--kendo-spacing-6); padding-bottom: var(--kendo-spacing-5); }
.mover-row { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-radius: var(--kendo-border-radius-md); }
.mover-identity, .mover-labels, .mover-metric, .mover-total { display: flex; }
.mover-identity { align-items: center; }
.mover-labels, .mover-metric, .mover-total { flex-direction: column; }
.mover-labels, .mover-metric { gap: var(--kendo-spacing-1); }
.mover-metric, .mover-total { align-items: flex-end; }
.mover-total { justify-content: center; }
@media (min-width: 576px) { .mover-row { gap: var(--kendo-spacing-0); } }
@media (min-width: 992px) { .mover-row { gap: var(--kendo-spacing-6); } }
</style>