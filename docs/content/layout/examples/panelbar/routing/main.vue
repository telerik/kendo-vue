<template>
  <div style="display: flex">
    <div class="panelbar-wrapper-routing">
      <PanelBar :items="items" @select="onSelect" />
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { PanelBar } from '@progress/kendo-vue-layout';

const router = useRouter();
const items = ref([
    {
        title: 'Home',
        data: {
            path: '/layout/panelbar/routing/home',
        },
    },
    {
        title: 'Products',
        data: {
            path: '/layout/panelbar/routing/products',
        },
    },
    {
        title: 'About',
        data: {
            path: '/layout/panelbar/routing/about',
        },
        items: [
            {
                title: 'Team',
                data: {
                    path: '/layout/panelbar/routing/about/team',
                },
            },
        ],
    },
]);

const onSelect = (e) => {
    router.push(e.target.data);
};

onMounted(() => {
    router.push(items.value[0].data);
});
</script>

<style>
.panelbar-wrapper-routing {
  min-width: 180px;
  max-width: 300px;
  margin-right: 15px;
}
</style>
