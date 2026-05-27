<template>
  <div class="panelbar-wrapper">
    <PanelBar :expand-mode="'single'" :items="categoriesView" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { PanelBar } from '@progress/kendo-vue-layout';
import './styles.css';

const baseUrl = 'https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc';
const init = { method: 'GET', accept: 'application/jsonp', headers: {} };
const categoriesView = ref([]);

const filterToString = ({ filter }) => {
    return filter ? `&$filter=${filter}` : '';
};

const queryChildItems = (categoryId) => {
    const queryStr = filterToString({ filter: `CategoryID eq ${categoryId}` });

    fetch(`${baseUrl}/Products?${queryStr}`, init)
        .then((response) => response.json())
        .then((json) => {
            const items = json.value.map((el) => ({ title: el.ProductName }));
            categoriesView.value[categoryId - 1].items = items;
        });
};

const getData = () => {
    fetch(`${baseUrl}/Categories`, init)
        .then((response) => response.json())
        .then((json) => {
            const categories = json.value.map((item) => {
                const data = {
                    title: item.CategoryName,
                    id: item.CategoryID.toString(),
                    items: [],
                };
                queryChildItems(item.CategoryID);
                return data;
            });
            categoriesView.value = categories;
        });
};

onMounted(() => {
    getData();
});
</script>
