<template>
  <div>
    <div>
      <kendo-menu :items="items" />
    </div>
  </div>
</template>

<script>
import { Menu } from "@progress/kendo-vue-layout";

export default {
  components: {
    "kendo-menu": Menu,
  },
  mounted: function () {
    fetch(this.url)
      .then((response) => response.json())
      .then((json) => {
        this.items = this.mapItems(json.value);
      });
  },
  data: function () {
    return {
      url:
        "https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/Categories?$expand=Products",
      items: [],
    };
  },
  methods: {
    mapItems: function (items) {
      return items.map((item) => {
        const result = {
          text: item.CategoryName,
        };

        if (item.Products) {
          result.items = item.Products.map((childItem) => {
            return {
              text: childItem.ProductName,
            };
          });
        }

        return result;
      });
    },
  },
};
</script>
