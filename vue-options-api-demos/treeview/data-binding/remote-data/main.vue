<template>
  <div>
    <TreeView
      :dataItems="tree"
      :expandIcons="true"
      @expandchange="onExpandChange"
    />
  </div>
</template>

<script>
import { TreeView } from '@progress/kendo-vue-treeview';

const baseUrl =
  'https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/Categories';
const requestInit = { method: 'GET', accept: 'application/json', headers: [] };

export default {
  components: {
    TreeView,
  },
  data() {
    return {
      tree: [],
    };
  },
  mounted() {
    fetch(baseUrl, requestInit)
      .then((response) => response.json())
      .then((json) => {
        const data = json.value.map(({ CategoryID, CategoryName }) => {
          return { text: CategoryName, id: CategoryID, hasChildren: true };
        });

        this.tree = data;
      });
  },
  methods: {
    onExpandChange(event) {
      const categoryIndex = Number(event.itemHierarchicalIndex);
      const { data, category } = this.copyDataAndCategory(categoryIndex);
      category.expanded = !category.expanded;

      this.tree = data;

      !category.items && this.loadProducts(categoryIndex, category.id);
    },
    loadProducts(categoryIndex, categoryId) {
      fetch(`${baseUrl}(${categoryId})/Products`, requestInit)
        .then((response) => response.json())
        .then((json) => {
          const { data, category } = this.copyDataAndCategory(categoryIndex);
          category.items = json.value.map(({ ProductName }) => {
            return { text: ProductName };
          });

          this.tree = data;
        });
    },
    copyDataAndCategory(categoryIndex) {
      const data = this.tree.slice();
      const category = (data[categoryIndex] = { ...data[categoryIndex] });

      return { data, category };
    },
  },
};
</script>
