<template>
  <div class="panelbar-wrapper">
    <PanelBar :expand-mode="'single'" :items="categoriesView" />
  </div>
</template>

<script>
import { PanelBar } from '@progress/kendo-vue-layout';
import './styles.css';

export default {
  components: {
    PanelBar,
  },
  created() {
    this.getData();
  },
  data() {
    return {
      baseUrl:
        'https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc',
      init: { method: 'GET', accept: 'application/jsonp', headers: {} },
      categoriesView: [],
    };
  },
  methods: {
    queryChildItems(categoryId) {
      const queryStr = this.filterToString({
        filter: `CategoryID eq ${categoryId}`,
      });

      let data;
      fetch(`${this.baseUrl}/Products?${queryStr}`, this.init)
        .then((response) => response.json())
        .then((json) => {
          const items = json.value;
          data = items.map((el) => {
            return { title: el.ProductName };
          });
          this.categoriesView[categoryId - 1].items = data;
        });
    },
    filterToString({ filter }) {
      return filter ? `&$filter=${filter}` : '';
    },
    getData: function (initial) {
      const that = this;
      fetch(this.baseUrl + '/Categories', this.init)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          const categories = json.value;
          that.categoriesView = categories.map((item) => {
            const data = {
              title: item.CategoryName,
              id: item.CategoryID.toString(),
              items: [],
            };
            that.queryChildItems(item.CategoryID);
            return data;
          });
        });
    },
  },
};
</script>
