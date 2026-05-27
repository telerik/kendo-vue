<template>
    <div :class="'example-wrapper'">
        <div :class="'page'">
            <div :class="'content'">
                <router-view />
            </div>
            <Breadcrumb :style="'position: sticky'" :collapseMode="'none'" :dataItems="items" @select="onSelect" />
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { Breadcrumb } from '@progress/kendo-vue-layout';

const router = useRouter();
const items = [
    {
        id: 'home',
        text: 'Home',
        data: { path: '/layout/breadcrumb/routing/home' },
    },
    {
        id: 'products',
        text: 'Products',
        data: { path: '/layout/breadcrumb/routing/products' },
    },
    {
        id: 'about',
        text: 'About',
        data: { path: '/layout/breadcrumb/routing/about' },
    },
    {
        id: 'team',
        text: 'Team',
        data: { path: '/layout/breadcrumb/routing/team' },
    },
];

onMounted(() => {
    router.push(items[3].data.path);
});

const onSelect = (e) => {
    const index = items.findIndex(item => item.id === e.id);
    router.push(items[index].data);
};

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

.k-breadcrumb {
    border-radius: 0 0 20px 20px;
}

.title {
    text-align: center;
    font-size: 30px;
    padding: 40px 0;
}
</style>
