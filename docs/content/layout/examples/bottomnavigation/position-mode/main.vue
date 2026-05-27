<template>
  <div class="border-demo">
    <div class="page">
      <div class="example-config">
        <legend>Position mode settings</legend>
        <RadioGroup
          :data-items="contentTypes"
          v-model="positionMode"
          :layout="'horizontal'"
        />
        <span>* Scroll the page to see the position mode differences</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
        vitae dolorem sunt! Obcaecati reprehenderit vero itaque ex. Magnam ex
        error rem, est quasi libero veniam ipsa enim quod. Porro. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Fuga blanditiis est, harum
        quibusdam praesentium voluptatibus et similique dolorum aliquid ab saepe
        enim numquam mollitia laborum alias doloremque impedit voluptates
        reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
        vitae dolorem sunt! Obcaecati reprehenderit vero itaque ex. Magnam ex
        error rem, est quasi libero veniam ipsa enim quod. Porro. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Fuga blanditiis est, harum
        quibusdam praesentium voluptatibus et similique dolorum aliquid ab saepe
        enim numquam mollitia laborum alias doloremque impedit voluptates
        reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
        vitae dolorem sunt! Obcaecati reprehenderit vero itaque ex. Magnam ex
        error rem, est quasi libero veniam ipsa enim quod. Porro. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Fuga blanditiis est, harum
        quibusdam praesentium voluptatibus et similique dolorum aliquid ab saepe
        enim numquam mollitia laborum alias doloremque impedit voluptates
        reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
        vitae dolorem sunt! Obcaecati reprehenderit vero itaque ex. Magnam ex
        error rem, est quasi libero veniam ipsa enim quod. Porro. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Fuga blanditiis est, harum
        quibusdam praesentium voluptatibus et similique dolorum aliquid ab saepe
        enim numquam mollitia laborum alias doloremque impedit voluptates
        reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio
        vitae dolorem sunt! Obcaecati reprehenderit vero itaque ex. Magnam ex
        error rem, est quasi libero veniam ipsa enim quod. Porro. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Fuga blanditiis est, harum
        quibusdam praesentium voluptatibus et similique dolorum aliquid ab saepe
        enim numquam mollitia laborum alias doloremque impedit voluptates
        reprehenderit.
      </p>
      <BottomNavigation
        :position-mode="positionMode"
        :items="computedItems"
        @select="onSelect"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { BottomNavigation } from '@progress/kendo-vue-layout';
import { RadioGroup } from '@progress/kendo-vue-inputs';
import { calendarIcon, envelopeIcon, userIcon } from '@progress/kendo-svg-icons';

const positionMode = ref('fixed');
const selected = ref(0);
const contentTypes = ref([
    { label: 'Fixed', value: 'fixed' },
    { label: 'Sticky', value: 'sticky' },
]);

const items = ref([
    { text: 'Inbox', id: 1, svgIcon: envelopeIcon, selected: true },
    { text: 'Calendar', id: 2, svgIcon: calendarIcon },
    { text: 'Profile', id: 3, svgIcon: userIcon },
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
</script>
