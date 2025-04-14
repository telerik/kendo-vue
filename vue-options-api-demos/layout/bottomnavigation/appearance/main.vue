<template>
  <div class="border-demo">
      <BottomNavigationStyleConfigurator
        :theme="theme"
        @themechange="setTheme"
        :fill-mode="fillMode"
        @fillmodechange="setFillMode"
      />
      <div class="content">
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
        :theme-color="theme"
      />
  </div>
</template>
<script>
import { BottomNavigation } from '@progress/kendo-vue-layout';
import BottomNavigationStyleConfigurator from './BottomNavigationStyleConfigurator.vue';
import { arrowsSwapIcon, chartLineMarkersIcon, chartPieIcon, gearIcon, moreHorizontalIcon } from '@progress/kendo-svg-icons';
export default {
    components: {
        BottomNavigation,
        BottomNavigationStyleConfigurator,
    },
    computed: {
        computedItems() {
            return this.items.map((item, index) => ({
                ...item,
                selected: index === this.selected,
            }));
        },
    },
    data() {
        return {
            theme: 'primary',
            fillMode: 'flat',
            selected: 0,
            items: [
                {
                    svgIcon: chartLineMarkersIcon,
                    text: 'Revenue',
                    selected: true,
                },
                {
                    svgIcon: arrowsSwapIcon,
                    text: 'Transactions',
                },
                {
                    svgIcon: chartPieIcon,
                    text: 'Overview',
                },
                {
                    svgIcon: gearIcon,
                    text: 'Settings',
                },
                {
                    svgIcon: moreHorizontalIcon,
                    text: 'More',
                },
            ],
        };
    },
    methods: {
        onSelect(ev) {
            this.selected = ev.itemIndex;
        },
        setTheme(ev) {
            this.theme = ev.value;
        },
        setFillMode(ev) {
            this.fillMode = ev.value;
        },
    },
};
</script>

<style>
#app {
  padding: 0 !important;
}
.content {
  padding: 20px;
}
</style>
