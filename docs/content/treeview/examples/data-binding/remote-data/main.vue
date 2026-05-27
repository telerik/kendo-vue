<template>
  <div>
    <TreeView
      :dataItems="tree"
      :expandIcons="true"
      @expandchange="onExpandChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { TreeView } from '@progress/kendo-vue-treeview';

const baseUrl =
  'https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/Categories';
const requestInit = { method: 'GET', accept: 'application/json', headers: [] };

const tree = ref([]);

fetch(baseUrl, requestInit)
    .then((response) => response.json())
    .then((json) => {
        const data = json.value.map(({ CategoryID, CategoryName }) => ({
            text: CategoryName,
            id: CategoryID,
            hasChildren: true,
        }));
        tree.value = data;
    });

function onExpandChange(event) {
    const categoryIndex = Number(event.itemHierarchicalIndex);
    const { data, category } = copyDataAndCategory(categoryIndex);
    category.expanded = !category.expanded;

    tree.value = data;

    if (!category.items) {
        loadProducts(categoryIndex, category.id);
    }
}

function loadProducts(categoryIndex, categoryId) {
    fetch(`${baseUrl}(${categoryId})/Products`, requestInit)
        .then((response) => response.json())
        .then((json) => {
            const { data, category } = copyDataAndCategory(categoryIndex);
            category.items = json.value.map(({ ProductName }) => ({
                text: ProductName,
            }));
            tree.value = data;
        });
}

function copyDataAndCategory(categoryIndex) {
    const data = [...tree.value];
    const category = (data[categoryIndex] = { ...data[categoryIndex] });
    return { data, category };
}
</script>
