<template>
  <Navigation :go-to-route="goToRoute">
    <Header @navigate="onNavigate" @currency-change="onCurrencyChange"/>
    <NuxtPage />
  </Navigation>
  <Footer />
</template>

<script setup>
import { ref, provide } from 'vue';
import Navigation from '@/components/Navigation.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

const goToRoute = ref(null);
const currency = ref('USD');

provide('currency', currency);

const onNavigate = (props) => {
  goToRoute.value = props;
};

const onCurrencyChange = (newCurrency) => {
  currency.value = newCurrency;
};

</script>
