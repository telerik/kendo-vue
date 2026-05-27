<template>
  <div>
    <h3>{{ visitorToCustomer }}%</h3>
    <p>Visitor to customer</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    dataItems: Array,
});

const visitorToCustomer = computed(() => {
    const totalUsers = props.dataItems.reduce((sum, item) => sum + item.users, 0);
    const totalConversions = props.dataItems.reduce((sum, item) => sum + item.conversion, 0);
    return Math.round(totalUsers / totalConversions);
});
</script>
