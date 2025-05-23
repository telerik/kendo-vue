<template>
    <Card class="k-p-4 k-gap-6 k-rounded-xxl k-h-full">
        <div class="k-d-grid k-gap-6">
            <div :style='{
                fontSize: "20px",
                letterSpacing: "wide",
                fontWeight: "500",
            }' class="k-gap-2">
                Transaction Details
            </div>
            <div class="k-d-grid k-gap-6">
                <TransactionDetail :label="'Merchant'" :value="merchant" />
                <TransactionDetail :label="'Order Status'" :value="orderStatus" :status="true" />
                <TransactionDetail :label="'Time'" :value="dateOfPurchase" />
                <TransactionDetail :label="'Customer'" :value="`${name} ${surname}`" />
                <TransactionDetail :label="'Email'" :value="email" />
                <TransactionDetail :label="'Payment Method'" :value="cardType" />
                <TransactionDetail :label="'Transaction Hash'" :value="transactionHash" />
                <TransactionDetail :label="'From'" :value="transactionHashFrom" />
                <TransactionDetail :label="'To'" :value="transactionHashTo" />
            </div>
        </div>
    </Card>
</template>

<script setup>
import { Card } from "@progress/kendo-vue-layout";
import TransactionDetail from "./TransactionDetail.vue";
import { userData } from "@/data/personal-data";

const props = defineProps({
    transactionData: {
        type: Object,
    }
})

const merchant = ref(props.transactionData.merchant);
const name = ref(userData.name);
const surname = ref(userData.surname);
const email = ref(userData.email);
const cardType = ref(props.transactionData.cardType);
const orderStatus = ref(props.transactionData.orderStatus);
const transactionHashFrom = ref(props.transactionData.transactionHashFrom);
const transactionHashTo = ref(props.transactionData.transactionHashTo);
const transactionHash = ref(props.transactionData.transactionHash);
const dateOfPurchase = ref(props.transactionData.dateOfPurchase);

watch(() => props.transactionData, (newValue) => {
    merchant.value = newValue.merchant;
    cardType.value = newValue.cardType;
    orderStatus.value = newValue.orderStatus;
    transactionHashFrom.value = newValue.transactionHashFrom;
    transactionHashTo.value = newValue.transactionHashTo;
    transactionHash.value = newValue.transactionHash;
    dateOfPurchase.value = newValue.dateOfPurchase; 
}, { deep: true });


</script>