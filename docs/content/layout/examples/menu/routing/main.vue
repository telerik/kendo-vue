<template>
  <kendo-menu :items="items" @select="onSelect" />
  <router-view />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Menu as KendoMenu } from "@progress/kendo-vue-layout";

const router = useRouter();

const items = ref([
    {
        text: "Home",
        data: {
            path: "/layout/menu/routing/home",
        },
    },
    {
        text: "Products",
        data: {
            path: "/layout/menu/routing/products",
        },
    },
    {
        text: "About",
        data: {
            path: "/layout/menu/routing/about",
        },
        items: [
            {
                text: "Team",
                data: {
                    path: "/layout/menu/routing/about/team",
                },
            },
        ],
    },
]);

const onSelect = (e) => {
    router.push(e.item.data);
};

onMounted(() => {
    router.push(items.value[0].data);
});
</script>

<style>
</style>
