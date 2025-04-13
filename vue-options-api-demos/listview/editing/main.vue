<template>
  <ListView
    :style="{ width: '100%', height: '500px' }"
    :data-items="products"
    :item="'myItem'"
    :header="'myHeader'"
  >
    <template v-slot:myItem="{ props }">
      <ItemRender
        v-bind="props"
        @saveitem="saveData"
        @deleteitem="deleteData"
      />
    </template>

    <template v-slot:myHeader="{ props }">
      <ListViewHeader
        :style="{ color: 'rgb(160, 160, 160)', fontSize: '14px' }"
        class="pl-3 pb-2 pt-2"
      >
        Product list
      </ListViewHeader>
    </template>
  </ListView>
</template>
<script>
import { ListView, ListViewHeader } from '@progress/kendo-vue-listview';
import ItemRender from './ItemRender.vue';
import products from './products.json';

export default {
  components: {
    ListView,
    ListViewHeader,
    ItemRender,
  },
  data() {
    return {
      products: products,
    };
  },
  methods: {
    saveData(dataItem) {
      this.products = this.products.map((e) =>
        e.ProductID === dataItem.ProductID ? { ...dataItem, edit: false } : e
      );
    },
    deleteData(dataItem) {
      this.products = this.products.filter(
        (e) => e.ProductID !== dataItem.ProductID
      );
    },
  },
};
</script>
