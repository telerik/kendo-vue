<template>
  <div>
    <div>
      <kendo-menu :items="items" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Menu as KendoMenu } from "@progress/kendo-vue-layout";

const url =
  "https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/Categories?$expand=Products";
const items = ref([]);

const mapItems = (data) => {
    return data.map((item) => {
        const result = {
            text: item.CategoryName,
        };

        if (item.Products) {
            result.items = item.Products.map((childItem) => ({
                text: childItem.ProductName,
            }));
        }

        return result;
    });
};

onMounted(() => {
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            items.value = mapItems(json.value);
        });
});
</script>
