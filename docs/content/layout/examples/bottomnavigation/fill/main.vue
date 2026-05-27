<template>
  <div class="border-demo">
    <BottomNavigationStyleConfigurator
      :fill-mode="fillMode"
      @fillmodechange="setFillMode"
    />
    <div class="content-fill-mode">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
        vitae dolorem sunt! Obcaecati reprehenderit vero itaque ex. Magnam ex
        error rem, est quasi libero veniam ipsa enim quod. Porro. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Fuga blanditiis est,
        harum quibusdam praesentium voluptatibus et similique dolorum aliquid
        ab saepe enim numquam mollitia laborum alias doloremque impedit
        voluptates reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
        vitae dolorem sunt! Obcaecati reprehenderit vero itaque ex. Magnam ex
        error rem, est quasi libero veniam ipsa enim quod. Porro. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Fuga blanditiis est,
        harum quibusdam praesentium voluptatibus et similique dolorum aliquid
        ab saepe enim numquam mollitia laborum alias doloremque impedit
        voluptates reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
        vitae dolorem sunt! Obcaecati reprehenderit vero itaque ex. Magnam ex
        error rem, est quasi libero veniam ipsa enim quod. Porro. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Fuga blanditiis est,
        harum quibusdam praesentium voluptatibus et similique dolorum aliquid
        ab saepe enim numquam mollitia laborum alias doloremque impedit
        voluptates reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
        vitae dolorem sunt! Obcaecati reprehenderit vero itaque ex. Magnam ex
        error rem, est quasi libero veniam ipsa enim quod. Porro. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Fuga blanditiis est,
        harum quibusdam praesentium voluptatibus et similique dolorum aliquid
        ab saepe enim numquam mollitia laborum alias doloremque impedit
        voluptates reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
        vitae dolorem sunt! Obcaecati reprehenderit vero itaque ex. Magnam ex
        error rem, est quasi libero veniam ipsa enim quod. Porro. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Fuga blanditiis est,
        harum quibusdam praesentium voluptatibus et similique dolorum aliquid
        ab saepe enim numquam mollitia laborum alias doloremque impedit
        voluptates reprehenderit.
      </p>
    </div>
    <BottomNavigation
      :items="computedItems"
      @select="onSelect"
      :fill-mode="fillMode"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { BottomNavigation } from '@progress/kendo-vue-layout';
import BottomNavigationStyleConfigurator from './BottomNavigationStyleConfigurator.vue';
import {
    arrowsSwapIcon,
    chartLineMarkersIcon,
    chartPieIcon,
    gearIcon,
    moreHorizontalIcon,
} from '@progress/kendo-svg-icons';

const fillMode = ref('solid');
const selected = ref(0);
const items = ref([
    { svgIcon: chartLineMarkersIcon, text: 'Revenue', selected: true },
    { svgIcon: arrowsSwapIcon, text: 'Transactions' },
    { svgIcon: chartPieIcon, text: 'Overview' },
    { svgIcon: gearIcon, text: 'Settings' },
    { svgIcon: moreHorizontalIcon, text: 'More' },
]);

const computedItems = computed(() =>
    items.value.map((item, index) => ({
        ...item,
        selected: index === selected.value,
    }))
);

function onSelect(ev) {
    selected.value = ev.itemIndex;
}

function setFillMode(ev) {
    fillMode.value = ev.value;
}
</script>

<style>
.content-fill-mode {
  padding: 20px;
}
</style>
