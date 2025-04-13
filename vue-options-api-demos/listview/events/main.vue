<template>
  <ListView
    :style="{ width: '100%', height: '300px' }"
    :data-items="products"
    :item="'myItem'"
    @scroll="onScroll"
  >
    <template v-slot:myItem="{ props }">
      <div
        class="k-listview-item"
        :style="{ padding: '10px', borderBottom: '1px solid lightgrey' }"
      >
        {{ props.dataItem.ProductName }}
      </div>
    </template>
  </ListView>
  <br />
  <br />
  <Logger :title="'Events list'" :events="eventsList" />
</template>
<script>
import { ListView } from '@progress/kendo-vue-listview';
import Logger from './Logger.vue';

import products from './products.json';

export default {
  components: {
    ListView,
    Logger,
  },
  data() {
    return {
      products: products,
      events: [],
    };
  },
  methods: {
    onScroll(e) {
      this.events.unshift('The Scroll event was triggered');
    },
  },
  computed: {
    eventsList() {
      return this.events;
    },
  },
};
</script>
