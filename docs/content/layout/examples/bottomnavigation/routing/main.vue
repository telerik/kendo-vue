<template>
  <div :class="'example-wrapper'">
    <div :class="'page'">
      <div :class="'content'">
        <router-view />
      </div>
      <BottomNavigation
        :position-mode="'sticky'"
        :items="computedItems"
        @select="onSelect"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import {
    dollarIcon,
    fileTxtIcon,
    gearIcon,
    homeIcon,
    moreHorizontalIcon,
} from '@progress/kendo-svg-icons';
import { BottomNavigation } from '@progress/kendo-vue-layout';

const router = useRouter();

const selected = ref(0);
const items = ref([
    {
        text: 'Home',
        id: 1,
        svgIcon: homeIcon,
        data: { path: '/layout/bottomnavigation/routing/home' },
        selected: true,
    },
    {
        text: 'Bills',
        id: 2,
        svgIcon: fileTxtIcon,
        data: { path: '/layout/bottomnavigation/routing/bills' },
    },
    {
        text: 'Payments',
        id: 3,
        svgIcon: dollarIcon,
        data: { path: '/layout/bottomnavigation/routing/payments' },
    },
    {
        text: 'Services',
        id: 4,
        svgIcon: gearIcon,
        data: { path: '/layout/bottomnavigation/routing/services' },
    },
    {
        text: 'More',
        id: 5,
        svgIcon: moreHorizontalIcon,
        data: { path: '/layout/bottomnavigation/routing/more' },
    },
]);

const computedItems = computed(() =>
    items.value.map((item, index) => ({
        ...item,
        selected: index === selected.value,
    }))
);

function onSelect(e) {
    selected.value = e.itemIndex;
    router.push(e.itemTarget.data.path);
}

onMounted(() => {
    router.push(items.value[0].data.path);
});
</script>

<style scoped>
.example-wrapper {
  width: 750px;
  margin: 0 auto;
  box-shadow: 0px 10px 20px #00000029;
  border-radius: 30px;
}

.page {
  padding: 10px 10px 0 10px;
}

.content {
  background: #f9f9f9;
  border-radius: 30px 30px 0 0;
  height: 350px;
  text-align: center;
}

.k-bottom-nav {
  border-radius: 0 0 20px 20px;
}

.title {
  text-align: center;
  font-size: 30px;
  padding: 40px 0;
}
</style>
