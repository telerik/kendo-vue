<template>
    <Card class="k-p-4 k-gap-6 k-rounded-xxl k-h-full">
        <div class="k-d-grid k-gap-10">
            <div :style="{
                fontSize: '20px',
                letterSpacing: 'wide',
                fontWeight: '500',
            }" class="k-gap-2">
                Today’s Top 5 Movers
            </div>
            <div class="k-d-grid k-gap-6 k-pb-5">
                <ListView :data-items="currencies" :item="'listViewItem'" :style="{ width: '100%', border: 'none' }">
                    <template #listViewItem="{ props }">
                        <div class="k-d-grid k-grid-cols-4 k-gap-lg-6 k-gap-xxl-6 k-gap-sm-0 k-rounded-md">
                            <div class="k-d-flex k-align-items-center">
                                <Avatar rounded="full" type="image">
                                    <img :src="props.dataItem.avatar" :alt="props.dataItem.name" />
                                </Avatar>
                                <div class="k-d-flex k-flex-column k-gap-4px">
                                    <span :style="{ fontSize: '14px', fontWeight: '700' }">
                                        {{ props.dataItem.pair }}
                                    </span>
                                    <span :style="{ fontSize: '12px', fontWeight: '400' }">
                                        {{ props.dataItem.name }}
                                    </span>
                                </div>
                            </div>
                            <div class="k-d-flex k-flex-column k-gap-4px k-align-items-end">
                                <span>{{ displayCurrencySign(props.dataItem.price, currency) }}</span>
                                <Change :change="props.dataItem.change" :price="props.dataItem.price" />
                            </div>
                            <div class="k-d-flex k-flex-column k-gap-4px k-align-items-end">
                                <span>{{ displayCurrencySign(props.dataItem.price, currency) }}</span>
                                <Change :change="props.dataItem.change" :price="props.dataItem.price" />
                            </div>
                            <div class="k-d-flex k-flex-column k-align-items-end k-justify-content-center">
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