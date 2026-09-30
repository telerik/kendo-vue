<template>
    <Card class="transaction-details-card">
        <div class="transaction-details-content">
            <div :style='{
                fontSize: "20px",
                letterSpacing: "wide",
                fontWeight: "500",
            }' class="transaction-details-title">
                Transaction Details
            </div>
            <div class="transaction-details-list">
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
<style scoped>
.transaction-details-card { height: 100%; padding: var(--kendo-spacing-4); gap: var(--kendo-spacing-6); border-radius: var(--kendo-border-radius-xxl); }
.transaction-details-content, .transaction-details-list { display: grid; gap: var(--kendo-spacing-6); }
.transaction-details-title { gap: var(--kendo-spacing-2); }
</style>